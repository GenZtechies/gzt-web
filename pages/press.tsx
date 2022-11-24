import React from "react";
import Link from "next/link";
import Image from "next/image";

import { ChevronRightIcon, Footer, TopNavigationBar } from "../components";

import type { NextPage } from "next";
import Seo from "../components/Seo";

const Press: NextPage = () => {
    return (
        <>
            <Seo title="Press" />
            <TopNavigationBar />

            <main>
                <section className="flex flex-col items-center w-screen bg-[url('/assets/images/general-hero-bg.svg')] bg-cover bg-center bg-no-repeat p-5">
                    <div className="flex flex-col md:flex-row items-center w-full max-w-6xl mt-10 pb-20 md:py-10 gap-10">
                        <div className="w-full md:w-1/2">
                            <p className="text-primary text-xl uppercase font-bold my-2">Press and Media</p>
                            <h1 className="text-neutral-900 text-3xl md:text-5xl leading-10 font-bold my-5" data-aos="fade-up">
                                Catch the latest buzz from GenZtechies
                            </h1>
                        </div>
                        <div className="flex justify-center items-center mx-auto">
                            <Image alt="team members" src={require("../public/assets/images/press-hero.png")} placeholder="blur" width={400} height={450} data-aos="zoom-in-right" />
                        </div>
                    </div>
                </section>

                <section className="flex flex-col items-center bg-slate-100 p-5">
                    <div className="w-full max-w-6xl py-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
                            {[
                                {
                                    url: "https://www.gbolamedia.com/startups-in-nigeria-by-gen-z.html",
                                    title: "Top 10 Startups built by Gen-Zs in Nigeria",
                                    image: "https://images.unsplash.com/photo-1589561253898-768105ca91a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80"
                                },
                                {
                                    url: "https://techsteroid.africa/the-gen-z-hackfest-africas-youngest-innovators/",
                                    title: "The Gen-Z HackFest: A Gathering of Africa’s Youngest Innovators and Change Makers",
                                    image: "https://i0.wp.com/techsteroid.africa/wp-content/uploads/2022/07/FXaOsQ2XkAEEJ_Y_ac5h0r-scaled.jpg?fit=2560%2C1920&ssl=1"
                                },
                                {
                                    url: "https://blockbuild.africa/blockchain-stole-the-show-at-gen-z-hackfest-2022/",
                                    title: "Blockchain Technology ‘Stole the Show’ at Gen Z HackFest 2022",
                                    image: "https://blockbuild.africa/wp-content/uploads/2022/07/FXeWsWKXgAIBLL2.jpg"
                                },
                                {
                                    url: "https://techcabal.com/2022/07/19/gen-z-hackfest-2022-senator-tokunbo-abiru-charges-young-techies-to-develop-solutions-to-societal-problems/",
                                    title: "Gen Z Hackfest 2022: Senator Tokunbo Abiru Charges Young Techies To Develop Solutions To Societal Problems",
                                    image: "https://x7d4c5z5.stackpathcdn.com/wp-content/uploads/tc/2022/07/20220711_144431-2048x922.jpg"
                                },
                                {
                                    url: "https://thenationonlineng.net/technology-key-to-youth-development-says-abiru/",
                                    title: "Technology key to youth development, says Abiru",
                                    image: "https://nation-media-assets.storage.googleapis.com/wp-content/uploads/2022/02/09232517/tokunbo-Abiru.jpg"
                                }
                            ].map((press, index) => (
                                <div key={index} data-aos="fade-up">
                                    <img src={press.image} className="w-full aspect-square md:aspect-video object-cover rounded-2xl" alt={press.title} />

                                    <div className="p-4 space-y-5">
                                        <h2 className="text-primary text-2xl font-bold mb-2">{press.title}</h2>

                                        <Link href={press.url} target="_blank" className="btn bg-primary hover:bg-primary border-none text-white gap-3 my-5">
                                            Read more
                                            <span className="bg-primary-light rounded-full text-white bg-opacity-40 p-1">
                                                <ChevronRightIcon />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
};

export default Press;
