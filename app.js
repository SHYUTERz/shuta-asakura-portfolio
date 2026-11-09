'use strict';

const projects = {
  mogumogu: {
    title:'もぐもぐマネジメント', category:'PERSONAL PROJECT / IN DEVELOPMENT',
    lead:'食品管理と野菜キャラクター育成を組み合わせた、個人開発のスマートフォンアプリです。食品を登録・管理し、使い切った実績がキャラクターの成長につながる体験を制作しています。',
    facts:[['制作形態','個人開発・開発中'],['担当','企画・プログラム・3D・UIなど制作全般'],['使用技術','Unity / C# / SQLite'],['動作確認','Android実機']],
    hero:'mogumogu-poster.webp', alt:'食品管理を楽しく継続するアプリ、もぐもぐマネジメントの実機紹介画面。',
    sections:[
      ['主な実装内容',['食品の登録・一覧・詳細・更新・消費完了・廃棄などの食品管理機能。','みまもり中の食品について、期限・確認予定日の前日と当日朝9時にまとめて通知するAndroid通知機能。','食品の消費実績と育成をつなぐ経験値・ユーザーレベル・ペットの成長の基盤。','性格に応じた顔Prefabの交換と、PNG連番による表情アニメーションに対応する構成。','日光浴広場、状態管理、ホラーイベント、ガチャの反動演出など、遊びにつながる機能の基盤。']],
      ['制作で重視していること','食品管理を続ける楽しさを主役にしています。キャラクターが食品を運ぶ演出や、実績に応じた成長を組み合わせ、管理の操作を単なる入力作業で終わらせないことを目指しています。'],
      ['実装状況について','アプリは現在開発中です。紹介動画には仮のUI、テスト用の数値、画面試作が含まれます。ガチャの抽選・景品獲得など、今後実装する機能もあり、完成済みの製品として紹介しているものではありません。']
    ],
    gallery:[['mogumogu-home.webp','育成キャラクターとホーム'],['mogumogu-management.webp','食品管理の実機画面'],['mogumogu-park.webp','日光浴広場の制作画面']],
    credit:'本人による個人開発。紹介動画BGMはKevin MacLeod「Easy Lemon」（CC BY 4.0）。曲の著作権は作曲者に帰属します。'
  },
  aquarium:{
    title:'アロワナ水槽アセット',category:'UNITY ASSET / COLLABORATION',
    lead:'Unity URP向けの水槽インテリアアセット。アロワナの存在感を大切にしながら、モデル・泳ぐ動き・水面やエアレーションの表現をUnityのシーンにまとめた共同制作作品です。',
    facts:[['制作形態','共同制作・BOOTH掲載作品'],['本人の担当','アロワナモデル / 水槽編集 / シェーダー調整'],['使用環境','Unity 2022.3.62f3 URP / Blender 4.5.5'],['モデル規模','アロワナ 約2,198 tris / 水槽 約5,703 tris']],
    hero:'arowana-aquarium.webp',alt:'骨格付きアロワナと流木を配置した、Unity URP対応の水槽インテリア。',
    sections:[['制作内容',['アロワナのモデリング、ボーン、泳ぎとUターンのアニメーション。','水槽の編集とシェーダー調整。水面の揺れはシェーダー、エアレーションはParticle Systemで表現。','レイアウト済みのPrefabとして、シーンに配置して使える構成。']],['制作分担','水槽本体の3DモデリングはHachi.S氏が担当。本人はアロワナモデル、水槽編集、シェーダー調整を担当しています。商品説明・クレジットに基づいて制作範囲を分けて掲載しています。']],
    link:['https://aschan.booth.pm/items/8057151','BOOTHで作品詳細を見る'],
    credit:'Aquarium 3D Modeling: Hachi.S（@meetymeety）。Arowana Model / Aquarium Editing / Shader Adjustment: SHYUTERz。掲載仕様はBOOTHの商品説明に基づきます。公開・販売状況はリンク先をご確認ください。'
  },
  information:{
    title:'バーチャル万博 案内所',category:'XR SPACE / TEAM PROJECT',
    lead:'テンプレートの内観ルームを使い、近未来をテーマにした案内所をチームで制作。案内情報や地図を3D空間に配置し、来場者が目的の場所を探す体験を支える空間にしました。',
    facts:[['制作期間','2か月（2025年の作品記録）'],['制作人数','3名'],['主な担当','小物モデリング、3D文字、地図ジオラマ等'],['使用技術','Unity / Blender / GIMP']],
    hero:'expo-information.webp',alt:'バーチャル万博の案内所に設置された地図のジオラマと案内パネル。',
    sections:[['担当・制作内容',['先輩デザイナーと、必要に応じて案内所の小物をモデリング。','「ミニシアター」「QuizKnock」などの3D文字や、地図を立体化したジオラマを制作。','出展企業一覧・パビリオン一覧などを、案内所の空間と組み合わせて構成。']],['チームでの分担','テンプレートをベースにしたチーム制作です。主にUnityエンジニアがギミックを実装し、デザイナーと本人が必要な小物を制作しました。画面に写る全てのアセットやギミックを、本人が単独で制作したものではありません。']],
    gallery:[['expo-theatre.webp','案内所のサブルーム・シアター']],
    credit:'本人提供の2025年9月版作品集より。バーチャル万博関連のチーム制作。各ブランド・キャラクター等の権利は各権利者に帰属します。'
  },
  fashion:{
    title:'EXPOアリーナ ファッションショー',category:'EVENT SPACE / TEAM PROJECT',
    lead:'新シーズンのアバター衣装を披露するため、既存のEXPOアリーナを大幅に改修。ステージの見え方と、アバターが参加するイベント体験をチームで制作しました。',
    facts:[['制作期間','1か月'],['制作人数','2名'],['制作内容','会場改修、3D看板、小物など'],['使用技術','Unity / Blender / GIMP']],
    hero:'expo-fashion.webp',alt:'ライト演出とアバターが集まる、EXPOアリーナのファッションショー。',
    sections:[['制作したもの',['イベント専用会場として、既存テンプレートをベースに空間を改修。','立体文字看板、会場の設置物、アバターが持つライトやリュックサックなどの小物。','チームでイベントの演出・参加導線を調整。']],['制作から運用で得たこと','アニメーションやギミック、参加人数が増えると、一部端末では動作が重くなりました。この経験を受け、次のイベントでは軽量化と同時参加人数の調整を重視。見た目に加え、実際に遊べる状態を考えるきっかけになりました。']],
    gallery:[['expo-fashion-assets.webp','立体看板、会場小物、アバター向けアイテムの制作記録']],
    credit:'本人提供の作品集より。2名でのチーム制作。既存の会場テンプレートを使用。掲載画像に含まれるブランド・アバター等の権利は各権利者に帰属します。'
  },
  festival:{
    title:'EXPOアリーナ 盆踊り大会',category:'EVENT SPACE / TEAM PROJECT',
    lead:'夕焼けと提灯に囲まれた盆踊り会場を、EXPOアリーナのテンプレートから制作。屋台、和太鼓、食品小物などを組み合わせ、アバターで参加できる祭りの雰囲気をつくりました。',
    facts:[['制作期間','2週間'],['制作人数','2名'],['制作内容','会場改修 / 屋台 / 和太鼓 / 小物'],['使用技術','Unity / Blender / GIMP']],
    hero:'expo-festival.webp',alt:'夕焼けの盆踊り会場に、提灯、やぐら、屋台が並んでいる。',
    sections:[['制作したもの',['テンプレートからの会場改修、提灯、屋台とやぐらの配置。','和太鼓と、わたあめ・フランクフルト・焼きトウモロコシなどの食品小物。','同じ盆踊り企画で、大屋根リングに関連する会場制作も経験。']],['制作上の工夫','短い制作期間で既存空間を活用し、祭りの雰囲気が伝わる小物を制作。イベントでの端末負荷を踏まえ、見た目だけでなく運用時の安定性も考えるようになりました。']],
    gallery:[['expo-festival-overview.webp','盆踊り会場の全体構成'],['expo-drum.webp','和太鼓とやぐら'],['expo-food-props.webp','アバターが持つ食品小物'],['expo-ring.webp','大屋根リングでの盆踊り会場の記録']],
    credit:'本人提供の作品集より。2名でのチーム制作。既存テンプレートを活用。画像内の全ての構成要素を本人が単独で制作したものではありません。'
  },
  quiz:{
    title:'QuizKnock クイズイベント AR版',category:'AR CONTENT / TEAM PROJECT',
    lead:'VRとARの両方を使い、各地のクイズを解いてキーワードを集めるイベント。チーム内で担当を分け、本人はAR版のコンテンツ制作を担当しました。',
    facts:[['制作期間','2週間'],['制作人数','2名'],['本人の担当','AR版コンテンツ制作'],['使用技術','Unity / Blender / GIMP']],
    hero:'quiz-ar.webp',alt:'QuizKnockのARクイズで使う問題・正解・キーワード案内の画面。',
    sections:[['体験の構成','ARを開始するとガイド画像を表示し、現地でスマートフォンをかざす場所を案内。問題に正解するとキーワードを獲得し、VR側とあわせて集める仕組みです。'],['制作分担','UnityエンジニアがVR・ARの画面レイアウトを設計。マルチデバイス対応を考慮して分担し、本人がAR版の制作を担当しました。VR側は関連するチーム制作の記録として掲載しています。']],
    gallery:[['quiz-vr.webp','チームで制作したVR版の関連画面']],
    credit:'本人提供の作品集より。クイズやブランド・キャラクターの権利は各権利者に帰属します。イベント全体を本人が単独で企画・実装したものではありません。'
  }
};


const imageDimensions = {
  "arowana-aquarium.webp": [
    1024,
    576
  ],
  "expo-drum.webp": [
    1360,
    900
  ],
  "expo-fashion-assets.webp": [
    1271,
    1600
  ],
  "expo-fashion.webp": [
    1305,
    680
  ],
  "expo-festival-overview.webp": [
    1440,
    710
  ],
  "expo-festival.webp": [
    1440,
    576
  ],
  "expo-food-props.webp": [
    987,
    1600
  ],
  "expo-information.webp": [
    1440,
    648
  ],
  "expo-ring.webp": [
    1440,
    922
  ],
  "expo-theatre.webp": [
    1440,
    1205
  ],
  "mogumogu-home.webp": [
    432,
    936
  ],
  "mogumogu-management.webp": [
    432,
    936
  ],
  "mogumogu-park.webp": [
    432,
    936
  ],
  "mogumogu-poster.webp": [
    1920,
    1080
  ],
  "quiz-ar.webp": [
    1390,
    1490
  ],
  "quiz-vr.webp": [
    1257,
    1600
  ]
};

const dialog = document.querySelector('#project-dialog');
const content = document.querySelector('#dialog-content');
const closeButton = dialog.querySelector('.dialog-close');
const copyButton = dialog.querySelector('.copy-project');
const nextButton = dialog.querySelector('.dialog-next button');
const projectKeys = Object.keys(projects);
let previousFocus = null;
let activeProject = null;
let copyReset;

function escapeHTML(text) {
  return String(text).replace(/[&<>"']/g, c => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'}[c]));
}
function projectImage(file, alt, className = '', lazy = false) {
  const [width, height] = imageDimensions[file];
  return '<img class="' + className + '" src="assets/images/' + file + '" width="' + width + '" height="' + height + '" alt="' + escapeHTML(alt) + '"' + (lazy ? ' loading="lazy"' : '') + '>';
}
function routeProject() {
  const key = location.hash.replace('#project-', '');
  return location.hash.startsWith('#project-') && Object.hasOwn(projects, key) ? key : null;
}
function renderProject(key, historyMode = 'push') {
  const p = projects[key];
  if (!p) return;
  const wasOpen = dialog.open;
  if (!wasOpen) previousFocus = document.activeElement;
  if (historyMode !== 'none') {
    const returnHash = wasOpen ? history.state?.returnHash || '#works' : location.hash;
    const state = { portfolioProject: wasOpen ? Boolean(history.state?.portfolioProject) : historyMode === 'push', returnHash };
    history[historyMode === 'replace' || wasOpen ? 'replaceState' : 'pushState'](state, '', '#project-' + key);
  }
  activeProject = key;
  dialog.querySelector('.share-url')?.remove();
  clearTimeout(copyReset);
  copyButton.textContent = 'リンクをコピー';
  document.querySelector('#copy-status').textContent = '';
  const index = projectKeys.indexOf(key);
  dialog.querySelector('.dialog-index').textContent = String(index + 1).padStart(2, '0') + ' / 06';
  content.innerHTML = '<article class="project-detail"><p class="project-category">' + escapeHTML(p.category) + '</p><h2 id="dialog-title">' + escapeHTML(p.title) + '</h2><p class="project-lead">' + escapeHTML(p.lead) + '</p><dl>' + p.facts.map(([a,b]) => '<div><dt>' + escapeHTML(a) + '</dt><dd>' + escapeHTML(b) + '</dd></div>').join('') + '</dl><a class="detail-hero-link" href="assets/images/' + p.hero + '" target="_blank" rel="noopener noreferrer" aria-label="作品画像を大きく開く">' + projectImage(p.hero, p.alt, 'detail-hero') + '<span>画像を大きく表示 ↗</span></a>' + p.sections.map(([title,body]) => '<section class="detail-section"><h3>' + escapeHTML(title) + '</h3>' + (Array.isArray(body) ? '<ul>' + body.map(t => '<li>' + escapeHTML(t) + '</li>').join('') + '</ul>' : '<p>' + escapeHTML(body) + '</p>') + '</section>').join('') + (p.gallery ? '<div class="detail-gallery">' + p.gallery.map(([file,label]) => '<figure><a href="assets/images/' + file + '" target="_blank" rel="noopener noreferrer" aria-label="' + escapeHTML(label) + 'を大きく開く">' + projectImage(file, label, '', true) + '</a><figcaption>' + escapeHTML(label) + '</figcaption></figure>').join('') + '</div>' : '') + (p.link ? '<a class="text-link detail-link" href="' + p.link[0] + '" target="_blank" rel="noopener noreferrer">' + escapeHTML(p.link[1]) + ' ↗</a>' : '') + '<p class="detail-credit">' + escapeHTML(p.credit) + '</p></article>';
  nextButton.innerHTML = '次の作品：' + escapeHTML(projects[projectKeys[(index + 1) % projectKeys.length]].title) + ' <span aria-hidden="true">→</span>';
  if (!wasOpen) {
    document.querySelector('video')?.pause();
    scene?.setReducedMotion(true);
    dialog.showModal();
    document.body.classList.add('dialog-open');
  }
  dialog.scrollTop = 0;
  closeButton.focus({ preventScroll: true });
}
function syncRoute() {
  const key = routeProject();
  if (key) {
    if (key !== activeProject || !dialog.open) renderProject(key, 'none');
  } else if (dialog.open) dialog.close();
}
function requestClose() {
  if (history.state?.portfolioProject) history.back();
  else {
    history.replaceState(null, '', history.state?.returnHash || '#works');
    dialog.close();
  }
}
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => renderProject(button.dataset.project)));
closeButton.addEventListener('click', requestClose);
dialog.addEventListener('cancel', event => { event.preventDefault(); requestClose(); });
let backdropDown = false;
function outsideDialog(event) {
  const r = dialog.getBoundingClientRect();
  return event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom;
}
dialog.addEventListener('pointerdown', event => { backdropDown = event.target === dialog && outsideDialog(event); });
dialog.addEventListener('click', event => {
  if (backdropDown && event.target === dialog && outsideDialog(event)) requestClose();
  backdropDown = false;
});
dialog.addEventListener('close', () => {
  const restore = previousFocus === document.body ? document.querySelector('[data-project="' + activeProject + '"]') : previousFocus;
  activeProject = null;
  document.body.classList.remove('dialog-open');
  scene?.setReducedMotion(quiet);
  restore?.focus({ preventScroll: previousFocus !== document.body });
});
nextButton.addEventListener('click', () => renderProject(projectKeys[(projectKeys.indexOf(activeProject) + 1) % projectKeys.length], 'replace'));
copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(location.href);
    copyButton.textContent = 'コピーしました';
    document.querySelector('#copy-status').textContent = 'この作品へのリンクをコピーしました。';
    copyReset = setTimeout(() => { copyButton.textContent = 'リンクをコピー'; }, 2500);
  } catch {
    // A selectable, inline fallback also works when clipboard permission is absent.
    let input = dialog.querySelector('.share-url');
    if (!input) {
      input = document.createElement('input');
      input.className = 'share-url';
      input.readOnly = true;
      input.setAttribute('aria-label', 'この作品の共有URL');
      dialog.querySelector('.dialog-top').after(input);
    }
    input.value = location.href;
    input.focus();
    input.select();
    document.querySelector('#copy-status').textContent = '共有URLを選択しました。コピーしてお使いください。';
  }
});
window.addEventListener('popstate', syncRoute);
window.addEventListener('hashchange', syncRoute);

const filters = document.querySelectorAll('[data-filter]');
const grid = document.querySelector('.work-grid');
filters.forEach(button => button.addEventListener('click', () => {
  const type = button.dataset.filter;
  filters.forEach(b => b.setAttribute('aria-pressed', String(b === button)));
  let visible = 0;
  document.querySelectorAll('.work-card').forEach(card => {
    card.hidden = type !== 'all' && card.dataset.category !== type;
    if (!card.hidden) visible++;
  });
  grid.classList.toggle('is-filtered', type !== 'all');
  document.querySelector('#filter-status').textContent = visible + '件の作品を表示しています。';
}));

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');
function closeMenu(restoreFocus = false) {
  toggle.setAttribute('aria-expanded', 'false');
  nav.classList.remove('open');
  toggle.querySelector('span').textContent = '＋';
  if (restoreFocus) toggle.focus();
}
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('open', open);
  toggle.querySelector('span').textContent = open ? '−' : '＋';
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => closeMenu()));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !dialog.open && nav.classList.contains('open')) closeMenu(true);
});
document.addEventListener('click', event => {
  if (!event.target.closest('.site-header') && nav.classList.contains('open')) closeMenu();
});
const mobileLayout = matchMedia('(max-width: 640px)');
mobileLayout.addEventListener('change', () => closeMenu());
document.documentElement.classList.add('js');

// Quiet mode is useful while presenting and always honors the device preference.
const motionPreference = matchMedia('(prefers-reduced-motion: reduce)');
const motionToggle = document.querySelector('.motion-toggle');
let userQuiet = false;
try { userQuiet = localStorage.getItem('portfolio-quiet') === 'true'; } catch { /* Storage is optional. */ }
let quiet = userQuiet || motionPreference.matches;
let scene;
const entranceAnimations = new Set();
function updateMotion() {
  quiet = userQuiet || motionPreference.matches;
  document.documentElement.dataset.quiet = String(quiet);
  motionToggle.setAttribute('aria-pressed', String(quiet));
  motionToggle.disabled = motionPreference.matches;
  motionToggle.querySelector('.motion-label').textContent = motionPreference.matches ? '静止表示' : quiet ? '動きを有効に' : '動きを止める';
  motionToggle.querySelector('.motion-symbol').textContent = quiet ? '▷' : 'Ⅱ';
  if (quiet) entranceAnimations.forEach(animation => animation.cancel());
  scene?.setReducedMotion(quiet || dialog.open);
}
motionToggle.hidden = false;
motionToggle.addEventListener('click', () => {
  userQuiet = !quiet;
  try { localStorage.setItem('portfolio-quiet', String(userQuiet)); } catch { /* The control still works without persistence. */ }
  updateMotion();
});
motionPreference.addEventListener('change', updateMotion);
updateMotion();

// Each entrance happens once; content remains visible if enhancement is unavailable.
if ('IntersectionObserver' in window) {
  const entrances = new IntersectionObserver(entries => entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entrances.unobserve(entry.target);
    if (quiet || !entry.target.animate) return;
    const animation = entry.target.animate([
      { opacity: .45, transform: 'translateY(16px)' },
      { opacity: 1, transform: 'translateY(0)' }
    ], { duration: 720, easing: 'cubic-bezier(.22,.68,.24,1)' });
    entranceAnimations.add(animation);
    animation.finished.catch(() => {}).finally(() => entranceAnimations.delete(animation));
  }), { threshold: .08, rootMargin: '0px 0px -32px 0px' });
  document.querySelectorAll('.section-heading, .work-card, .about-layout, .skill-row, .timeline > li').forEach(el => entrances.observe(el));
  const sectionVisibility = new Map();
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => sectionVisibility.set(entry.target.id, entry.isIntersecting));
    const current = ['contact','experience','about','works'].find(id => sectionVisibility.get(id))
      || (sectionVisibility.get('skills') ? 'about' : sectionVisibility.get('works-gallery') ? 'works' : null);
    nav.querySelectorAll('a').forEach(a => {
      if (a.hash === '#' + current) a.setAttribute('aria-current','location');
      else a.removeAttribute('aria-current');
    });
  }, { rootMargin: '-18% 0px -35% 0px', threshold: 0 });
  ['works','works-gallery','about','skills','experience','contact'].forEach(id => sectionObserver.observe(document.getElementById(id)));
}
const study = document.querySelector('.form-study');
import('./scene.js').then(({initScene}) => {
  let failed = false;
  scene = initScene(document.querySelector('#form-canvas'), {
    reducedMotion: quiet || dialog.open,
    onAvailable: () => study.classList.add('has-scene'),
    onUnavailable: () => { failed = true; study.classList.remove('has-scene'); }
  });
  if (!failed) study.classList.add('has-scene');
}).catch(() => study.classList.remove('has-scene'));
syncRoute();
