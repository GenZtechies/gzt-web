import React from "react";
import Link from "next/link";
import Image from "next/image";

import { ChevronRightIcon, Footer, TopNavigationBar } from "../components";

import type { NextPage } from "next";

const Home: NextPage = () => {
    return (
        <>
            <TopNavigationBar />

            <main>
                <section className="flex flex-col items-center min-h-screen w-screen bg-[url('/assets/images/home-hero-bg.svg')] bg-cover bg-center bg-no-repeat p-5">
                    <div className="flex flex-col items-center w-full max-w-6xl gap-10 mt-10 md:flex-row md:py-10">
                        <div className="flex flex-col w-full space-y-5 md:w-1/2">
                            <h1 className="my-5 text-4xl font-bold leading-10 text-center text-neutral-900 md:text-6xl md:text-left" data-aos="fade-up">
                                Africa's Fastest Growing Network for <span className="text-primary">Gen-Zs</span> in Tech.
                            </h1>
                            <Link href="https://apply.genztechies.com" target="_blank" className="mx-auto text-white border-none md:ml-0 btn btn-wide bg-primary hover:bg-primary animate-pulse">
                                Join the Community
                            </Link>

                            <Link href={"https://bit.ly/GenZHackFest2023"} target="_blank" className="flex items-center justify-center gap-2 font-semibold text-center md:justify-start text-primary hover:underline md:text-left">
                                Register for Hackfest 2023 🚀{" "}
                                <span className="p-1 rounded-full text-primary bg-primary-light bg-opacity-40">
                                    <ChevronRightIcon />
                                </span>
                            </Link>
                        </div>
                        <div className="grid items-center justify-center grid-cols-3 gap-5">
                            <div className="space-y-3 -mb-28">
                                <Image alt="community member" src={require("../public/assets/images/home-hero-group-images/img1.png")} placeholder="blur" width={170} height={245} data-aos="fade-right" />
                                <Image alt="community member" src={require("../public/assets/images/home-hero-group-images/img2.png")} placeholder="blur" width={170} height={245} data-aos="fade-up" data-aos-delay="300" />
                            </div>
                            <div className="space-y-3">
                                <Image alt="community member" src={require("../public/assets/images/home-hero-group-images/img3.png")} placeholder="blur" width={170} height={245} data-aos="fade-down" />
                                <Image alt="community member" src={require("../public/assets/images/home-hero-group-images/img4.png")} placeholder="blur" width={170} height={245} data-aos="fade-up" data-aos-delay="300" />
                            </div>
                            <div className="space-y-3 -mb-28">
                                <Image alt="community member" src={require("../public/assets/images/home-hero-group-images/img5.png")} placeholder="blur" width={170} height={245} data-aos="zoom-in" />
                                <Image alt="community member" src={require("../public/assets/images/home-hero-group-images/img6.png")} placeholder="blur" width={170} height={245} data-aos="fade-up" data-aos-delay="300" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="flex flex-col items-center p-5 bg-white border-dashed border-y-4">
                    <div className="flex flex-col w-full max-w-4xl gap-10 md:flex-row md:py-10">
                        <img src="/assets/images/left-quote.png" alt="left-quote" className="self-start w-14 md:w-24 aspect-square" data-aos="fade-right" />
                        <div className="w-full">
                            <h3 className="my-2 text-lg font-bold uppercase text-primary">We Are GenZtechies</h3>
                            <p className="my-2 text-3xl font-light text-neutral-900">Where Gen Z developers, founders, designers, and techies across Africa connect, learn, and discover life-changing opportunities.</p>
                        </div>
                        <img src="/assets/images/right-quote.png" alt="right-quote" className="self-end w-14 md:w-24 aspect-square" data-aos="zoom-in" />
                    </div>
                </section>

                <section className="flex flex-col items-center p-5 bg-primary">
                    <div className="w-full max-w-6xl py-10">
                        <h2 className="my-2 text-4xl font-bold text-center text-white md:text-5xl">Spread the super power with us</h2>
                        <p className="my-2 text-lg font-light text-center text-white/80">Aside from building and launching things, we take pride in bridging the gaps in the tech in Africa through workshops, hackathons, events, mentorship programs, and more…</p>

                        <div className="grid grid-cols-1 gap-10 pt-10 md:grid-cols-3 md:pt-20">
                            <div className="flex flex-col items-center space-y-4 md:items-start">
                                <img src="/assets/images/membership-icon.svg" alt="membership-icon" className="h-24 aspect-square" data-aos="zoom-in" />

                                <h3 className="my-2 text-3xl font-medium text-white" data-aos="fade-right">
                                    Membership
                                </h3>

                                <p className="text-lg font-thin text-center md:text-left text-white/80">Collaborate with young makers, developers, innovators, hackers, and founders now.</p>

                                <Link href="https://linktr.ee/genztechies" target="_blank" className="w-full gap-3 text-white bg-transparent border-white btn btn-outline hover:bg-transparent hover:border-white md:w-max" data-aos="zoom-in">
                                    Join Us
                                    <span className="p-1 text-white rounded-full bg-primary-light bg-opacity-40">
                                        <ChevronRightIcon />
                                    </span>
                                </Link>
                            </div>
                            <div className="flex flex-col items-center space-y-4 md:items-start">
                                <img src="/assets/images/partnership-icon.svg" alt="partnership-icon" className="h-24 aspect-square" data-aos="zoom-in" />

                                <h3 className="my-2 text-3xl font-medium text-white" data-aos="fade-right">
                                    Partner With Us
                                </h3>

                                <p className="text-lg font-thin text-center md:text-left text-white/80">Get involved in some of our initiatives either as a sponsor or a partner.</p>

                                <Link href="/contact" className="w-full gap-3 text-white bg-transparent border-white btn btn-outline hover:bg-transparent hover:border-white md:w-max" data-aos="zoom-in">
                                    Partner
                                    <span className="p-1 text-white rounded-full bg-primary-light bg-opacity-40">
                                        <ChevronRightIcon />
                                    </span>
                                </Link>
                            </div>
                            <div className="flex flex-col items-center space-y-4 md:items-start">
                                <img src="/assets/images/support-icon.svg" alt="support-icon" className="h-24 aspect-square" data-aos="zoom-in" />

                                <h3 className="my-2 text-3xl font-medium text-white" data-aos="fade-right">
                                    Support Us
                                </h3>

                                <p className="text-lg font-thin text-center md:text-left text-white/80">Help us further our cause with a tax-deductible donation, every $1 goes a long way.</p>

                                <Link href="/donate" className="w-full gap-3 text-white bg-transparent border-white btn btn-outline hover:bg-transparent hover:border-white md:w-max" data-aos="zoom-in">
                                    Support
                                    <span className="p-1 text-white rounded-full bg-primary-light bg-opacity-40">
                                        <ChevronRightIcon />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="flex flex-col items-center p-5 bg-white">
                    <div className="w-full max-w-6xl py-10">
                        <h2 className="my-2 text-4xl font-bold text-center text-neutral-900 md:text-5xl">Some of our amazing supporters</h2>
                        <p className="my-2 text-lg font-light text-center text-neutral-900">Brands we've loved working with</p>

                        <div className="grid grid-cols-1 gap-5 pt-10 md:grid-cols-3">
                            {supporters.map((supporter) => (
                                <Link key={supporter.title} href={supporter.link} target={"_blank"}>
                                    <img src={`/assets/images/supporters/${supporter.title}.svg`} className="m-auto h-44 aspect-video" alt="company-logo" data-aos="fade-up" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="flex flex-col items-center p-5 bg-slate-100">
                    <div className="w-full max-w-6xl py-10">
                        <p className="my-2 text-lg font-bold uppercase text-primary">Our Initiatives</p>
                        <h2 className="my-2 text-3xl font-bold text-neutral-900 md:text-5xl">Find out what GenZtechies are up to</h2>

                        <div className="grid grid-cols-1 gap-10 py-10 md:grid-cols-5">
                            <Link href="https://www.youtube.com/watch?v=YQwja2nCLnY" target="_blank" className="relative md:col-span-3" data-aos="fade-down-zoom-in">
                                <Image src={require("../public/assets/images/initiatives/hackfest.jpg")} placeholder="blur" width={0} height={0} sizes="100" className="object-cover w-full h-full aspect-square md:aspect-video rounded-2xl" alt="initiative-preview" />

                                <div className="absolute top-0 left-0 flex items-end w-full h-full gap-2 p-5 overflow-hidden bg-gradient-to-t from-black to-transparent rounded-2xl">
                                    <div className="flex flex-row items-center gap-2">
                                        <button className="btn btn-circle btn-ghost">
                                            <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="20" cy="20.5" r="20" fill="white" />
                                                <path d="M14.4587 12.7775C14.4356 12.0081 15.2542 11.5021 15.9321 11.8669L29.1514 18.979C29.8293 19.3438 29.8582 20.3056 29.2033 20.7103L16.4344 28.6025C15.7795 29.0072 14.9321 28.5513 14.9091 27.7819L14.4587 12.7775Z" fill="#11113E" />
                                            </svg>
                                        </button>

                                        <div className="w-full">
                                            <h1 className="text-xl font-bold text-white">Gen Z Hackfest 2022</h1>
                                            <p className="text-gray-400">#GenZHackfest</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            <Link href="https://www.youtube.com/watch?v=h7uCgsaYV9E" target="_blank" className="relative md:col-span-2" data-aos="fade-down-zoom-in">
                                <Image src={require("../public/assets/images/initiatives/paystacktour.jpg")} placeholder="blur" width={0} height={0} sizes="100" className="object-cover w-full h-full aspect-square md:aspect-video rounded-2xl" alt="initiative-preview" />

                                <div className="absolute top-0 left-0 flex items-end w-full h-full gap-2 p-5 overflow-hidden bg-gradient-to-t from-black to-transparent rounded-2xl">
                                    <div className="flex flex-row items-center gap-2">
                                        <button className="btn btn-circle btn-ghost">
                                            <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="20" cy="20.5" r="20" fill="white" />
                                                <path d="M14.4587 12.7775C14.4356 12.0081 15.2542 11.5021 15.9321 11.8669L29.1514 18.979C29.8293 19.3438 29.8582 20.3056 29.2033 20.7103L16.4344 28.6025C15.7795 29.0072 14.9321 28.5513 14.9091 27.7819L14.4587 12.7775Z" fill="#11113E" />
                                            </svg>
                                        </button>

                                        <div className="w-full">
                                            <h1 className="text-xl font-bold text-white">Paystack Office Tour</h1>
                                            <p className="text-gray-400">#OfficeTourWIthGenZtechies</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            <Link href="/initiatives" className="gap-3 text-white border-none btn btn-wide bg-primary hover:bg-primary">
                                View all initiatives
                                <span className="p-1 text-white rounded-full bg-primary-light bg-opacity-40">
                                    <ChevronRightIcon />
                                </span>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
};

export default Home;

const supporters: { title: string; link: string }[] = [
    {
        title: "vercel",
        link: "https://vercel.com/?utm_source=genztechies&utm_campaign=oss"
    },
    {
        title: "paystack",
        link: "https://paystack.com/"
    },
    {
        title: "lazerpay",
        link: "https://lazerpay.finance/"
    },
    {
        title: "filecoin",
        link: "https://filecoin.io/"
    },
    {
        title: "sail",
        link: "https://www.tokunboabiru.org/sail"
    },
    {
        title: "spheron",
        link: "https://spheron.network/"
    },
    {
        title: "technext",
        link: "https://technext.ng/"
    },
    {
        title: "i4g",
        link: "https://ingressive.org/"
    },
    {
        title: "klas",
        link: "https://www.tryklas.com/"
    },
    {
        title: "zeddpay",
        link: "https://www.zeddpay.com/"
    },
    {
        title: "techsteroid",
        link: "https://techsteroid.africa/"
    },
    {
        title: "gameverse",
        link: "#"
    },
    {
        title: "zuri",
        link: "#"
    },
    {
        title: "abcd-community",
        link: "#"
    }
];
