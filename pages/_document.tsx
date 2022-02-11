import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" translate="no">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai+Looped:wght@200;400&display=swap"
            rel="stylesheet"
          />
          <link rel="manifest" href="/manifest.json" />
          <link
            rel="apple-touch-icon"
            href="/logo/logo.png"
          />
          <link rel="icon" href="/logo/logo.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
