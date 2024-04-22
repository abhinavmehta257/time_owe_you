import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/icon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/icon.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/icons/icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="apple-touch-startup-image"
          href="/images/icon.jpg"
          sizes="2048x2732"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/icon.png"
          sizes="1668x2224"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/icon.png"
          sizes="1536x2048"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/icon.png"
          sizes="1125x2436"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/icon.png"
          sizes="1242x2208"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash.jpg"
          sizes="750x1334"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash.jpg"
          sizes="640x1136"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
