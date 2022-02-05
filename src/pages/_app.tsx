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
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""
        />
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
