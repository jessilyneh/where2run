import { AppProps } from "next/app";
import Head from "next/head";
import GlobalStyles from "styles/global";
import NextNprogress from "nextjs-progressbar";

import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/img/w2r-512.svg" />
        <link rel="apple-touch-icon" href="/img/w2r-512.svg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffebcd" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""
        />
      </Head>
      <DefaultSeo {...SEO} />
      <GlobalStyles />
      <NextNprogress
        color="#F7931E"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </>
  );
}

export default App;
