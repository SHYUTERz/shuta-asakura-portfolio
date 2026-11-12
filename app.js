'use strict';

const projects = {
  mogumogu: {
    title:'もぐもぐマネジメント', category:'個人開発・開発中',
    lead:'家にある食品と期限を記録し、使い切るために管理するスマートフォンアプリです。入力した食品の容器を野菜キャラクターが受け取るなど、日々の操作に遊びを組み合わせています。食品を登録せず、お世話を楽しむ育成モードも用意しています。',
    facts:[['制作形態','個人開発・開発中'],['担当','企画・プログラム・3D・UIなど制作全般'],['使用技術','Unity / C# / SQLite'],['動作確認','Android実機']],
    hero:'mogumogu-overview.webp', alt:'もぐもぐマネジメントの紹介映像。家にある食品を野菜キャラクターと楽しく管理するアプリ。',
    sections:[
      ['2つのモード',['食品管理モード：家にある食品と期限を記録し、一覧で確認。使った食品と捨てた食品の結果を残します。','育成モード：食品を登録せずに、野菜キャラクターのお世話を楽しむモードです。']],
      ['食品管理の流れ',['食品名と期限・みまもり方法を入力。分類・メモ・保存場所は必要に応じて設定します。','容器のふたを閉じると、キャラクターが受け取って運びます。食品は続けて入力し、追加した一覧を確認してまとめて登録できます。','冷蔵庫の一覧で食品を確認し、予定が変わったら期限や保管情報を編集。食べたら消費完了、捨てたら廃棄として記録します。']],
      ['紹介動画で見られる工夫',['最近登録した食品は周囲の輝き、期限が近い食品は赤い色で表示。状態の違いを一覧で確認できます。','性格タイプに応じたキャラクターの表情選択。自分の好きな表情を選べます。','日光浴広場では移動と呼びかけの基盤を実装。キャラクターは呼びかけに応じて駆け寄ります。']],
      ['実装している基盤',['Unity / C#で画面・キャラクターの動きと食品管理を制作し、SQLiteでデータを管理。企画・プログラム・3D・UIまで朝倉が担当しています。','みまもり中の食品について、期限・確認予定日の前日と当日朝9時にまとめて通知するAndroid通知機能、消費実績と育成をつなぐ経験値・ユーザーレベルの基盤を実装。これらは今回の動画での紹介範囲には含めていません。','性格に応じた顔Prefabの交換と、PNG連番による表情アニメーションに対応する構成。']],
      ['制作中の部分','アプリは開発中で、映像には仮のUIやテストデータを含みます。カブ・玉ねぎなど他の野菜キャラクターは制作中で、選べる種類を増やす予定です。日光浴広場のおもちゃ遊びの拡充、アニメーションやデザインも制作・調整を進めています。']
    ],
    gallery:[['mogumogu-registration.webp','食品を続けて入力し、まとめて登録する画面'],['mogumogu-inventory.webp','期限や状態を確認できる食品一覧'],['mogumogu-playground.webp','移動・呼びかけの基盤を実装した日光浴広場（UIは調整中）']],
    credit:'朝倉による個人開発。2026年11月提供の紹介映像と掲載用の画面を使用。BGMはKevin MacLeod「Easy Lemon」（CC BY 4.0）。曲の著作権は作曲者に帰属します。'
  },
  aquarium:{
    title:'アロワナの3Dモデル',category:'3Dモデル・共同制作',
    lead:'朝倉がモデリングとアニメーションを制作したアロワナです。魚体や鱗の見え方に加え、ゆったり泳ぐ動きとUターンを制作し、共同制作の水槽に配置しています。',
    facts:[['朝倉の担当','アロワナのモデリング・ボーン・アニメーション / 水槽編集・シェーダー調整'],['制作形態','先輩デザイナーとの共同制作'],['モデル仕様','アロワナ 約2,198 tris / テクスチャ最大1,024 px'],['使用環境','Blender 4.5.5 / Unity 2022.3.62f3 URP']],
    hero:'arowana-model.webp',alt:'朝倉が制作したアロワナ。鱗やひれの形が分かる魚体のクローズアップ。',
    videos:[
      {file:'arowana-showcase',label:'水槽内で泳ぐアロワナ',duration:'38秒',description:'色と照明を変えた魚体の見え方、泳ぎとUターン、最後にアロワナの置物を紹介します。'},
      {file:'arowana-swim',label:'泳ぎのアニメーション',duration:'39秒',description:'Blenderで泳ぎのアニメーションとボーン、アニメーションカーブを確認している制作画面です。'},
      {file:'arowana-turn',label:'Uターンのアニメーション',duration:'19秒',description:'水槽端で方向転換する動きと、ボーンの動作を確認している制作画面です。'},
      {file:'arowana-tail',label:'尾びれの動き',duration:'15秒',description:'尾びれのボーンとアニメーションを確認している制作画面です。'}
    ],
    sections:[['アロワナの制作',['魚体・ひれのモデリングと、動きを付けるためのボーンを制作。','泳ぎとUターンのアニメーションを制作。Blenderで動きを確認し、Unityの水槽内に配置。','水槽の編集とシェーダー調整も担当。水面の揺れにはシェーダー、エアレーションにはParticle Systemを使用。']],['共同制作の経緯と分担','バーチャル万博で共に制作していた先輩デザイナーのHachi.S氏と、隙間時間を使って制作しました。水槽本体の3Dモデリングは、朝倉が伝えた要件に沿ってHachi.S氏が担当。朝倉はアロワナの制作と、水槽編集・シェーダー調整を担当しました。'],['Unityでの構成','水槽・流木・底砂・照明を含めたレイアウトをPrefabにまとめ、Unity URPのシーンに配置して使える構成です。水槽は約5,703 tris。2026年9月18日の更新で、アロワナの置物を追加し、テクスチャを更新しています。']],
    gallery:[['arowana-wireframe.webp','朝倉制作：アロワナのワイヤーフレームとボーン（約2,198 tris）'],['arowana-gold.webp','朝倉制作：金色の魚体と鱗の表現']],
    credit:'アロワナ制作・水槽編集・シェーダー調整：朝倉柊太。水槽本体の3Dモデリング：Hachi.S（バーチャル万博で共に制作した先輩デザイナー）。'
  },
  information:{
    title:'バーチャル万博 案内所',category:'XR空間・チーム制作',
    lead:'テンプレートの内観ルームを使い、近未来をテーマにした案内所をチームで制作。案内情報や地図を3D空間に配置し、来場者が目的の場所を探す体験を支える空間にしました。',
    facts:[['制作期間','2か月（2025年の作品記録）'],['制作人数','3名'],['主な担当','小物モデリング、3D文字、地図ジオラマ等'],['使用技術','Unity / Blender / GIMP']],
    hero:'expo-information.webp',alt:'バーチャル万博の案内所に設置された地図のジオラマと案内パネル。',
    sections:[['担当・制作内容',['先輩デザイナーと、必要に応じて案内所の小物をモデリング。','「ミニシアター」「QuizKnock」などの3D文字や、地図を立体化したジオラマを制作。','出展企業一覧・パビリオン一覧などを、案内所の空間と組み合わせて構成。']],['チームでの分担','テンプレートをベースにしたチーム制作です。主にUnityエンジニアがギミックを実装し、デザイナーと朝倉が必要な小物を制作しました。画面に写る全てのアセットやギミックを、朝倉が単独で制作したものではありません。']],
    references:[{"url":"https://www.expo2025.or.jp/future-index/virtual/virtual-site/","label":"案内所を含む公式の会場案内"}],
    gallery:[['expo-theatre.webp','案内所のサブルーム・シアター']],
    credit:'朝倉提供の2025年9月版作品集より。バーチャル万博関連のチーム制作。各ブランド・キャラクター等の権利は各権利者に帰属します。'
  },
  fashion:{
    title:'EXPOアリーナ ファッションショー',category:'イベント会場・チーム制作',
    lead:'新シーズンのアバター衣装を披露するため、既存のEXPOアリーナを大幅に改修。ステージの見え方と、アバターが参加するイベント体験をチームで制作しました。',
    facts:[['制作期間','1か月'],['制作人数','2名'],['制作内容','会場改修、3D看板、小物など'],['使用技術','Unity / Blender / GIMP']],
    hero:'expo-fashion.webp',alt:'ライト演出とアバターが集まる、EXPOアリーナのファッションショー。',
    sections:[['制作したもの',['イベント専用会場として、既存テンプレートをベースに空間を改修。','立体文字看板、会場の設置物、アバターが持つライトやリュックサックなどの小物。','チームでイベントの演出・参加導線を調整。']],['制作から運用で得たこと','アニメーションやギミック、参加人数が増えると、一部端末では動作が重くなりました。この経験を受け、次のイベントでは軽量化と同時参加人数の調整を重視。見た目に加え、実際に遊べる状態を考えるきっかけになりました。']],
    references:[{"url":"https://www.expo2025.or.jp/officialblog/blog-20250702-01/","label":"ファッションショーの公式紹介"}],
    gallery:[['expo-fashion-assets.webp','立体看板、会場小物、アバター向けアイテムの制作記録']],
    credit:'朝倉提供の作品集より。2名でのチーム制作。既存の会場テンプレートを使用。掲載画像に含まれるブランド・アバター等の権利は各権利者に帰属します。'
  },
  festival:{
    title:'EXPOアリーナ 盆踊り大会',category:'イベント会場・チーム制作',
    lead:'夕焼けと提灯に囲まれた盆踊り会場を、EXPOアリーナのテンプレートから制作。屋台、和太鼓、食品小物などを組み合わせ、アバターで参加できる祭りの雰囲気をつくりました。',
    facts:[['制作期間','2週間'],['制作人数','2名'],['制作内容','会場改修 / 屋台 / 和太鼓 / 小物'],['使用技術','Unity / Blender / GIMP']],
    hero:'expo-festival.webp',alt:'夕焼けの盆踊り会場に、提灯、やぐら、屋台が並んでいる。',
    sections:[['制作したもの',['テンプレートからの会場改修、提灯、屋台とやぐらの配置。','和太鼓と、わたあめ・フランクフルト・焼きトウモロコシなどの食品小物。','同じ盆踊り企画で、大屋根リングに関連する会場制作も経験。']],['制作上の工夫','短い制作期間で既存空間を活用し、祭りの雰囲気が伝わる小物を制作。イベントでの端末負荷を踏まえ、見た目だけでなく運用時の安定性も考えるようになりました。']],
    references:[{"url":"https://www.expo2025.or.jp/officialblog/blog-20250724-02/","label":"盆踊り大会の公式紹介"}],
    gallery:[['expo-festival-overview.webp','盆踊り会場の全体構成'],['expo-drum.webp','和太鼓とやぐら'],['expo-food-props.webp','アバターが持つ食品小物'],['expo-ring.webp','大屋根リングでの盆踊り会場の記録']],
    credit:'朝倉提供の作品集より。2名でのチーム制作。既存テンプレートを活用。画像内の全ての構成要素を朝倉が単独で制作したものではありません。'
  },
  quiz:{
    title:'ARミャクミャクとクイズ',category:'大阪・関西万博 / ARコンテンツ・チーム制作',
    lead:'大阪・関西万博の開催期間中、バーチャル万博アプリで提供された2つのAR体験に携わりました。朝倉は、ARミャクミャクのアニメーションと、QuizKnockのクイズイベントのAR版コンテンツ制作を担当しました。',
    facts:[['担当','ARミャクミャクのアニメーション / クイズAR版コンテンツ制作'],['制作期間','クイズ：2週間'],['制作人数','クイズ：2名'],['使用技術','Unity / Blender / GIMP']],
    hero:'quiz-ar.webp',alt:'QuizKnockのARクイズで使う問題・正解・キーワード案内の画面。',
    sections:[
      ['ARミャクミャクのアニメーション','スマートフォンのカメラ越しに現実の景色へミャクミャクが現れ、一緒に記念撮影を楽しめるAR体験です。朝倉は、ARで表示されるミャクミャクのアニメーション制作を担当しました。'],
      ['QuizKnockのARクイズ','「リアル×バーチャルで万博を巡る！QuizKnockと知るクイズの旅」のAR版を制作しました。写真のヒントを頼りに会場内を巡り、クイズに正解するとキーワードを獲得。AR5問とVR5問の計10問を通じて、限定アイテムを探すイベントでした。'],
      ['クイズ制作の分担','クイズの問題制作はQuizKnock。UnityエンジニアがVR・ARの画面レイアウトを設計し、マルチデバイス対応を考慮して担当を分け、朝倉がAR版コンテンツを制作しました。制作期間2週間・制作人数2名は、このクイズ制作の記録です。VR側の画像は、チームで制作した関連画面として掲載しています。'],
      ['番組で紹介された体験','MBS「超万博♡宣伝部」第6回（2025年10月4日放送）では、会場でARクイズに回答する様子と、巨大ミャクミャクと記念撮影するAR体験が紹介されました。']
    ],
    references:[
      {url:'https://www.expo2025.or.jp/officialblog/blog-20250821-01/',label:'クイズ企画の公式紹介'},
      {url:'https://www.expo2025.or.jp/news/news-20250926-04/',label:'ARミャクミャクなどの公式企画案内'}
    ],
    gallery:[['quiz-vr.webp','チームで制作したVR版の関連画面']],
    credit:'朝倉提供の作品集と担当情報に基づき掲載。クイズの問題制作：QuizKnock。ミャクミャクのキャラクターデザイン、ブランド、番組映像等の権利は各権利者に帰属します。朝倉の担当はARミャクミャクのアニメーションとクイズAR版コンテンツ制作です。'
  }
};


const imageDimensions = {
  "mogumogu-overview.webp": [1920,1080],
  "mogumogu-registration.webp": [402,872],
  "mogumogu-inventory.webp": [402,872],
  "mogumogu-playground.webp": [560,800],
  "arowana-model.webp": [662,506],
  "arowana-gold.webp": [476,296],
  "arowana-wireframe.webp": [1024,433],
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
const demoDisclosure = document.querySelector('details.demo-disclosure#demo');
let previousFocus = null;
let activeProject = null;
let copyReset;
let demoScrollFrame = 0;

demoDisclosure?.addEventListener('toggle', () => {
  if (!demoDisclosure.open) demoDisclosure.querySelector('video')?.pause();
});
document.querySelectorAll('a[href="#demo"]').forEach(link => link.addEventListener('click', () => {
  // Open before the native anchor navigation, including a repeated #demo click.
  if (demoDisclosure) demoDisclosure.open = true;
}));

function revealDemo() {
  if (!demoDisclosure) return;
  demoDisclosure.open = true;
  cancelAnimationFrame(demoScrollFrame);
  demoScrollFrame = requestAnimationFrame(() => {
    demoScrollFrame = 0;
    if (location.hash !== '#demo') return;
    demoDisclosure.scrollIntoView({ behavior: quiet ? 'auto' : 'smooth', block: 'start' });
  });
}

function escapeHTML(text) {
  return String(text).replace(/[&<>"']/g, c => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'}[c]));
}
function projectImage(file, alt, className = '', lazy = false) {
  const [width, height] = imageDimensions[file];
  return '<img class="' + className + '" src="assets/images/' + file + '" width="' + width + '" height="' + height + '" alt="' + escapeHTML(alt) + '"' + (lazy ? ' loading="lazy"' : '') + '>';
}
function projectVideos(videos) {
  if (!videos?.length) return '';
  return '<section class="detail-media" aria-labelledby="detail-media-title"><h3 id="detail-media-title">映像で見る</h3><p class="media-note">完成映像とBlenderの制作画面です。すべて音声なしで、再生ボタンからご覧いただけます。</p>' + videos.map(v => '<details class="demo-disclosure"><summary><span>' + escapeHTML(v.label) + '</span><span class="demo-duration">' + escapeHTML(v.duration) + '</span><span class="disclosure-icon" aria-hidden="true">＋</span></summary><div class="demo-body"><video controls playsinline preload="none" poster="assets/images/' + v.file + '.webp" aria-label="' + escapeHTML(v.label + '、' + v.duration + '、音声なし') + '"><source src="assets/video/' + v.file + '.mp4" type="video/mp4">お使いのブラウザーでは動画を再生できません。<a href="assets/video/' + v.file + '.mp4">MP4を開く</a></video><p class="media-note">' + escapeHTML(v.description) + '</p></div></details>').join('') + '</section>';
}
function projectReferences(references) {
  if (!references?.length) return '';
  return '<section class="detail-section"><h3>大阪・関西万博公式の紹介</h3><ul>' + references.map(reference => '<li><a class="text-link" href="' + escapeHTML(reference.url) + '" target="_blank" rel="noopener noreferrer">' + escapeHTML(reference.label) + ' <span aria-hidden="true">↗</span></a></li>').join('') + '</ul></section>';
}
function pauseProjectVideos() {
  content.querySelectorAll('video').forEach(video => video.pause());
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
  pauseProjectVideos();
  activeProject = key;
  dialog.querySelector('.share-url')?.remove();
  clearTimeout(copyReset);
  copyButton.textContent = 'リンクをコピー';
  document.querySelector('#copy-status').textContent = '';
  const index = projectKeys.indexOf(key);
  dialog.querySelector('.dialog-index').textContent = String(index + 1).padStart(2, '0') + ' / 06';
  content.innerHTML = '<article class="project-detail"><p class="project-category">' + escapeHTML(p.category) + '</p><h2 id="dialog-title">' + escapeHTML(p.title) + '</h2><p class="project-lead">' + escapeHTML(p.lead) + '</p><dl>' + p.facts.map(([a,b]) => '<div><dt>' + escapeHTML(a) + '</dt><dd>' + escapeHTML(b) + '</dd></div>').join('') + '</dl><a class="detail-hero-link" href="assets/images/' + p.hero + '" target="_blank" rel="noopener noreferrer" aria-label="作品画像を大きく開く">' + projectImage(p.hero, p.alt, 'detail-hero') + '<span>画像を大きく表示 ↗</span></a>' + p.sections.map(([title,body]) => '<section class="detail-section"><h3>' + escapeHTML(title) + '</h3>' + (Array.isArray(body) ? '<ul>' + body.map(t => '<li>' + escapeHTML(t) + '</li>').join('') + '</ul>' : '<p>' + escapeHTML(body) + '</p>') + '</section>').join('') + projectVideos(p.videos) + projectReferences(p.references) + (p.gallery ? '<div class="detail-gallery">' + p.gallery.map(([file,label]) => '<figure><a href="assets/images/' + file + '" target="_blank" rel="noopener noreferrer" aria-label="' + escapeHTML(label) + 'を大きく開く">' + projectImage(file, label, '', true) + '</a><figcaption>' + escapeHTML(label) + '</figcaption></figure>').join('') + '</div>' : '') + (p.link ? '<a class="text-link detail-link" href="' + p.link[0] + '" target="_blank" rel="noopener noreferrer">' + escapeHTML(p.link[1]) + ' ↗</a>' : '') + '<p class="detail-credit">' + escapeHTML(p.credit) + '</p></article>';
  content.querySelectorAll('details.demo-disclosure').forEach(details => details.addEventListener('toggle', () => {
    if (!details.open) details.querySelector('video')?.pause();
  }));
  content.querySelectorAll('video').forEach(video => video.addEventListener('play', () => {
    document.querySelectorAll('video').forEach(other => { if (other !== video) other.pause(); });
  }));
  nextButton.innerHTML = '次の作品：' + escapeHTML(projects[projectKeys[(index + 1) % projectKeys.length]].title) + ' <span aria-hidden="true">→</span>';
  if (!wasOpen) {
    document.querySelector('video')?.pause();
    dialog.showModal();
    document.body.classList.add('dialog-open');
  }
  dialog.scrollTop = 0;
  const title = content.querySelector('#dialog-title');
  title.tabIndex = -1;
  title.focus({ preventScroll: true });
}
function syncRoute() {
  const key = routeProject();
  if (key) {
    if (key !== activeProject || !dialog.open) renderProject(key, 'none');
  } else if (dialog.open) dialog.close();
  if (location.hash === '#demo') revealDemo();
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
  pauseProjectVideos();
  const restore = previousFocus === document.body ? document.querySelector('[data-project="' + activeProject + '"]') : previousFocus;
  activeProject = null;
  document.body.classList.remove('dialog-open');
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
const entranceAnimations = new Set();
function updateMotion() {
  quiet = userQuiet || motionPreference.matches;
  document.documentElement.dataset.quiet = String(quiet);
  motionToggle.setAttribute('aria-pressed', String(quiet));
  motionToggle.disabled = motionPreference.matches;
  motionToggle.querySelector('.motion-label').textContent = motionPreference.matches ? '静止表示' : quiet ? '動きを有効に' : '動きを止める';
  motionToggle.querySelector('.motion-symbol').textContent = quiet ? '▷' : 'Ⅱ';
  if (quiet) entranceAnimations.forEach(animation => animation.cancel());
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
  document.querySelectorAll('.section-heading, .work-group-heading, .work-card, .project-row, .about-layout, .skill-row, .timeline > li').forEach(el => entrances.observe(el));
  const groupIds = ['app-projects', 'asset-projects', 'xr-projects'];
  const sectionIds = ['works', ...groupIds, 'about', 'skills', 'experience', 'contact'];
  const headerSection = {
    works: 'works', 'app-projects': 'works', 'asset-projects': 'works', 'xr-projects': 'works',
    about: 'about', skills: 'skills', experience: 'experience', contact: 'contact',
  };
  const groupLinks = document.querySelectorAll('[data-group-link]');
  const sectionVisibility = new Map();
  function updateCurrentSection(entries) {
    entries.forEach(entry => sectionVisibility.set(entry.target.id, entry.isIntersecting));
    const currentSection = [...sectionIds].reverse().find(id => sectionVisibility.get(id));
    const currentHeader = headerSection[currentSection];
    const currentGroup = groupIds.includes(currentSection) ? currentSection : null;
    nav.querySelectorAll('a').forEach(a => {
      if (currentHeader && a.hash === '#' + currentHeader) a.setAttribute('aria-current', 'location');
      else a.removeAttribute('aria-current');
    });
    groupLinks.forEach(a => {
      if (currentGroup && a.hash === '#' + currentGroup) a.setAttribute('aria-current', 'location');
      else a.removeAttribute('aria-current');
    });
  }
  let sectionObserver;
  let resizeFrame;
  function observeSections() {
    sectionObserver?.disconnect();
    sectionVisibility.clear();
    // A narrow band just beneath the header follows the reading position.
    // Pixel margins also remain correct on wide and short viewports.
    const top = Math.min(140, Math.round(window.innerHeight * .18));
    const bottom = Math.max(0, window.innerHeight - top - 16);
    sectionObserver = new IntersectionObserver(updateCurrentSection, {
      rootMargin: '-' + top + 'px 0px -' + bottom + 'px 0px', threshold: 0,
    });
    sectionIds.forEach(id => {
      const section = document.getElementById(id);
      if (section) sectionObserver.observe(section);
    });
  }
  window.addEventListener('resize', () => {
    cancelAnimationFrame(resizeFrame);
    resizeFrame = requestAnimationFrame(observeSections);
  });
  observeSections();
}
syncRoute();
