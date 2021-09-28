import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "components/layout";
import type { AppProps } from "next/app";
import { Theme } from "styles/globalStyle";
import { DefaultSeo } from "next-seo";
import "@fontsource/arvo"
import "@fontsource/arvo/700.css"
import "@fontsource/inter";
import { seoConfig } from "components/seo/seo.config";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={Theme}>
      <Layout>
        <DefaultSeo {...seoConfig} />
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
