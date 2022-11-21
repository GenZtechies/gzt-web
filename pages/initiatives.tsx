import React from "react";
import Image from "next/image";

import { Footer, TopNavigationBar } from "../components";

import type { NextPage } from "next";

const Initiatives: NextPage = () => {
    return (
        <>
            <TopNavigationBar />

            <main>
                <section className="flex flex-col items-center w-screen bg-[url('/assets/images/general-hero-bg.svg')] bg-cover bg-center bg-no-repeat p-5">
                    <div className="flex flex-col md:flex-row items-center w-full max-w-6xl mt-10 pb-20 md:py-10 gap-10">
                        <div className="w-full md:w-1/2">
                            <p className="text-primary text-xl uppercase font-bold my-2">Events & Initiatives</p>
                            <h1 className="text-neutral-900 text-3xl md:text-5xl leading-10 font-bold my-5" data-aos="fade-up">
                                Projects, events, and activities we work on as a community
                            </h1>
                        </div>
                        <div className="flex justify-center items-center mx-auto">
                            <Image alt="team members" src={require("../public/assets/images/initiatives-hero.png")} placeholder="blur" width={400} height={450} data-aos="zoom-in-right" />
                        </div>
                    </div>
                </section>

                <section className="flex flex-col items-center bg-slate-100 p-5">
                    <div className="w-full max-w-6xl py-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
                            {[
                                {
                                    image: "https://placeimg.com/400/225/arch",
                                    title: "#GenZHackfest2022",
                                    description: "Gen Z HackFest 2022 is a three-day virtual hackathon and a one-day in-person conference aimed to connect Gen Z-s in tech across Africa. We hosted over 2,500 ambitious Gen-Zs (virtually & in-person) to put their creative and coding skills to test and build solutions to problems in Africa and beyond."
                                },
                                {
                                    image: "https://placeimg.com/400/225/arch",
                                    title: "#OfficeTourWIthGenZtechies",
                                    description: "We visit leading tech companies across Africa to learn about their operations and expose GenZtechies to the challenges of developing products for Africa and beyond. Stripe acquired Paystack, an African-based company for $200 million dollars. We were more than excited to be at Paystack's HQ in 2022!"
                                },
                                {
                                    image: "https://placeimg.com/400/225/arch",
                                    title: "AMA (Ask Me Anything)",
                                    description: "If GenZtechies aren’t building or launching innovative solutions they’re either featured in the news for raising a million dollars for their new tech startup. AMAs are fun and inspiring, they help us to connect with a GenZ doing something amazing. We get to ask tonnes of about their passion, personal life, and many more."
                                },
                                {
                                    image: "https://placeimg.com/400/225/arch",
                                    title: "Gen-Z Meet",
                                    description: "During and post the Covid-19 lockdown, virtual meetings became a thing for everyone. School, work, and a huge part of our lives became virtual. GenZtechies unleashed the hacker in us and spent months building our open-source web conferencing platform serving thousands of users since launch."
                                }
                            ].map((initiative, index) => (
                                <div key={index} data-aos="fade-up">
                                    <img src={initiative.image} className="w-full aspect-video rounded-2xl" alt="initiative-image" />
                                    <div className="p-4">
                                        <h2 className="text-primary text-2xl font-bold my-3">{initiative.title}</h2>
                                        <p className="text-base font-light">{initiative.description}</p>
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

export default Initiatives;
