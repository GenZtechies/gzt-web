import React from "react";

import { Footer, TopNavigationBar } from "../components";

import type { NextPage } from "next";

const Store: NextPage = () => {
    return (
        <>
            <TopNavigationBar />

            <main>
                <section className="flex flex-col items-center w-screen bg-[url('/assets/images/general-hero-bg.svg')] bg-cover bg-center bg-no-repeat p-5">
                    <div className="flex flex-col md:flex-row items-center w-full max-w-7xl mt-10 pb-20 md:py-10 gap-10">
                        <div className="w-full md:w-1/2">
                            <p className="text-primary text-xl uppercase font-bold my-2">Store</p>
                            <h1 className="text-neutral-900 text-3xl md:text-5xl leading-10 font-bold my-5" data-aos="fade-up">
                                Get our branded merch
                            </h1>
                        </div>
                    </div>
                </section>

                <section className="flex flex-col items-center bg-slate-100 p-5">
                    {/* <div className="w-full max-w-7xl py-10"> */}
                    <div className="w-full h-96 max-w-7xl py-10">
                        <h1 className="text-neutral-900 text-3xl md:text-5xl leading-10 font-bold my-5" data-aos="fade-up">
                            Coming soon — We're working on Gen Z designs 🤞🏾
                        </h1>
                    </div>
                </section>
            </main>

            {/* <Footer /> */}
        </>
    );
};

export default Store;
