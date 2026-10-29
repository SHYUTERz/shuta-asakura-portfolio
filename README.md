# 朝倉柊太 Portfolio

Unityエンジニア・3Dデザイナー 朝倉柊太のポートフォリオサイト。
HTML / CSS / JavaScriptだけで動作する静的サイトです。ビルドや外部ライブラリは不要です。

## 公開先

- リポジトリ：<https://github.com/SHYUTERz/shuta-asakura-portfolio>
- GitHub Pages：<https://shyuterz.github.io/shuta-asakura-portfolio/>
- 作業・公開ブランチ：`feature/portfolio-site`
- `main` から作業ブランチを作成。Unity・資料のリポジトリとは独立しています。

GitHubの Settings → Pages で、Source を「Deploy from a branch」、Branch を `feature/portfolio-site`、フォルダーを `/ (root)` に設定します。公開ブランチを変更する場合は、この設定も更新してください。

## 内容

- もぐもぐマネジメント：個人開発・開発中。約1分42秒の紹介動画と実装状況
- アロワナ水槽アセット：共同制作。本人とHachi.S氏の担当を分けて記載
- バーチャル万博の案内所、ファッションショー、盆踊り大会、ARクイズ：チーム制作の担当詳細と画像
- プロフィール、スキル、職務経験、学歴・資格、連絡先
- 作品の絞り込み、詳細ダイアログ、スマートフォン用メニュー

## 更新する場所

| ファイル | 内容 |
| --- | --- |
| `index.html` | 基本情報、作品一覧、職務経験、連絡先、クレジット |
| `app.js` | 各作品の詳細、絞り込み、ダイアログ、モバイルメニュー |
| `styles.css` | 色・余白・文字サイズ・レスポンシブ表示 |
| `assets/images/` | 掲載用に抽出・軽量化した作品画像 |
| `assets/video/mogumogu-portfolio.mp4` | BGM差し替え済みの紹介動画 |
| `assets/video/mogumogu-ja.vtt` | 動画内容の日本語説明字幕 |
| `CREDITS.md` | 作品の出典と共同制作者、BGMの利用条件 |

連絡先メールは本人の希望により掲載しています。住所・電話番号・生年月日、履歴書・職務経歴書のPDF原本はリポジトリに含めていません。

## ローカルで確認

```sh
python -m http.server 4173
```

ブラウザーで `http://localhost:4173` を開きます。公開先のサブディレクトリでも動くよう、ローカル素材のパスは相対パスです。

## 権利について

作品画像や映像は、ポートフォリオとしての閲覧用です。リポジトリが公開されていても、3D素材・画像・映像の再利用や再販売の許諾を与えるものではありません。第三者の作品・商標等の権利は各権利者に帰属します。BGMには別途CC BY 4.0の条件が適用されます。
