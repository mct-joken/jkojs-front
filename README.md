# JKOJS front
JKOJSのフロントエンドです．
[JKOJSとは](https://github.com/mct-joken/kojs3-backend)
Vite + React + TypeScriptで描いており、MUIを使用しております

## いんすとーる
pnpmが必要です．
適当なディレクトリで
```
git clone https://github.com/mct-joken/jkojs-front.git
cd ./jkojs-front
pnpm i
```
してください．
## うごかす
```
pnpm run dev
```

## 現状
現在はレイアウトの実装を行っています
レイアウトは[Figma](https://www.figma.com/file/lJdWzgtWQ254l1R60imftP/jkojs?node-id=0%3A1&t=2OHEVFldJ1xik5Kw-1)で描いていますが適宜変更する可能性があります．修正案とかあったらコピーして修正案描いたりコメントしてくれたら喜びます．
APIは仕様書ができ次第実装していきます．

## 参加するとき
インストールした後ブランチをdevとかでいいので切って変更の後pushしてmainに向かってプルリク出してください．

## ディレクトリ構造
/src直下のものの説明
- route.tsx ルーティング
- main.tsx ルーティングを実行する大元
- /pages 表示するページ本体(表現わからん)
- /componnets ページで使うコンポーネント置き場
- /user 認証系を置く予定
- /fixtures 便利なもの置き場（その他）
