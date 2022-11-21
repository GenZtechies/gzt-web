import React from "react";
import Link from "next/link";
import Image from "next/image";

import { ChevronRightIcon, Footer, TopNavigationBar } from "../components";

import type { NextPage } from "next";

const Press: NextPage = () => {
    return (
        <>
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
                                    image: "https://placeimg.com/400/225/arch",
                                    title: "Blockchain Technology at Gen Z HackFest",
                                    exerpt: "Gen Z HackFest 2022 is a three-day virtual hackathon and a one-day in-person conference aimed to connect Gen Z-s in tech across Africa. We hosted over 2,500 ambitious Gen-Zs (virtually & in-person) to put their creative and coding skills to test and build solutions to problems in Africa and beyond.",
                                    url: "https://google.com"
                                },
                                {
                                    image: "https://placeimg.com/400/225/arch",
                                    title: "Blockchain Technology at Gen Z HackFest",
                                    exerpt: "Gen Z HackFest 2022 is a three-day virtual hackathon and a one-day in-person conference aimed to connect Gen Z-s in tech across Africa. We hosted over 2,500 ambitious Gen-Zs (virtually & in-person) to put their creative and coding skills to test and build solutions to problems in Africa and beyond.",
                                    url: "https://google.com"
                                }
                            ].map((press, index) => (
                                <div key={index} data-aos="fade-up">
                                    <img src={press.image} className="w-full aspect-video rounded-2xl" alt="press-image" />

                                    <div className="p-4">
                                        <h2 className="text-primary text-2xl font-bold my-3">{press.title}</h2>
                                        <p className="text-base font-light">{press.exerpt}</p>
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
