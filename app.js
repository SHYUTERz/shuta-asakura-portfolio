'use strict';

const projects = {
  mogumogu: {
    title:'もぐもぐマネジメント', category:'個人自主制作・開発中',
    lead:'家にある食品と期限を記録し、使い切るために管理するスマートフォンアプリです。入力した食品の容器を野菜キャラクターが受け取るなど、日々の操作に遊びを組み合わせています。食品を登録せず、お世話を楽しむ育成モードも用意しています。',
    facts:[['制作形態','個人自主制作・開発中'],['制作期間','2026年〜現在（開発中）'],['担当','企画・プログラム・3D・UIなど制作全般'],['使用技術','Unity / C# / SQLite'],['動作確認','Android実機']],
    hero:'mogumogu-overview.webp', alt:'もぐもぐマネジメントの紹介映像です。家にある食品を野菜キャラクターと楽しく管理するアプリです。',
    sections:[
      ['2つのモード',['食品管理モード：家にある食品と期限を記録し、一覧で確認できます。使った食品と捨てた食品の結果を残します。','育成モード：食品を登録せずに、野菜キャラクターのお世話を楽しむモードです。']],
      ['食品管理の流れ',['食品名と期限・みまもり方法を入力します。分類・メモ・保存場所は必要に応じて設定します。','容器のふたを閉じると、キャラクターが受け取って運びます。食品は続けて入力し、追加した一覧を確認してまとめて登録できます。','冷蔵庫の一覧で食品を確認し、予定が変わったら期限や保管情報を編集できます。食べたら消費完了、捨てたら廃棄として記録します。']],
      ['紹介動画で見られる工夫',['最近登録した食品は周囲の輝き、期限が近い食品は赤い色で表示します。状態の違いを一覧で確認できます。','性格タイプに応じて、キャラクターの好きな表情を選べます。','日光浴広場では移動と呼びかけの基盤を実装しました。キャラクターは呼びかけに応じて駆け寄ります。']],
      ['実装している基盤',['Unity / C#で画面・キャラクターの動きと食品管理を制作し、SQLiteでデータを管理しています。企画・プログラム・3D・UIまで朝倉が担当しています。','みまもり中の食品について、期限・確認予定日の前日と当日朝9時にまとめて通知するAndroid通知機能、消費実績と育成をつなぐ経験値・ユーザーレベルの基盤を実装しました。これらは今回の動画では紹介していません。','性格に応じた顔Prefabの交換と、PNG連番による表情アニメーションに対応する構成です。']],
      ['制作中の部分','アプリは開発中で、映像には仮のUIやテストデータを含みます。カブ・玉ねぎなど他の野菜キャラクターは制作中で、選べる種類を増やす予定です。日光浴広場のおもちゃ遊びの拡充、アニメーションやデザインも制作・調整を進めています。']
    ],
    videoLocal:{label:'もぐもぐマネジメントの紹介動画',duration:'2分25秒・紹介映像',clock:'02:25',file:'mogumogu-introduction-20261111',poster:'mogumogu-overview.webp',captions:'mogumogu-introduction-ja.vtt',description:'食品の登録・確認・編集・消費・廃棄と、キャラクターとのふれあいを紹介する映像です。',note:'開発中の画面とテストデータを一部含みます。BGM付きで、操作説明は映像内の文字と日本語字幕で確認できます。'},
    gallery:[['mogumogu-registration.webp','食品を続けて入力し、まとめて登録する画面'],['mogumogu-inventory.webp','期限や状態を確認できる食品一覧'],['mogumogu-playground.webp','移動・呼びかけの基盤を実装した日光浴広場（UIは調整中）']],
    credit:'朝倉による個人開発です。2026年11月提供の紹介映像と掲載用の画面を使用しています。BGMはKevin MacLeod「Easy Lemon」（CC BY 4.0）です。曲の著作権は作曲者に帰属します。'
  },
  sales:{
    title:'SalesManagement21 販売管理システム',category:'専門学校の授業課題・チームリーダー',
    lead:'大阪情報コンピュータ専門学校の「システム開発演習」で、2022年〜2023年に6名で制作したWindows向け販売管理システムです。朝倉はチームリーダーとしてメンバーをまとめ、顧客・商品管理から受発注・入出庫・売上・在庫管理までの開発に取り組みました。2023年の学内作品展「メディアフロンティア2023」で、システム開発演習規定課題部門の佳作を受賞しました。',
    facts:[['制作形態','専門学校の授業課題（システム開発演習）'],['制作期間','2022年〜2023年'],['制作体制','6名・チームリーダー'],['担当','チームリーダー（メンバーの取りまとめ）'],['開発言語・UI','C# / Windows Forms / .NET Framework 4.6.1'],['データアクセス','Entity Framework 6.4.4 / SQL Server LocalDB'],['受賞','メディアフロンティア2023 システム開発演習規定課題部門・佳作']],
    hero:'sales-management-menu.png',alt:'販売管理システムのメニュー。顧客・商品・社員のマスターと受注・発注・入出庫・売上・在庫の画面を選択できます。',
    sections:[
      ['管理機能',['顧客・営業所・商品・メーカー・商品分類・社員・役職の情報を登録・検索・更新・削除できます。','受注・注文・出庫・入荷・出荷・発注・入庫・売上・在庫を管理します。','画面内の関連IDから別の管理画面に移動して検索できます。']],
      ['仮登録機能',['1件の受注・発注に複数の商品明細を追加し、まとめて登録するための機能を用意しました。','仮登録用データベースに一時保存し、登録完了時に本データベースへ反映します。キャンセル時には仮登録用データを初期化します。','仮登録中の商品IDの重複チェックで誤登録の防止を図っています。']],
      ['業務間の連携',['受注確定時に在庫を減算し、入庫完了時には在庫を加算します。対象の商品が未登録の場合は在庫情報を追加する処理を設計しました。','出荷確定を売上情報へ反映し、確定済みのレコードについては特定の更新を制限します。']],
      ['社員権限管理',['本社・営業所・物流（倉庫）の3区分で利用可能な画面を分け、使えない機能は無効なボタンとして表示します。','社員登録後、所属情報が設定されるまでは利用を制限する運用を想定しています。']],
      ['受賞歴','2023年の学内作品展「メディアフロンティア2023」において、十数チーム以上が参加したシステム開発演習規定課題部門で佳作を受賞しました。']
    ],
    videoEmbed:{label:'SalesManagement21 紹介動画',duration:'8分23秒',src:'https://drive.google.com/file/d/11KT8Jc568kJhl5D_Ue-GFvpNZLzDZLTv/preview',watchUrl:'https://drive.google.com/file/d/11KT8Jc568kJhl5D_Ue-GFvpNZLzDZLTv/view',description:'2023年の学内作品展向けに制作した販売管理システムの紹介映像です。画面や機能の動作を確認できます。'},
    credit:'大阪情報コンピュータ専門学校のシステム開発演習で制作しました（2022〜2023年）。6名のチーム制作で、朝倉はリーダーを担当しました。2023年のメディアフロンティアでシステム開発演習規定課題部門・佳作を受賞しました。'
  },
  aquarium:{
    title:'アロワナの3Dモデル',category:'業務外の共同自主制作',
    lead:'バーチャル万博で一緒に仕事をした先輩デザイナーのHachi.S氏と、業務外に共同自主制作した3Dアセットです。朝倉がアロワナのモデリング・ボーン・泳ぎやUターンのアニメーションを担当し、水槽の編集やシェーダーも調整しました。',
    facts:[['制作時期','2025年3月〜4月'],['制作形態','業務外の共同自主制作（Hachi.S氏と2名）'],['朝倉の担当','アロワナのモデリング・ボーン・アニメーション / 水槽編集・シェーダー調整'],['共同制作者の担当','Hachi.S氏：水槽本体の3Dモデリング'],['モデル仕様','アロワナ 約2,198 tris / テクスチャ最大1,024 px'],['使用環境','Blender 4.5.5 / Unity 2022.3.62f3 URP']],
    hero:'arowana-model.webp',alt:'朝倉が制作したアロワナ。鱗やひれの形が分かる魚体のクローズアップ。',
    videos:[
      {file:'arowana-showcase',label:'水槽内で泳ぐアロワナ',duration:'38秒',description:'色と照明を変えた魚体の見え方、泳ぎとUターン、最後にアロワナの置物を紹介します。'},
      {file:'arowana-swim',label:'泳ぎのアニメーション',duration:'39秒',description:'Blenderで泳ぎのアニメーションとボーン、アニメーションカーブを確認している制作画面です。'},
      {file:'arowana-turn',label:'Uターンのアニメーション',duration:'19秒',description:'水槽端で方向転換する動きと、ボーンの動作を確認している制作画面です。'},
      {file:'arowana-tail',label:'尾びれの動き',duration:'15秒',description:'尾びれのボーンとアニメーションを確認している制作画面です。'}
    ],
    sections:[['アロワナの制作',['魚体・ひれのモデリングと、動きを付けるためのボーンを制作しました。','泳ぎとUターンのアニメーションを制作しました。Blenderで動きを確認し、Unityの水槽内に配置しました。','水槽の編集とシェーダー調整も担当しました。水面の揺れにはシェーダー、エアレーションにはParticle Systemを使用しています。']],['共同制作の経緯と分担','バーチャル万博で共に仕事をした先輩デザイナーのHachi.S氏と、業務外に共同自主制作しました。水槽本体の3Dモデリングは、朝倉が伝えた要件に沿ってHachi.S氏が担当しました。朝倉はアロワナの制作と、水槽編集・シェーダー調整を担当しました。'],['Unityでの構成','水槽・流木・底砂・照明を含めたレイアウトをPrefabにまとめ、Unity URPのシーンに配置して使える構成です。水槽は約5,703 trisです。2026年9月18日の更新で、アロワナの置物を追加し、テクスチャを更新しています。']],
    gallery:[['arowana-wireframe.webp','朝倉制作：アロワナのワイヤーフレームとボーン（約2,198 tris）'],['arowana-gold.webp','朝倉制作：金色の魚体と鱗の表現']],
    credit:'アロワナのモデリング・ボーン・アニメーション、水槽編集・シェーダー調整は朝倉柊太、水槽本体の3DモデリングはHachi.S氏が担当しました。業務外での共同自主制作です（2025年3月〜4月）。'
  },
  bed:{
    title:'ハイポリゴン・ベッドモデル',category:'個人自主制作・自己研鑽',
    lead:'バーチャル万博の業務に携わっていた2025年4月〜5月、休日などを利用して自己研鑽として制作したベッドの3Dモデルです。寝具の形状や布の質感、細部の表現に取り組みました。',
    facts:[['制作形態','個人自主制作（自己研鑽）'],['制作時期','2025年4月〜5月'],['制作人数','1名'],['担当','3Dモデル制作・質感調整・レンダリング']],
    hero:'selfstudy-bed.jpg',alt:'自己研鑽として制作したベッドの3Dモデルです。掛け布団、枕、マットレス、ベッド脚のディテールが見える。',
    sections:[['制作背景','バーチャル万博の業務期間中に、休日などを使って個人で制作しました。3Dモデリングの技術向上を目的とした自主制作です。'],['制作内容','掛け布団や枕、マットレスなどの形状と、布の質感・しわの表現に取り組みました。']],
    credit:'2025年4月〜5月に、朝倉柊太が休日の自己研鑽として個人制作しました。'
  },
  meeting:{
    title:'バーチャルミーティング 大阪オフィス',category:'研修後の社内制作・チーム',
    lead:'2024年、VRIA研修終了後の待機期間中に、上司からの提案をきっかけとして社内チームで制作したバーチャルミーティングアプリです。朝倉は主にデザイナーとして参加し、Blender・GIMPによる3D・画像制作を担当しました。',
    facts:[['制作時期','2024年'],['制作形態','VRIA研修後の待機期間中・社内チーム制作'],['担当','3D・画像デザイン'],['デザインツール','Blender / GIMP'],['開発チームの環境','Unity / C# / Git']],
    hero:'virtual-meeting-cover.svg',alt:'バーチャルミーティング 大阪オフィスの紹介用タイトルカード。実際のアプリ画面ではありません。',
    sections:[
      ['制作背景','VRIA研修後の待機期間中、上司からの提案をきっかけとして社内チームで制作しました。'],
      ['デザイン制作','Blenderを使った3D制作と、GIMPを使った画像制作を担当しました。'],
      ['チームでの開発','デザインチームと開発チームが連携して制作しました。アプリ開発にはUnity / C#とGitが使用されました。']
    ],
    videoEmbed:{label:'バーチャルミーティング 大阪オフィス 紹介動画',duration:'約22分6秒・無音版',clock:'22:06',topline:'バーチャルミーティングの紹介',src:'https://drive.google.com/file/d/11FVB5NxcZnDzP3_hlN-mbp-PKZHYGgF5/preview',watchUrl:'https://drive.google.com/file/d/11FVB5NxcZnDzP3_hlN-mbp-PKZHYGgF5/view',description:'社内チーム制作のバーチャルミーティングアプリの紹介映像です。朝倉は3D・画像デザインを担当し、アプリの開発は開発チームが担当しました。'},
    credit:'2024年、VRIA研修終了後に社内チームで制作しました。3D・画像デザインは朝倉柊太、アプリ開発は開発チーム（Unity / C# / Git）が担当しました。'
  },
  information:{
    title:'バーチャル万博 案内所',category:'業務案件・チーム制作',
    lead:'バーチャル万博の業務として、既存の内観ルームを活用しながら来場者向けの案内所を3名で制作しました。朝倉は3D文字、案内用の小物、会場地図のジオラマなどを担当しました。',
    facts:[['制作形態','業務案件・チーム制作'],['制作時期','2025年（制作期間：約2か月）'],['制作人数','3名'],['担当','小物モデリング・3D文字・地図ジオラマ'],['使用技術','Unity / Blender / GIMP']],
    hero:'expo-information.webp',alt:'バーチャル万博の案内所に設置された地図のジオラマと案内パネル。',
    sections:[['担当・制作内容',['先輩デザイナーと、必要に応じて案内所の小物をモデリングしました。','「ミニシアター」「QuizKnock」などの3D文字や、地図を立体化したジオラマを制作しました。','出展企業一覧・パビリオン一覧などを、案内所の空間と組み合わせて構成しました。']],['チームでの分担','テンプレートをベースにしたチーム制作です。主にUnityエンジニアがギミックを実装し、デザイナーと朝倉が必要な小物を制作しました。']],
    references:[{"url":"https://www.expo2025.or.jp/future-index/virtual/virtual-site/","label":"案内所を含む公式の会場案内"}],
    gallery:[['expo-theatre.webp','案内所のサブルーム・シアター']],
    credit:'バーチャル万博の業務案件として3名で制作しました。朝倉柊太は小物・3D文字・地図ジオラマを担当しました。各ブランド・キャラクターなどの権利は各権利者に帰属します。'
  },
  fashion:{
    title:'EXPOアリーナ ファッションショー',category:'業務案件・チーム制作',
    lead:'バーチャル万博の業務として、既存のEXPOアリーナをファッションショー向けに大幅改修しました。朝倉は会場改修や立体看板、アバターが使用するアイテムなどを制作しました。',
    facts:[['制作形態','業務案件・チーム制作'],['制作時期','2025年（制作期間：約1か月）'],['制作人数','2名'],['担当','会場改修・3D看板・小物・アバター用アイテム'],['使用技術','Unity / Blender / GIMP']],
    hero:'expo-fashion.webp',alt:'ライト演出とアバターが集まる、EXPOアリーナのファッションショー。',
    sections:[['制作したもの',['イベント専用会場として、既存テンプレートをベースに空間を改修しました。','立体文字看板、会場の設置物、アバターが持つライトやリュックサックなどの小物を制作しました。','チームでイベントの演出・参加導線を調整しました。']],['制作から運用で得たこと','アニメーションやギミック、参加人数が増えると、一部端末では動作が重くなりました。この経験を受け、次のイベントでは軽量化と同時参加人数の調整を重視しました。見た目に加え、実際に遊べる状態を考えるきっかけになりました。']],
    references:[{"url":"https://www.expo2025.or.jp/officialblog/blog-20250702-01/","label":"ファッションショーの公式紹介"}],
    gallery:[['expo-fashion-assets.webp','立体看板、会場小物、アバター向けアイテムの制作記録']],
    credit:'バーチャル万博の業務案件として2名で制作しました。既存会場をイベント向けに改修しました。ブランド・アバターなどの権利は各権利者に帰属します。'
  },
  festival:{
    title:'EXPOアリーナ 盆踊り大会',category:'業務案件・EXPOアリーナ版2名制作／大屋根リング版2名制作',
    lead:'バーチャル万博の業務として、EXPOアリーナ版と大屋根リング版の盆踊り会場をそれぞれ2名で制作しました。朝倉はEXPOアリーナ版で屋台や和太鼓などを担当し、大屋根リング版では約1週間で会場全体の制作を担当しました。',
    facts:[['制作形態','バーチャル万博の業務制作'],['制作時期','2025年7月頃'],['EXPOアリーナ版','約2週間・2名で制作'],['大屋根リング版','約1週間・2名で制作'],['担当','EXPOアリーナ：会場改修・屋台・和太鼓・食品小物／大屋根リング版：会場全体の制作'],['使用技術','Unity / Blender / GIMP']],
    hero:'expo-festival.webp',alt:'夕焼けの盆踊り会場に、提灯、やぐら、屋台が並んでいる。',
    sections:[
      ['EXPOアリーナ版（2名制作）',['既存のEXPOアリーナを盆踊り会場に改修し、提灯・屋台・やぐらなどを配置しました。','朝倉は和太鼓や、わたあめ・フランクフルト・焼きトウモロコシなどの食品小物を制作しました。','EXPOアリーナ版の制作期間は約2週間、制作人数は2名です。']],
      ['大屋根リング版（2名制作）',['EXPOアリーナでの盆踊り大会直後、急な依頼を受けて別会場を制作しました。2025年7月28日にイベントが開催されました。','会場のテンプレートがない状態から、設計図や現地写真を参考に大屋根リングを実寸に近い規模でモデリングしました。','大屋根リング版は2名体制で制作しました。朝倉は約1週間で会場全体の制作を担当し、ワープ機能や映像配信などのギミックも設けられました。']],
      ['来場者との交流','イベント進行の担当とは別に、自主的に来場者と交流しました。制作した会場やギミック、景色を楽しめるフォトスポットを案内しました。']
    ],
    references:[{"url":"https://www.expo2025.or.jp/officialblog/blog-20250724-02/","label":"盆踊り大会の公式紹介"}],
    gallery:[['expo-festival-overview.webp','盆踊り会場の全体構成'],['expo-drum.webp','和太鼓とやぐら'],['expo-food-props.webp','アバターが持つ食品小物'],['expo-ring.webp','大屋根リングでの盆踊り会場の記録'],['expo-ring-bonodori-overview.png','大屋根リング版：提灯と会場全体の構成'],['expo-ring-bonodori-screen.png','大屋根リング版：会場に設置された大型スクリーン']],
    credit:'バーチャル万博の業務制作です。EXPOアリーナ版・大屋根リング版ともに2名で制作しました。大屋根リング版では朝倉柊太が会場全体の制作を担当しました。'
  },
  closing:{
    title:'バーチャル万博 閉幕式会場',category:'業務案件・単独制作（Unity実装含む）',
    lead:'バーチャル万博の閉幕式に向け、2025年9月中旬頃に約1週間で会場全体を単独制作しました。会場制作からUnityエンジニアとしての実装業務まで、すべて朝倉が一人で担当しました。来場者は紅葉に囲まれた広い道を進み、これまでのパビリオンやイベントを見ながら振り返ります。最後に焚き火のある小さな広場に到達し、そこでスタッフが閉幕式を開催しました。別セッションルームを含む参加者は総計約500名でした。',
    facts:[['制作形態','バーチャル万博の業務案件・単独制作（Unity実装含む）'],['制作時期','2025年9月中旬頃（制作期間：約1週間）'],['制作人数','1名（会場制作・Unity実装を朝倉がすべて担当／式典の進行はスタッフ）'],['担当','会場全体の制作・秋の景観・落ち葉のギミック・Unity実装全般'],['来場規模','別セッションルームを含む総計：約500名']],
    hero:'expo-closing-crowd.png',alt:'焚き火を囲む多数の来場者。画面左上に99/100と表示された閉幕式会場です。',
    sections:[
      ['閉幕式会場の目的と体験','万博の締めくくりとして、これまでのパビリオンやイベントを振り返るための会場です。来場者は紅葉に囲まれた広い道を歩き、過去の催しを見ながら奥へ進みます。'],
      ['道の終点にある閉幕式の広場','広い道を進んだ先には焚き火のある小さな広場があり、そこでスタッフが閉幕式を開催しました。会場制作と式典進行は別の担当者が担いました。'],
      ['会場制作と落ち葉のギミック','急な依頼を受け、2025年9月中旬頃に約1週間で会場全体を単独制作しました。紅葉や夕景を取り入れた空間づくりに加え、落ち葉のギミックなどUnityエンジニアとしての実装業務もすべて朝倉が担当しました。'],
      ['来場規模・来場者との交流','当日は別セッションルームを含む総計約500名が参加しました。朝倉は進行担当とは別に来場者と自主的に交流し、制作したギミックや景色を楽しめるフォトスポットを案内しました。']
    ],
    videoEmbed:{label:'閉幕式会場の紹介動画',duration:'会場の収録映像',topline:'これまでの催しを振り返る道から、焚き火の広場へ',clock:'会場紹介',src:'https://drive.google.com/file/d/12zAP1gIwy_0TVHm6JMwmDbQIQrxZqDpY/preview',watchUrl:'https://drive.google.com/file/d/12zAP1gIwy_0TVHm6JMwmDbQIQrxZqDpY/view',description:'紅葉の広い道を歩きながら過去のパビリオンやイベントを振り返り、最後に焚き火のある小さな広場でスタッフが閉幕式を開催する会場の紹介です。',sourceNote:'Google Driveの会場収録動画を埋め込み表示しています。約343MBの動画のため再生に時間がかかる場合があります。再生できない場合は'},
    gallery:[['expo-closing-gathering.png','閉幕式会場で来場者が集まった記念写真'],['expo-closing-venue.png','焚き火と閉幕式の案内スクリーンを設けた終点の広場'],['expo-closing-photo-spot.png','夕景のフォトスポットでの集合写真（従来掲載分）']],
    credit:'バーチャル万博の閉幕式会場全体の制作とUnityエンジニア業務を朝倉柊太が単独で担当しました（2025年9月中旬頃、約1週間）。式典の進行はスタッフが担当しました。参加者は別セッションルームを含む総計約500名でした。'
  },
  quiz:{
    title:'ARミャクミャクとクイズ',category:'業務案件・ARコンテンツ制作',
    lead:'バーチャル万博の業務として、公式キャラクター「ミャクミャク」のAR用アニメーションと、QuizKnockのクイズイベントのAR版コンテンツ制作を担当しました。クイズの問題はQuizKnockが制作しています。',
    facts:[['制作形態','業務案件・チーム制作'],['制作時期','ARミャクミャク：2025年4月〜8月 / クイズAR版：2025年（約2週間）'],['制作体制','ミャクミャクのアニメーション：1名 / クイズ：2名'],['担当','ミャクミャクのボーン・アニメーション / クイズAR版コンテンツ制作'],['使用技術','Unity / Blender / GIMP']],
    hero:'quiz-ar.webp',alt:'QuizKnockのARクイズで使う問題・正解・キーワード案内の画面。',
    sections:[
      ['ARミャクミャクのアニメーション',['提供された公式キャラクターのFBXデータにボーンを組み込み、AR体験用のポーズや歩行などの3Dアニメーションを制作しました。','記念撮影に適したポーズや動作を調整し、AR表示位置との整合を確認しながら修正しました。','制作記録上の期間は2025年4月1日〜8月31日、アニメーション制作人数は1名です。']],
      ['QuizKnockのARクイズ','「リアル×バーチャルで万博を巡る！QuizKnockと知るクイズの旅」のAR版を制作しました。写真のヒントを頼りに会場内を巡り、クイズに正解するとキーワードを獲得します。AR5問とVR5問の計10問を通じて、限定アイテムを探すイベントでした。'],
      ['クイズ制作の分担','クイズの問題制作はQuizKnockが担当しました。UnityエンジニアがVR・ARの画面レイアウトを設計し、マルチデバイス対応を考慮して担当を分け、朝倉がAR版コンテンツを制作しました。制作期間2週間・制作人数2名は、このクイズ制作の記録です。VR側の画像は、チームで制作した関連画面として掲載しています。'],
      ['番組で紹介された体験','MBS「超万博♡宣伝部」第6回（2025年10月4日放送）では、会場でARクイズに回答する様子と、巨大ミャクミャクと記念撮影するAR体験が紹介されました。']
    ],
    references:[
      {url:'https://www.expo2025.or.jp/officialblog/blog-20250821-01/',label:'クイズ企画の公式紹介'},
      {url:'https://www.expo2025.or.jp/news/news-20250926-04/',label:'ARミャクミャクなどの公式企画案内'}
    ],
    gallery:[['quiz-vr.webp','チームで制作したVR版の関連画面']],
    credit:'バーチャル万博の業務として制作しました。ARミャクミャクのボーン・アニメーションとクイズAR版コンテンツの制作は朝倉柊太、クイズ問題の制作はQuizKnockが担当しました。キャラクター・番組映像等の権利は各権利者に帰属します。'
  }
};


const imageDimensions = {
  "selfstudy-bed.jpg": [3072,1727],
  "expo-closing-crowd.png": [2340,1080],
  "expo-closing-gathering.png": [1924,1080],
  "expo-closing-venue.png": [2340,1080],
  "expo-closing-photo-spot.png": [2340,1080],
  "expo-ring-bonodori-overview.png": [1904,1080],
  "expo-ring-bonodori-screen.png": [1863,1063],
  "sales-management-menu.png": [1920,1020],
  "virtual-meeting-cover.svg": [1200,750],
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
function projectLocalVideo(video) {
  if (!video) return '';
  const source = 'assets/video/' + video.file + '.mp4';
  return '<section class="detail-media" aria-label="紹介動画"><h3>紹介動画</h3><details class="demo-disclosure"><summary><span>紹介動画を見る</span><span class="demo-duration">' + escapeHTML(video.duration) + '</span><span class="disclosure-icon" aria-hidden="true">＋</span></summary><div class="demo-body"><p class="demo-description">' + escapeHTML(video.description) + '</p><div class="media-topline"><span>' + escapeHTML(video.label) + '</span><span>' + escapeHTML(video.clock) + '</span></div><video controls playsinline preload="none" poster="assets/images/' + escapeHTML(video.poster) + '" aria-label="' + escapeHTML(video.label) + '"><source src="' + escapeHTML(source) + '" type="video/mp4">' + (video.captions ? '<track kind="captions" src="assets/video/' + escapeHTML(video.captions) + '" srclang="ja" label="日本語の内容説明">' : '') + 'このブラウザーでは動画を再生できません。<a href="' + escapeHTML(source) + '">MP4を開く</a></video><p class="media-note">' + escapeHTML(video.note) + '</p></div></details></section>';
}
function projectVideos(videos) {
  if (!videos?.length) return '';
  return '<section class="detail-media" aria-labelledby="detail-media-title"><h3 id="detail-media-title">映像で見る</h3><p class="media-note">完成映像とBlenderの制作画面です。どの動画にも音声はありません。再生ボタンから閲覧できます。</p>' + videos.map(v => '<details class="demo-disclosure"><summary><span>' + escapeHTML(v.label) + '</span><span class="demo-duration">' + escapeHTML(v.duration) + '</span><span class="disclosure-icon" aria-hidden="true">＋</span></summary><div class="demo-body"><video controls playsinline preload="none" poster="assets/images/' + v.file + '.webp" aria-label="' + escapeHTML(v.label + '、' + v.duration + '、音声なし') + '"><source src="assets/video/' + v.file + '.mp4" type="video/mp4">このブラウザーでは動画を再生できません。<a href="assets/video/' + v.file + '.mp4">MP4を開く</a></video><p class="media-note">' + escapeHTML(v.description) + '</p></div></details>').join('') + '</section>';
}
function projectEmbeddedVideo(video) {
  if (!video) return '';
  return '<section class="detail-media" aria-label="紹介動画"><h3>紹介動画</h3><details class="demo-disclosure"><summary><span>' + escapeHTML(video.label) + '</span><span class="demo-duration">' + escapeHTML(video.duration) + '</span><span class="disclosure-icon" aria-hidden="true">＋</span></summary><div class="demo-body"><p class="demo-description">' + escapeHTML(video.description) + '</p><div class="media-topline"><span>' + escapeHTML(video.topline || video.label) + '</span><span>' + escapeHTML(video.clock || '') + '</span></div><iframe class="embedded-video" data-src="' + escapeHTML(video.src) + '" title="' + escapeHTML(video.label) + '" loading="lazy" allow="fullscreen; picture-in-picture" allowfullscreen></iframe><p class="media-note">' + escapeHTML(video.sourceNote || 'Google Driveの動画を埋め込み表示しています。再生できない場合は') + ' <a href="' + escapeHTML(video.watchUrl) + '" target="_blank" rel="noopener noreferrer">Google Driveで動画を開く</a>。</p></div></details></section>';
}
function syncEmbeddedVideo(details) {
  const iframe = details.querySelector('iframe[data-src]');
  if (!iframe) return;
  if (details.open) {
    iframe.src = iframe.dataset.src;
    document.querySelectorAll('video').forEach(video => video.pause());
  } else {
    iframe.removeAttribute('src');
  }
}
const cardDemoDisclosures = document.querySelectorAll('#demo, #sales-demo, #aquarium-demo, #meeting-demo, #closing-demo');
cardDemoDisclosures.forEach(details => details.addEventListener('toggle', () => {
  if (!details.open) details.querySelector('video')?.pause();
  if (details.open) {
    cardDemoDisclosures.forEach(other => { if (other !== details && other.open) other.open = false; });
  }
  syncEmbeddedVideo(details);
}));
function projectReferences(references) {
  if (!references?.length) return '';
  return '<section class="detail-section"><h3>大阪・関西万博公式の紹介</h3><ul>' + references.map(reference => '<li><a class="text-link" href="' + escapeHTML(reference.url) + '" target="_blank" rel="noopener noreferrer">' + escapeHTML(reference.label) + ' <span aria-hidden="true">↗</span></a></li>').join('') + '</ul></section>';
}
function pauseProjectVideos() {
  content.querySelectorAll('video').forEach(video => video.pause());
  content.querySelectorAll('iframe[data-src]').forEach(iframe => iframe.removeAttribute('src'));
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
  document.querySelectorAll('.work-card video').forEach(video => video.pause());
  cardDemoDisclosures.forEach(details => { if (details.open) details.open = false; });
  activeProject = key;
  dialog.querySelector('.share-url')?.remove();
  clearTimeout(copyReset);
  copyButton.textContent = 'リンクをコピー';
  document.querySelector('#copy-status').textContent = '';
  const index = projectKeys.indexOf(key);
  dialog.querySelector('.dialog-index').textContent = String(index + 1).padStart(2, '0') + ' / ' + String(projectKeys.length).padStart(2, '0');
  content.innerHTML = '<article class="project-detail"><p class="project-category">' + escapeHTML(p.category) + '</p><h2 id="dialog-title">' + escapeHTML(p.title) + '</h2><p class="project-lead">' + escapeHTML(p.lead) + '</p>' + (['information','fashion','festival','quiz'].includes(key) ? '<p class="project-team-note">バーチャル万博の業務制作は、閉幕式会場を除きUnityエンジニアと連携して進めました。閉幕式会場はUnity実装を含め単独で担当しました。</p>' : '') + '<dl>' + p.facts.map(([a,b]) => '<div><dt>' + escapeHTML(a) + '</dt><dd>' + escapeHTML(b) + '</dd></div>').join('') + '</dl><a class="detail-hero-link" href="assets/images/' + p.hero + '" target="_blank" rel="noopener noreferrer" aria-label="作品画像を大きく開く">' + projectImage(p.hero, p.alt, 'detail-hero') + '<span>画像を大きく表示 ↗</span></a>' + p.sections.map(([title,body]) => '<section class="detail-section"><h3>' + escapeHTML(title) + '</h3>' + (Array.isArray(body) ? '<ul>' + body.map(t => '<li>' + escapeHTML(t) + '</li>').join('') + '</ul>' : '<p>' + escapeHTML(body) + '</p>') + '</section>').join('') + projectLocalVideo(p.videoLocal) + projectVideos(p.videos) + projectEmbeddedVideo(p.videoEmbed) + projectReferences(p.references) + (p.gallery ? '<div class="detail-gallery">' + p.gallery.map(([file,label]) => '<figure><a href="assets/images/' + file + '" target="_blank" rel="noopener noreferrer" aria-label="' + escapeHTML(label) + 'を大きく開く">' + projectImage(file, label, '', true) + '</a><figcaption>' + escapeHTML(label) + '</figcaption></figure>').join('') + '</div>' : '') + (p.link ? '<a class="text-link detail-link" href="' + p.link[0] + '" target="_blank" rel="noopener noreferrer">' + escapeHTML(p.link[1]) + ' ↗</a>' : '') + '<p class="detail-credit">' + escapeHTML(p.credit) + '</p></article>';
  content.querySelectorAll('details.demo-disclosure').forEach(details => details.addEventListener('toggle', () => {
    if (!details.open) details.querySelector('video')?.pause();
    syncEmbeddedVideo(details);
  }));
  content.querySelectorAll('video').forEach(video => video.addEventListener('play', () => {
    document.querySelectorAll('video').forEach(other => { if (other !== video) other.pause(); });
  }));
  nextButton.innerHTML = '次の作品：' + escapeHTML(projects[projectKeys[(index + 1) % projectKeys.length]].title) + ' <span aria-hidden="true">→</span>';
  if (!wasOpen) {
    document.querySelectorAll('.work-card video').forEach(video => video.pause());
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
    copyButton.textContent = 'コピー完了';
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
    document.querySelector('#copy-status').textContent = '共有URLを選択しました。必要に応じてコピーできます。';
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
