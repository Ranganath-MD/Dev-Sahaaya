import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "components/layout";
import { Theme } from "styles/globalStyle";
import { DefaultSeo } from "next-seo";
import { seoConfig } from "components/seo/seo.config";
import Script from "next/script";

import "@fontsource/arvo";
import "@fontsource/arvo/700.css";
import "@fontsource/inter";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        id="gtag"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <ChakraProvider theme={Theme}>
        <Layout>
          <DefaultSeo {...seoConfig} />
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
