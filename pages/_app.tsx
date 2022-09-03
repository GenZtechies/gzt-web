import React from "react";
import Head from "next/head";
import "../styles/globals.css";
import { ToastContainer } from "react-toastify";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Navbar from "../components/Sections/Navbar";
import Footer from "../components/Sections/Footer";
import Join from "../components/Sections/Join";

function MyApp({ Component, pageProps }: AppProps) {
    const [queryClient] = React.useState(() => new QueryClient({ defaultOptions: { queries: { retry: false, refetchOnWindowFocus: false } } }));

    const router = useRouter();

    return (
        <>
            <Head>
                <title>GenZtechies - Connecting GenZ's in Tech Across Africa</title>

                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="title" content="GenZtechies - Connecting Gen Z's in Tech Across Africa" />
                <meta name="description" content="We're a community that connects Gen Z's in tech across Africa to share opportunities within the network and foster quality connections." />

                <link rel="icon" href="https://assets.genztechies.com/icon-coloured.png" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://genztechies.com/" />
                <meta property="og:title" content="GenZtechies - Connecting Gen Z's in Tech Across Africa" />
                <meta property="og:description" content="We're a community that connects Gen Z's in tech across Africa to share opportunities within the network and foster quality connections." />
                <meta property="og:image" content="https://genztechies.com/assets/site-preview.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://genztechies.com/" />
                <meta property="twitter:title" content="GenZtechies - Connecting Gen Z's in Tech Across Africa" />
                <meta property="twitter:description" content="We're a community that connects Gen Z's in tech across Africa to share opportunities within the network and foster quality connections." />
                <meta property="twitter:image" content="https://genztechies.com/assets/site-preview.png" />
            </Head>

            <ToastContainer newestOnTop={true} pauseOnHover={false} autoClose={3000} />

            <QueryClientProvider client={queryClient}>
                {/* <Navbar /> */}
                <Component {...pageProps} />
                <Join />
                <Footer />
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </>
    );
}

export default MyApp;
