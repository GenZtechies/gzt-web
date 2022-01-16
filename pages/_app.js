import Head from "next/head";
import "../styles/globals.css";
import {useEffect} from "react";
function MyApp({ Component, pageProps }) {

  useEffect(() => {
 
    // Check that service workers are supported
    if ('serviceWorker' in navigator) {
      // Use the window load event to keep the page load performant
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js');
      });
    }
   
  }, [])

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* <!-- Primary Meta Tags --> */}
        <title>GenZtechies - Connecting Teen Techies Across Nigeria</title>
        <meta
          name="title"
          content="GenZtechies - Connecting Teen Techies Across Nigeria"
        />
          <link rel="manifest" href="/manifest.json"/>
          <meta name='theme_color' content='#3331C4' />
          
        <meta
          name="description"
          content="Connecting Teen Techies Across Nigeria"
        />

        {/* <!--check if servoce worker is supported--> */}

         
            
        {/*   <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta  property="og:url" content="https://genztechies.com/" />
        <meta
          property="og:title"
          content="GenZtechies - Connecting Teen Techies Across Nigeria"
        />
        <meta
          property="og:description"
          content="Connecting Teen Techies Across Nigeria"
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
          content="GenZtechies - Connecting Teen Techies Across Nigeria"
        />
        <meta
          property="twitter:description"
          content="Connecting Teen Techies Across Nigeria"
        />
        <meta
          property="twitter:image"
          content="https://genztechies.com/assets/site-preview.png"
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
