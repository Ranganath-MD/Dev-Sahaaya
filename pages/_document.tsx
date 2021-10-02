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
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/logo/logo.png" />
          <link
            rel="icon"
            href="/logo/logo.png"
          />
          <meta
            name="theme-color"
            media="(prefers-color-scheme: #fbfbfb)"
            content="white"
          />
          <meta
            name="theme-color"
            media="(prefers-color-scheme: #1a202c)"
            content="black"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
