/**
 * A folded ribbon study, drawn directly with WebGL 1.
 * It is an optional visual enhancement: all portfolio content lives in the DOM.
 */

/**
 * @param {HTMLCanvasElement} canvas
 * @param {{reducedMotion?: boolean, onAvailable?: () => void, onUnavailable?: () => void}} [options]
 * @returns {{setReducedMotion: (value: boolean) => void, destroy: () => void}}
 */
export function initScene(canvas, { reducedMotion, onAvailable, onUnavailable } = {}) {
  const noopController = { setReducedMotion() {}, destroy() {} };
  const available = () => {
    try { onAvailable?.(); } catch { /* The illustration must never break the page. */ }
  };
  const unavailable = () => {
    try { onUnavailable?.(); } catch { /* The illustration must never break the page. */ }
  };
  if (!canvas || typeof canvas.getContext !== 'function') {
    unavailable();
    return noopController;
  }

  canvas.setAttribute('aria-hidden', 'true');
  let gl;
  try {
    gl = canvas.getContext('webgl', {
      alpha: true, antialias: true, depth: true,
      premultipliedAlpha: false, powerPreference: 'low-power',
    });
  } catch { /* A static fallback is owned by the surrounding page. */ }
  if (!gl) {
    unavailable();
    return noopController;
  }

  let destroyed = false;
  let contextLost = false;
  let inViewport = true;
  let motionReduced = reducedMotion ?? window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let frame = 0;
  let previousTime = 0;
  let elapsed = 0;
  let cssWidth = 0;
  let cssHeight = 0;
  let resources = null;
  const pointer = { x: 0, y: 0, currentX: 0, currentY: 0 };
  const pointerTarget = canvas.parentElement || canvas;
  const model = new Float32Array(16);
  const projection = new Float32Array(16);
  const transform = new Float32Array(16);
  const geometry = createRibbon();

  const vertexSource = `
    attribute vec3 aPosition;
    attribute vec3 aNormal;
    uniform mat4 uTransform;
    uniform mat4 uModel;
    varying float vLight;
    void main() {
      vec3 normal = normalize(mat3(uModel) * aNormal);
      vLight = abs(dot(normal, normalize(vec3(-0.35, 0.8, 1.0))));
      gl_Position = uTransform * vec4(aPosition, 1.0);
    }
  `;
  const fragmentSource = `
    precision mediump float;
    uniform vec3 uColor;
    uniform float uAlpha;
    uniform float uSurface;
    varying float vLight;
    void main() {
      float shade = mix(1.0, 0.45 + 0.55 * vLight, uSurface);
      gl_FragColor = vec4(uColor, uAlpha * shade);
    }
  `;

  function compile(type, source) {
    const shader = gl.createShader(type);
    if (!shader) throw new Error('Unable to allocate WebGL shader.');
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      gl.deleteShader(shader);
      throw new Error('Unable to compile the optional illustration.');
    }
    return shader;
  }

  function createResources() {
    const allocatedBuffers = [];
    let program;
    let vertex;
    let fragment;
    try {
      vertex = compile(gl.VERTEX_SHADER, vertexSource);
      fragment = compile(gl.FRAGMENT_SHADER, fragmentSource);
      program = gl.createProgram();
      if (!program) throw new Error('Unable to allocate WebGL program.');
      gl.attachShader(program, vertex);
      gl.attachShader(program, fragment);
      gl.linkProgram(program);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        throw new Error('Unable to link the optional illustration.');
      }
      const upload = (target, values) => {
        const buffer = gl.createBuffer();
        if (!buffer) throw new Error('Unable to allocate WebGL buffer.');
        allocatedBuffers.push(buffer);
        gl.bindBuffer(target, buffer);
        gl.bufferData(target, values, gl.STATIC_DRAW);
        return buffer;
      };
      return {
        program,
        buffers: allocatedBuffers,
        positions: upload(gl.ARRAY_BUFFER, geometry.positions),
        normals: upload(gl.ARRAY_BUFFER, geometry.normals),
        faces: upload(gl.ELEMENT_ARRAY_BUFFER, geometry.faces),
        edges: upload(gl.ELEMENT_ARRAY_BUFFER, geometry.edges),
        sections: upload(gl.ELEMENT_ARRAY_BUFFER, geometry.sections),
        aPosition: gl.getAttribLocation(program, 'aPosition'),
        aNormal: gl.getAttribLocation(program, 'aNormal'),
        uTransform: gl.getUniformLocation(program, 'uTransform'),
        uModel: gl.getUniformLocation(program, 'uModel'),
        uColor: gl.getUniformLocation(program, 'uColor'),
        uAlpha: gl.getUniformLocation(program, 'uAlpha'),
        uSurface: gl.getUniformLocation(program, 'uSurface'),
      };
    } catch (error) {
      allocatedBuffers.forEach(buffer => gl.deleteBuffer(buffer));
      if (program) gl.deleteProgram(program);
      throw error;
    } finally {
      if (vertex) gl.deleteShader(vertex);
      if (fragment) gl.deleteShader(fragment);
    }
  }

  function releaseResources() {
    if (!resources) return;
    resources.buffers.forEach(buffer => gl.deleteBuffer(buffer));
    gl.deleteProgram(resources.program);
    resources = null;
  }

  function canRender() {
    return !destroyed && !contextLost && resources && inViewport && !document.hidden;
  }

  function stop() {
    if (frame) cancelAnimationFrame(frame);
    frame = 0;
    previousTime = 0;
  }

  function requestRender() {
    if (canRender() && !frame) frame = requestAnimationFrame(draw);
  }

  function measure() {
    const rect = canvas.getBoundingClientRect();
    cssWidth = rect.width;
    cssHeight = rect.height;
    const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
    const width = Math.max(1, Math.round(cssWidth * ratio));
    const height = Math.max(1, Math.round(cssHeight * ratio));
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
    }
  }

  function resize() {
    if (destroyed || contextLost) return;
    measure();
    requestRender();
  }

  function draw(now) {
    frame = 0;
    if (!canRender()) return;
    if (cssWidth <= 0 || cssHeight <= 0) return;
    const delta = previousTime ? Math.min((now - previousTime) / 1000, 0.05) : 0;
    previousTime = now;
    if (!motionReduced) elapsed += delta;
    const smoothing = 1 - Math.exp(-delta * 3.5);
    pointer.currentX += (pointer.x - pointer.currentX) * smoothing;
    pointer.currentY += (pointer.y - pointer.currentY) * smoothing;
    const drift = motionReduced ? 0 : Math.sin(elapsed * 0.13) * 0.07;
    const yaw = -0.48 + drift + (motionReduced ? 0 : pointer.currentX * 0.075);
    const pitch = 0.45 + (motionReduced ? 0 : pointer.currentY * 0.055);
    makeRotation(model, pitch, yaw, -0.30);
    const aspect = cssWidth / cssHeight;
    const halfHeight = Math.max(1.40, 1.86 / aspect);
    makeOrthographic(projection, halfHeight * aspect, halfHeight, 8);
    multiply(transform, projection, model);

    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.disable(gl.CULL_FACE);
    gl.useProgram(resources.program);
    gl.bindBuffer(gl.ARRAY_BUFFER, resources.positions);
    gl.enableVertexAttribArray(resources.aPosition);
    gl.vertexAttribPointer(resources.aPosition, 3, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER, resources.normals);
    gl.enableVertexAttribArray(resources.aNormal);
    gl.vertexAttribPointer(resources.aNormal, 3, gl.FLOAT, false, 0, 0);
    gl.uniformMatrix4fv(resources.uTransform, false, transform);
    gl.uniformMatrix4fv(resources.uModel, false, model);

    // A whisper of surface color gives the folds depth without a glossy object.
    gl.enable(gl.POLYGON_OFFSET_FILL);
    gl.polygonOffset(1, 1);
    gl.depthMask(true);
    gl.uniform3f(resources.uColor, 0.208, 0.227, 0.216);
    gl.uniform1f(resources.uAlpha, 0.10);
    gl.uniform1f(resources.uSurface, 1);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, resources.faces);
    gl.drawElements(gl.TRIANGLES, geometry.faces.length, gl.UNSIGNED_SHORT, 0);
    gl.disable(gl.POLYGON_OFFSET_FILL);

    gl.depthMask(false);
    gl.uniform1f(resources.uSurface, 0);
    gl.uniform1f(resources.uAlpha, 0.65);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, resources.edges);
    gl.drawElements(gl.LINES, geometry.edges.length, gl.UNSIGNED_SHORT, 0);
    gl.uniform3f(resources.uColor, 0.545, 0.310, 0.220);
    gl.uniform1f(resources.uAlpha, 0.34);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, resources.sections);
    gl.drawElements(gl.LINES, geometry.sections.length, gl.UNSIGNED_SHORT, 0);
    gl.depthMask(true);

    if (!motionReduced) requestRender();
    else previousTime = 0;
  }

  function pointerMove(event) {
    if (motionReduced || destroyed || !inViewport) return;
    const rect = canvas.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    pointer.x = Math.max(-1, Math.min(1, (event.clientX - rect.left) / rect.width * 2 - 1));
    pointer.y = Math.max(-1, Math.min(1, (event.clientY - rect.top) / rect.height * 2 - 1));
  }

  function pointerLeave() {
    pointer.x = 0;
    pointer.y = 0;
  }

  function visibilityChange() {
    if (document.hidden) stop();
    else requestRender();
  }

  function contextLostHandler(event) {
    event.preventDefault();
    contextLost = true;
    stop();
    // A restored context invalidates every old GL resource.
    resources = null;
    unavailable();
  }

  function contextRestoredHandler() {
    if (destroyed) return;
    contextLost = false;
    try {
      resources = createResources();
      resize();
      available();
    } catch {
      unavailable();
      destroy();
    }
  }

  let intersectionObserver;
  let resizeObserver;
  function destroy() {
    if (destroyed) return;
    destroyed = true;
    stop();
    intersectionObserver?.disconnect();
    resizeObserver?.disconnect();
    window.removeEventListener('resize', resize);
    document.removeEventListener('visibilitychange', visibilityChange);
    pointerTarget.removeEventListener('pointermove', pointerMove);
    pointerTarget.removeEventListener('pointerleave', pointerLeave);
    canvas.removeEventListener('webglcontextlost', contextLostHandler);
    canvas.removeEventListener('webglcontextrestored', contextRestoredHandler);
    if (!contextLost) releaseResources();
  }

  try {
    resources = createResources();
  } catch {
    unavailable();
    destroy();
    return noopController;
  }

  pointerTarget.addEventListener('pointermove', pointerMove, { passive: true });
  pointerTarget.addEventListener('pointerleave', pointerLeave, { passive: true });
  document.addEventListener('visibilitychange', visibilityChange);
  canvas.addEventListener('webglcontextlost', contextLostHandler);
  canvas.addEventListener('webglcontextrestored', contextRestoredHandler);
  window.addEventListener('resize', resize, { passive: true });
  if ('IntersectionObserver' in window) {
    intersectionObserver = new IntersectionObserver(entries => {
      inViewport = entries.some(entry => entry.isIntersecting);
      if (inViewport) requestRender();
      else stop();
    }, { threshold: 0.01 });
    intersectionObserver.observe(canvas);
  }
  if ('ResizeObserver' in window) {
    resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
  }
  resize();
  available();

  return {
    setReducedMotion(value) {
      motionReduced = Boolean(value);
      pointer.x = pointer.y = pointer.currentX = pointer.currentY = 0;
      stop();
      requestRender();
    },
    destroy,
  };
}

function createRibbon() {
  const segments = 160;
  const rails = 9;
  const positions = [];
  const normals = [];
  const faces = [];
  const edges = [];
  const sections = [];
  const sample = t => [
    1.30 * Math.cos(t) + 0.18 * Math.cos(2 * t),
    0.62 * Math.sin(t) + 0.14 * Math.sin(3 * t),
    0.38 * Math.sin(2 * t) + 0.12 * Math.cos(t),
  ];
  for (let i = 0; i < segments; i++) {
    const t = i / segments * Math.PI * 2;
    const center = sample(t);
    const before = sample(t - 0.001);
    const after = sample(t + 0.001);
    const tangent = normalize(after.map((value, k) => value - before[k]));
    const side = normalize(cross(tangent, [0, 0, 1]));
    const up = normalize(cross(side, tangent));
    const twist = t + 0.32 * Math.sin(2 * t);
    const director = side.map((value, k) => value * Math.cos(twist) + up[k] * Math.sin(twist));
    const foldNormal = normalize(cross(tangent, director));
    const width = 0.31 + 0.055 * Math.cos(3 * t + 0.8);
    for (let rail = 0; rail < rails; rail++) {
      const across = rail / (rails - 1) * 2 - 1;
      // A curved fold connects nine rails; the lattice describes a real surface.
      const lift = 0.15 * (1 - across * across);
      positions.push(...center.map((value, k) => value + director[k] * across * width + foldNormal[k] * lift));
      const normal = normalize(foldNormal.map((value, k) => value + director[k] * (0.30 * across / width)));
      normals.push(...normal);
    }
  }
  for (let i = 0; i < segments; i++) {
    const next = (i + 1) % segments;
    for (let rail = 0; rail < rails; rail++) edges.push(i * rails + rail, next * rails + rail);
    for (let rail = 0; rail < rails - 1; rail++) {
      const a = i * rails + rail;
      const b = next * rails + rail;
      faces.push(a, b, a + 1, a + 1, b, b + 1);
    }
    if (i % 4 === 0) {
      for (let rail = 0; rail < rails - 1; rail++) {
        sections.push(i * rails + rail, i * rails + rail + 1);
      }
    }
  }
  return {
    positions: new Float32Array(positions), normals: new Float32Array(normals),
    faces: new Uint16Array(faces), edges: new Uint16Array(edges), sections: new Uint16Array(sections),
  };
}

function normalize(vector) {
  const length = Math.hypot(...vector) || 1;
  return vector.map(value => value / length);
}

function cross(a, b) {
  return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
}

function makeRotation(out, x, y, z) {
  const cx = Math.cos(x), sx = Math.sin(x);
  const cy = Math.cos(y), sy = Math.sin(y);
  const cz = Math.cos(z), sz = Math.sin(z);
  out.set([
    cz * cy, sz * cy, -sy, 0,
    cz * sy * sx - sz * cx, sz * sy * sx + cz * cx, cy * sx, 0,
    cz * sy * cx + sz * sx, sz * sy * cx - cz * sx, cy * cx, 0,
    0, 0, 0, 1,
  ]);
}

function makeOrthographic(out, halfWidth, halfHeight, depth) {
  out.fill(0);
  out[0] = 1 / halfWidth;
  out[5] = 1 / halfHeight;
  out[10] = -1 / depth;
  out[15] = 1;
}

function multiply(out, a, b) {
  for (let column = 0; column < 4; column++) {
    for (let row = 0; row < 4; row++) {
      out[column * 4 + row] =
        a[row] * b[column * 4] + a[4 + row] * b[column * 4 + 1] +
        a[8 + row] * b[column * 4 + 2] + a[12 + row] * b[column * 4 + 3];
    }
  }
}
