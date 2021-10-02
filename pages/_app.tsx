import type { AppProps } from "next/app";
import {
  ChakraProvider,
  ColorModeProvider,
} from "@chakra-ui/react";
import { Layout } from "components/layout";
import { Theme } from "styles/globalStyle";
import { DefaultSeo } from "next-seo";
import { seoConfig } from "components/seo/seo.config";
import "@fontsource/arvo"
import "@fontsource/arvo/700.css"
import "@fontsource/inter";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={Theme}>
      <ColorModeProvider options={Theme.config} />
      <Layout>
        <DefaultSeo {...seoConfig} />
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
