import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Footer, TopNavigationBar } from "../components";

import type { NextPage } from "next";

const Brand: NextPage = () => {
    return (
        <>
            <TopNavigationBar />

            <main>
                <section className="flex flex-col items-center w-screen bg-[url('/assets/images/general-hero-bg.svg')] bg-cover bg-center bg-no-repeat p-5">
                    <div className="flex flex-col md:flex-row items-center w-full max-w-6xl mt-10 pb-20 md:py-10 gap-10">
                        <div className="w-full md:w-1/2">
                            <p className="text-warning text-xl uppercase font-bold my-2">Brand Guidelines</p>
                            <h1 className="text-neutral-900 text-3xl md:text-5xl leading-10 font-bold my-5" data-aos="fade-up">
                                How GenZtechies brand should be represented
                            </h1>
                        </div>
                        <div className="flex justify-center items-center mx-auto">
                            <Image alt="team members" src={require("../public/assets/images/brand-hero.png")} placeholder="blur" width={400} height={450} data-aos="zoom-in-right" />
                        </div>
                    </div>
                </section>

                <section className="flex flex-col items-center bg-slate-100 p-5">
                    <div className="w-full max-w-6xl py-10">
                        <p className="text-primary text-lg uppercase font-bold my-2">Use Case</p>
                        <h2 className="text-neutral-900 text-3xl md:text-5xl font-bold my-2">Genztechies Logo</h2>
                        <p className="text-neutral-900 text-lg font-light my-2">Our logo is our most important brand asset. Use of our logo in the right way is crucial in establishing our brand’s identity.</p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-10">
                            <div className="p-5 rounded-2xl bg-gray-300 w-full h-56 flex justify-center items-center">
                                <img src="https://assets.genztechies.com/logo-coloured.svg" className="h-40 aspect-square" alt="gzt-logo" />
                            </div>
                            <div className="p-5 rounded-2xl bg-gray-300 w-full h-56 flex justify-center items-center">
                                <img src="https://assets.genztechies.com/logo-black.svg" className="h-40 aspect-square" alt="gzt-logo" />
                            </div>
                            <div className="p-5 rounded-2xl bg-black w-full h-56 flex justify-center items-center">
                                <img src="https://assets.genztechies.com/logo-white.svg" className="h-40 aspect-square" alt="gzt-logo" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="flex flex-col items-center bg-slate-100 p-5">
                    <div className="w-full max-w-6xl py-10">
                        <p className="text-primary text-lg uppercase font-bold my-2">Icons</p>
                        <h2 className="text-neutral-900 text-3xl md:text-5xl font-bold my-2">Icon Variation</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-10">
                            <div className="p-5 rounded-2xl bg-primary w-full h-56 flex justify-center items-center">
                                <img src="https://assets.genztechies.com/icon-coloured.svg" className="h-40 aspect-square" alt="gzt-icon" />
                            </div>
                            <div className="p-5 rounded-2xl bg-white w-full h-56 flex justify-center items-center">
                                <img src="https://assets.genztechies.com/icon-black.svg" className="h-40 aspect-square" alt="gzt-icon" />
                            </div>
                            <div className="p-5 rounded-2xl bg-black w-full h-56 flex justify-center items-center">
                                <img src="https://assets.genztechies.com/icon-white.svg" className="h-40 aspect-square" alt="gzt-icon" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="flex flex-col items-center bg-slate-100 p-5">
                    <div className="w-full max-w-6xl py-10">
                        <p className="text-primary text-lg uppercase font-bold my-2">Colours</p>
                        <h2 className="text-neutral-900 text-3xl md:text-5xl font-bold my-2">Primary Colors</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-10">
                            <div className="p-5 rounded-2xl bg-primary w-full h-56 flex flex-col justify-center items-center">
                                <h3 className="text-white text-3xl font-bold my-2">#5D5CD6</h3>
                                <p className="text-white text-xl font-light my-2">Primary</p>
                            </div>
                            <div className="p-5 rounded-2xl bg-secondary w-full h-56 flex flex-col justify-center items-center">
                                <h3 className="text-white text-3xl font-bold my-2">#FFB800</h3>
                                <p className="text-white text-xl font-light my-2">Secondary</p>
                            </div>
                            <div className="p-5 rounded-2xl bg-tertiary w-full h-56 flex flex-col justify-center items-center">
                                <h3 className="text-white text-3xl font-bold my-2">#0DBF6A</h3>
                                <p className="text-white text-xl font-light my-2">Tertiary</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="flex flex-col items-center bg-slate-100 p-5">
                    <div className="w-full max-w-6xl py-10">
                        <p className="text-primary text-lg uppercase font-bold my-2">Typography</p>
                        <h2 className="text-neutral-900 text-3xl md:text-5xl font-bold my-2">Font Family</h2>

                        <div className="grid grid-cols-1 gap-10 ">
                            <div className="space-y-5">
                                <h1 className="text-primary-dark text-3xl uppercase text-left">
                                    Sora &nbsp;
                                    <Link href="https://fonts.google.com/specimen/Sora" target="_blank" className="text-base underline">
                                        Download Font
                                    </Link>
                                </h1>
                                <p className="text-base text-left">
                                    Sora, meaning sky in Japanese, is a typeface family commissioned for the Sora decentralized autonomous economy focused on empowering projects that benefit society. Soramitsu, the developer of Sora, is a Japanese technology company specializing in blockchain development and well-known for creating the first central bank digital currency.
                                </p>
                            </div>
                            <div className="space-y-5">
                                <h1 className="text-primary-dark text-3xl uppercase text-left">
                                    Rubik &nbsp;
                                    <Link href="https://fonts.google.com/specimen/Rubik" target="_blank" className="text-base underline">
                                        Download Font
                                    </Link>
                                </h1>
                                <p className="text-base text-left">Rubik is a sans serif font family with slightly rounded corners designed by Philipp Hubert and Sebastian Fischer at Hubert & Fischer as part of the Chrome Cube Lab project.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="flex flex-col items-center bg-slate-100 p-5">
                    <div className="w-full max-w-6xl rounded-2xl bg-primary-light p-10">
                        <div className="grid grid-cols-1 gap-10 py-10">
                            <h2 className="text-neutral-900 text-3xl md:text-5xl font-bold my-2">Use Of Our Brand Materials</h2>

                            <div className="text-left space-y-2">
                                <h1 className="text-black text-lg uppercase font-bold my-2">IN GENRAL</h1>
                                <p className="text-black text-base">
                                    Please don’t use our name, logos, or screenshots (“brand materials”) in ways that may be confusing, misleading, or suggest our sponsorship, partnership endorsement, or affiliation. For example, your name and logo should be more prominent than GenZtechies name or logo. And please don’t edit or change our logo — we like it how it is!
                                </p>
                            </div>
                            <div className="text-left space-y-2">
                                <h1 className="text-black text-lg uppercase font-bold my-2">ADVERTISING, PROMOTIONAL, AND SALES MATERIALS</h1>
                                <p className="text-black text-base">Please check in with us before using our logo on websites, products, packaging, manuals, or for other commercial or product use. Especially if you are a company who has worked with the community or any of our initiatives.</p>
                            </div>
                            <div className="text-left space-y-2">
                                <h1 className="text-black text-lg uppercase font-bold my-2">EDUCATION AND INSTRUCTIONAL USE (BOOKS, GUIDES, PUBLICATIONS, AND CONFERENCES)</h1>
                                <p className="text-black text-base">You can use our brand materials for educational and instructional purposes, but please remember that it shouldn’t be confusing or misleading, or suggest our sponsorship or partnership. We generally don’t allow use of our logos or screenshots on book covers.</p>
                                <p className="text-black text-base">Also remember to include this statement (or something like it) in your printed materials: “(Title) is not affiliated with or otherwise sponsored by GenZtechies”.</p>
                            </div>
                            <div className="text-left space-y-2">
                                <h1 className="text-black text-lg uppercase font-bold my-2">PRODUCTS, WEBSITES, NAMES AND LOGOS</h1>
                                <p className="text-black text-base">Please don’t use our name as a part of your company or service name, website name, trade name, or product name. Don’t use our logo or incorporate our logo into yours. Don’t use a domain name containing “GenZtechies” or any confusingly similar words. Our official website domain is genztechies.com</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
};

export default Brand;
