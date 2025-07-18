# Vibe Coding プレゼンテーション

バイブコーディング（Vibe Coding）に関する最新情報を調査し、Slidevを使用したプレゼンテーション形式でまとめた資料です。

## 概要

このプレゼンテーションでは、2025年に提唱されたバイブコーディングの概念、手法、最新トレンド、実践例などを体系的に整理し、視覚的に魅力的なスライドプレゼンテーションとして提供します。

## 内容

1. **バイブコーディングとは？**
   - 定義と起源
   - 核となる哲学
   - 主要特徴

2. **実装手法**
   - 実装ステップ
   - 人気ツールとプラットフォーム
   - ベストプラクティス

3. **従来との比較**
   - 従来のコーディングとの違い
   - メリットとデメリット
   - 適用場面

4. **産業への影響**
   - 統計データ
   - 実世界での例
   - 未来のトレンド

5. **コミュニティ**
   - 学習リソース
   - コミュニティ活動

## 技術仕様

- **フレームワーク**: Slidev
- **テーマ**: Default
- **ハイライター**: Shiki
- **言語**: 日本語

## 前提条件

- Node.js (v16以上)
- npm または yarn

## インストール

```bash
# 依存関係をインストール
npm install

# または
yarn install
```

## 使用方法

### 開発サーバーの起動

```bash
# 開発サーバーを起動
npm run dev

# または
yarn dev
```

プレゼンテーションは http://localhost:3030 で表示されます。

### プロダクションビルド

```bash
# プロダクションビルド
npm run build

# または
yarn build
```

### PDF エクスポート

```bash
# PDFとしてエクスポート
npm run export

# または
yarn export
```

## キーボードショートカット

- `スペース` / `→` - 次のスライド
- `←` - 前のスライド
- `d` - ダークモード切り替え
- `o` - スライド概要
- `f` - フルスクリーンモード
- `g` - 特定のスライドへ移動
- `c` - カメラ（録画）
- `r` - 録画開始/停止

## プロジェクト構造

```
slidevtest/
├── slides.md           # メインプレゼンテーションファイル
├── slidev.config.js    # Slidev設定ファイル
├── package.json        # プロジェクト設定
├── README.md          # このファイル
└── .kiro/             # 仕様ファイル
    └── specs/
        └── vibe-coding-presentation/
            ├── requirements.md
            ├── design.md
            └── tasks.md
```

## カスタマイズ

### テーマの変更

`slides.md` ファイルの frontmatter で `theme` を変更できます：

```yaml
---
theme: seriph
---
```

利用可能なテーマ：
- default
- seriph
- apple-basic
- shibainu
- など

### スタイリング

カスタムスタイルは `slides.md` の最後に `<style>` タグで追加できます。

## トラブルシューティング

### 開発サーバーが起動しない

1. Node.js のバージョンを確認（v16以上が必要）
2. 依存関係を再インストール：
   ```bash
   rm -rf node_modules
   npm install
   ```

### 画像が表示されない

- インターネット接続を確認（外部画像を使用）
- ローカル画像を使用する場合は `public/` フォルダに配置

### フォントの問題

- 日本語フォントの表示に問題がある場合は、システムにフォントがインストールされているか確認

## 参考資料

- [Slidev 公式ドキュメント](https://sli.dev/)
- [Vibe Coding 関連記事](https://simonwillison.net/2025/Mar/19/vibe-coding/)
- [IBM - What is Vibe Coding?](https://www.ibm.com/think/topics/vibe-coding)

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## 作成者

AI Research Team - 2025年 バイブコーディング研究プロジェクト