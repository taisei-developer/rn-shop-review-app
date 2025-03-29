# React Native ショップレビューアプリ 👋

このプロジェクトは[Expo](https://expo.dev)を使用して作成された React Native アプリケーションです。

## プロジェクトの構造

```
rn-shop-review-app/
├── app/                    # アプリケーションのメインコード
│   ├── (tabs)/            # タブナビゲーション用のディレクトリ
│   │   ├── index.tsx      # ホーム画面（最初に表示される画面）
│   │   ├── explore.tsx    # 探索画面
│   │   └── _layout.tsx    # タブナビゲーションの設定
│   └── _layout.tsx        # アプリケーション全体のレイアウト設定
├── components/            # 再利用可能なコンポーネント
├── constants/            # アプリケーションで使用する定数
├── hooks/               # カスタムフック
└── assets/             # 画像やフォントなどのリソース
```

## 主要なファイルの説明

### 1. アプリケーションのエントリーポイント

- `app/(tabs)/index.tsx`: アプリを起動すると最初に表示される画面
  - パララックススクロールビューを使用
  - ライト/ダークモードに対応
  - 開発者ツールの使い方などの説明を表示

### 2. ナビゲーション設定

- `app/(tabs)/_layout.tsx`: タブナビゲーションの設定
  - ホームと探索の 2 つのタブを定義
  - タブアイコンとスタイルの設定

### 3. アプリケーション全体の設定

- `app/_layout.tsx`: アプリケーションの基本レイアウト
  - フォントの読み込み
  - テーマの設定
  - スプラッシュスクリーンの制御

## 開発を始める

1. 依存関係のインストール

   ```bash
   npm install
   ```

2. アプリケーションの起動

   ```bash
   npx expo start
   ```

3. 開発オプション
   - iOS シミュレーター: `i`キー
   - Android エミュレーター: `a`キー
   - Web ブラウザ: `w`キー
   - デバッガー: `j`キー
   - アプリのリロード: `r`キー

## 開発のヒント

1. **ファイルベースルーティング**

   - `app`ディレクトリ内のファイル構造がそのままルーティングになります
   - `(tabs)`のような括弧付きディレクトリは URL に表示されません

2. **コンポーネントの作成**

   - 再利用可能なコンポーネントは`components`ディレクトリに配置
   - 各コンポーネントは独立したファイルとして管理

3. **スタイリング**

   - React Native では CSS の代わりに StyleSheet を使用
   - レスポンシブデザインには`flex`を使用

4. **デバッグ**
   - iOS: `cmd + d`
   - Android: `cmd + m`
   - Web: `F12`

## 新しいプロジェクトの開始

現在のコードを`app-example`ディレクトリに移動し、新しい空の`app`ディレクトリを作成するには：

```bash
npm run reset-project
```

## 参考リンク

- [Expo ドキュメント](https://docs.expo.dev/)
- [React Native ドキュメント](https://reactnative.dev/docs/getting-started)
- [Expo Router ドキュメント](https://docs.expo.dev/router/introduction/)

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
