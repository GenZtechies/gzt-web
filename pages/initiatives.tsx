import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Footer, Seo, TopNavigationBar } from "../components";

import type { NextPage } from "next";

const Initiatives: NextPage = () => {
    return (
        <>
            <Seo title="Our Initiatives" />

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
                                    title: "Gen Z Hackfest 2022",
                                    subtitle: "#GenZHackfest",
                                    image: "/assets/images/initiatives/hackfest.jpg",
                                    link: "https://www.youtube.com/watch?v=YQwja2nCLnY",
                                    description: "Gen Z HackFest 2022 is a three-day virtual hackathon and a one-day in-person conference aimed to connect Gen Z-s in tech across Africa. We hosted over 2,500 ambitious Gen-Zs (virtually & in-person) to put their creative and coding skills to test and build solutions to problems in Africa and beyond."
                                },
                                {
                                    title: "Paystack Office Tour",
                                    subtitle: "#OfficeTourWIthGenZtechies",
                                    image: "/assets/images/initiatives/paystacktour.jpg",
                                    link: "https://www.youtube.com/watch?v=h7uCgsaYV9E",
                                    description: "We visit leading tech companies across Africa to learn about their operations and expose GenZtechies to the challenges of developing products for Africa and beyond. Stripe acquired Paystack, an African-based company for $200 million dollars. We were more than excited to be at Paystack's HQ in 2022!"
                                },
                                {
                                    title: "AMA (Ask Me Anything)",
                                    subtitle: "#AMAWithGenZtechies",
                                    image: "/assets/images/initiatives/ama.png",
                                    link: "https://twitter.com/genztechies/status/1507796306403766275",
                                    description: "If GenZtechies aren’t building or launching innovative solutions they’re either featured in the news for raising a million dollars for their new tech startup. AMAs are fun and inspiring, they help us to connect with a GenZ doing something amazing. We get to ask tonnes of about their passion, personal life, and many more."
                                },
                                {
                                    title: "Gen-Z Meet",
                                    subtitle: "Custom Video Conferencing Platform",
                                    image: "/assets/images/initiatives/genzmeet.png",
                                    link: "https://meet.genztechies.com/",
                                    description: "During and post the Covid-19 lockdown, virtual meetings became a thing for everyone. School, work, and a huge part of our lives became virtual. GenZtechies unleashed the hacker in us and spent months building our open-source web conferencing platform serving thousands of users since launch."
                                }
                            ].map((initiative, index) => (
                                <div key={index} data-aos="fade-up">
                                    <Link href={initiative.link || ""} target="_blank" className="relative" data-aos="fade-down-zoom-in">
                                        <Image src={initiative.image} width={0} height={0} sizes="100" className="w-full aspect-square md:aspect-video object-cover rounded-2xl" alt={initiative.title} />

                                        <div className="flex w-full h-full items-end gap-2 absolute overflow-hidden top-0 left-0 bg-gradient-to-t from-black to-transparent rounded-2xl p-5">
                                            <div className="flex flex-row items-center gap-2">
                                                <button className="btn btn-circle btn-ghost">
                                                    <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="20" cy="20.5" r="20" fill="white" />
                                                        <path d="M14.4587 12.7775C14.4356 12.0081 15.2542 11.5021 15.9321 11.8669L29.1514 18.979C29.8293 19.3438 29.8582 20.3056 29.2033 20.7103L16.4344 28.6025C15.7795 29.0072 14.9321 28.5513 14.9091 27.7819L14.4587 12.7775Z" fill="#11113E" />
                                                    </svg>
                                                </button>

                                                <div className="w-full">
                                                    <h1 className="text-white text-xl font-bold">{initiative.title}</h1>
                                                    {initiative.subtitle && <p className="text-gray-400">{initiative.subtitle}</p>}
                                                </div>
                                            </div>
                                        </div>
                                    </Link>

                                    <div className="p-4 space-y-5">
                                        <h2 className="text-primary text-2xl font-bold">{initiative.title}</h2>
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
