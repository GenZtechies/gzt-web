import Head from "next/head";
import Script from "next/script";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* <!-- Primary Meta Tags --> */}
        <title>GenZtechies - Connecting GenZ Techies Across Africa</title>
        <meta
          name="title"
          content="GenZtechies - Connecting GenZ Techies Across Africa"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme_color" content="#3331C4" />

        <meta
          name="description"
          content="Connecting GenZ Techies Across Africa"
        />

        {/*   <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://genztechies.com/" />
        <meta
          property="og:title"
          content="GenZtechies - Connecting GenZ Techies Across Africa"
        />
        <meta
          property="og:description"
          content="Connecting GenZ Techies Across Africa"
        />
        <meta
          property="og:image"
          content="https://genztechies.com/assets/site-preview.png"
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://genztechies.com/" />
        <meta
          property="twitter:title"
          content="GenZtechies - Connecting GenZ Techies Across Africa"
        />
        <meta
          property="twitter:description"
          content="Connecting GenZ Techies Across Africa"
        />
        <meta
          property="twitter:image"
          content="https://genztechies.com/assets/site-preview.png"
        />
      </Head>

      <Component {...pageProps} />

      <Script strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=G-6EQSEBDPM6" />
      <Script strategy="lazyOnload" src="/assets/js/analytics.js" />
    </>
  );
}

export default MyApp;
