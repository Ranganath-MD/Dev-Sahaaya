import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "components/layout";
import type { AppProps } from "next/app";
import { Theme } from "styles/globalStyle";
import "@fontsource/arvo"
import "@fontsource/arvo/700.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={Theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
