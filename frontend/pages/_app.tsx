// pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout/Layout";
import theme from '../src/theme/theme'

import { Raleway } from "next/font/google";
const raleway = Raleway({ subsets: ["latin"], weight: "400" });


type Props = {
  Component: any;
  pageProps: any;
};

const MyApp = ({ Component, pageProps }: Props) => {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <main className={raleway.className}>
          <Component {...pageProps} />
        </main>
        
      </Layout>
    </ChakraProvider>
  );
};

export default MyApp;
