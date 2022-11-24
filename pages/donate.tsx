import React from "react";

import { Footer, TopNavigationBar } from "../components";

import type { NextPage } from "next";

const Donate: NextPage = () => {
    return (
        <>
            <TopNavigationBar />

            <main>
                <section className="flex flex-col items-center w-screen bg-[url('/assets/images/general-hero-bg.svg')] bg-cover bg-center bg-no-repeat p-5">
                    <div className="flex flex-col md:flex-row items-center w-full max-w-6xl mt-10 pb-20 md:py-10 gap-10">
                        <div className="w-full md:w-1/2">
                            <p className="text-primary text-xl uppercase font-bold my-2">Donate</p>
                            <h1 className="text-neutral-900 text-3xl md:text-5xl leading-10 font-bold my-5" data-aos="fade-up">
                                Every $1 goes a long way.
                            </h1>
                        </div>
                    </div>
                </section>

                <section className="flex flex-col items-center bg-slate-100 p-5">
                    <div className="w-full max-w-6xl py-10">
                        <iframe src="https://bank.hackclub.com/donations/start/genztechies" className="w-full h-screen rounded-2xl"></iframe>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
};

export default Donate;
