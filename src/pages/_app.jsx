import React from "react";
import { MoralisProvider } from "react-moralis";
import Head from "next/head";
// import BiconomyContextProvider from "context/BiconomyProvider";

import "styles/index.css";
import "styles/global.css";
import BiconomyContextProvider from "context/BiconomyProvider";
import Navbar from "components/Navbar";

/** Get your free Moralis Account https://moralis.io/ */

const APP_ID = process.env.NEXT_PUBLIC_MORALIS_APPLICATION_ID;
const SERVER_URL = process.env.NEXT_PUBLIC_MORALIS_SERVER_URL;

const isServerInfo = Boolean(APP_ID && SERVER_URL);

const Application = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Watch2Earn</title>
      </Head>
      <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
        <BiconomyContextProvider>
        <Navbar />
        <Component {...pageProps} isServerInfo={isServerInfo} />
        </BiconomyContextProvider>
      </MoralisProvider>
    </>
  );
};

export default Application;
