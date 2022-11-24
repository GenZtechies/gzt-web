import AOS from "aos";
import React from "react";
import Head from "next/head";
import "../styles/globals.css";
import Script from "next/script";
import { ToastContainer } from "react-toastify";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { FirstLoadAnimation } from "../components";

import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
    const [queryClient] = React.useState(() => new QueryClient({ defaultOptions: { queries: { retry: false, refetchOnWindowFocus: false } } }));

    React.useEffect(() => {
        AOS.init({ duration: 1500 });
        AOS.refresh();
    }, []);

    return (
        <>
            <Head>
                <title>GenZtechies - Connecting Gen-Zs in Tech Across Africa</title>

                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="title" content="GenZtechies - Connecting Gen-Zs in Tech Across Africa" />
                <meta name="description" content="We're a community that connects Gen-Zs in tech across Africa to share opportunities within the network and foster quality connections." />

                <link rel="icon" href="https://assets.genztechies.com/icon-coloured.png" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://genztechies.com/" />
                <meta property="og:title" content="GenZtechies - Connecting Gen-Zs in Tech Across Africa" />
                <meta property="og:description" content="We're a community that connects Gen-Zs in tech across Africa to share opportunities within the network and foster quality connections." />
                <meta property="og:image" content="https://genztechies.com/assets/site-metaimage.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://genztechies.com/" />
                <meta property="twitter:title" content="GenZtechies - Connecting Gen-Zs in Tech Across Africa" />
                <meta property="twitter:description" content="We're a community that connects Gen-Zs in tech across Africa to share opportunities within the network and foster quality connections." />
                <meta property="twitter:image" content="https://genztechies.com/assets/site-metaimage.png" />
            </Head>

            <ToastContainer newestOnTop={true} pauseOnHover={false} autoClose={3000} />

            <FirstLoadAnimation timeout={4500} />

            <QueryClientProvider client={queryClient}>
                <Component {...pageProps} />

                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>

            <Script strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=G-6EQSEBDPM6" />
            <Script strategy="lazyOnload" src="/assets/js/analytics.js" />
        </>
    );
}

export default App;
