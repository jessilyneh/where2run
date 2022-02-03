import { AppProps } from "next/app";
import Head from "next/head";
import GlobalStyles from "styles/global";
function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Where2run</title>
        <link rel="shortcut icon" href="/img/pusheen-512.svg" />
        <link rel="apple-touch-icon" href="/img/pusheen-512.svg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffebcd" />
        <meta
          name="description"
          content="A guide to find places to run and tell your stories"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default App;
