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
                    <div className="flex flex-col md:flex-row items-center w-full max-w-6xl mt-10 md:py-10 gap-10">
                        <div className="w-full md:w-1/2">
                            <h1 className="text-neutral-900 text-4xl md:text-6xl leading-10  font-bold my-5" data-aos="fade-up">
                                Africa's Fastest Growing Network for <span className="text-primary">Gen-Zs</span> in Tech.
                            </h1>
                            <Link href="https://linktr.ee/genztechies" target="_blank" className="btn btn-wide bg-primary hover:bg-primary border-none text-white animate-bounce">
                                Join the Community
                            </Link>
                        </div>
                        <div className="justify-center items-center grid grid-cols-3 gap-5">
                            <div className="-mb-28 space-y-3">
                                <Image alt="community member" src={require("../public/assets/images/home-hero-group-images/img1.png")} placeholder="blur" width={170} height={245} data-aos="fade-right" />
                                <Image alt="community member" src={require("../public/assets/images/home-hero-group-images/img2.png")} placeholder="blur" width={170} height={245} data-aos="fade-up" data-aos-delay="300" />
                            </div>
                            <div className="space-y-3">
                                <Image alt="community member" src={require("../public/assets/images/home-hero-group-images/img3.png")} placeholder="blur" width={170} height={245} data-aos="fade-down" />
                                <Image alt="community member" src={require("../public/assets/images/home-hero-group-images/img4.png")} placeholder="blur" width={170} height={245} data-aos="fade-up" data-aos-delay="300" />
                            </div>
                            <div className="-mb-28 space-y-3">
                                <Image alt="community member" src={require("../public/assets/images/home-hero-group-images/img5.png")} placeholder="blur" width={170} height={245} data-aos="zoom-in" />
                                <Image alt="community member" src={require("../public/assets/images/home-hero-group-images/img6.png")} placeholder="blur" width={170} height={245} data-aos="fade-up" data-aos-delay="300" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="flex flex-col items-center bg-white border-y-4 border-dashed p-5">
                    <div className="flex flex-col md:flex-row w-full max-w-4xl md:py-10 gap-10">
                        <img src="/assets/images/left-quote.png" alt="left-quote" className="w-14 md:w-24 aspect-square self-start" data-aos="fade-right" />
                        <div className="w-full">
                            <h3 className="text-primary text-lg uppercase font-bold my-2">We Are GenZtechies</h3>
                            <p className="text-neutral-900 text-3xl font-light my-2">Where Gen Z developers, founders, designers, and techies across Africa connect, learn, and discover life-changing opportunites.</p>
                        </div>
                        <img src="/assets/images/right-quote.png" alt="right-quote" className="w-14 md:w-24 aspect-square self-end" data-aos="zoom-in" />
                    </div>
                </section>

                <section className="flex flex-col items-center bg-primary p-5">
                    <div className="w-full max-w-6xl py-10">
                        <h2 className="text-center text-white text-4xl md:text-5xl font-bold my-2">Spread the super power with us</h2>
                        <p className="text-center text-white/80 text-lg font-light my-2">Aside from building and launching things, we take pride in bridging the gaps in the tech in Africa through workshops, hackathons, events, mentorship programs, and more…</p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-10 md:pt-20">
                            <div className="flex flex-col items-center md:items-start space-y-4">
                                <img src="/assets/images/membership-icon.svg" alt="membership-icon" className="h-24 aspect-square" data-aos="zoom-in" />

                                <h3 className="text-white text-3xl font-medium my-2" data-aos="fade-right">
                                    Membership
                                </h3>

                                <p className="text-center md:text-left text-white/80 text-lg font-thin">Collaborate with young makers, developers, innovators, hackers, and founders now.</p>

                                <Link href="https://linktr.ee/genztechies" target="_blank" className="btn btn-outline bg-transparent hover:bg-transparent border-white hover:border-white text-white w-full md:w-max gap-3" data-aos="zoom-in">
                                    Join Us
                                    <span className="bg-primary-light rounded-full text-white bg-opacity-40 p-1">
                                        <ChevronRightIcon />
                                    </span>
                                </Link>
                            </div>
                            <div className="flex flex-col items-center md:items-start space-y-4">
                                <img src="/assets/images/partnership-icon.svg" alt="partnership-icon" className="h-24 aspect-square" data-aos="zoom-in" />

                                <h3 className="text-white text-3xl font-medium my-2" data-aos="fade-right">
                                    Partner With Us
                                </h3>

                                <p className="text-center md:text-left text-white/80 text-lg font-thin">Get involved in some of our initiatives either as a sponsor or a partner.</p>

                                <Link href="/contact" className="btn btn-outline bg-transparent hover:bg-transparent border-white hover:border-white text-white w-full md:w-max gap-3" data-aos="zoom-in">
                                    Partner
                                    <span className="bg-primary-light rounded-full text-white bg-opacity-40 p-1">
                                        <ChevronRightIcon />
                                    </span>
                                </Link>
                            </div>
                            <div className="flex flex-col items-center md:items-start space-y-4">
                                <img src="/assets/images/support-icon.svg" alt="support-icon" className="h-24 aspect-square" data-aos="zoom-in" />

                                <h3 className="text-white text-3xl font-medium my-2" data-aos="fade-right">
                                    Support Us
                                </h3>

                                <p className="text-center md:text-left text-white/80 text-lg font-thin">Help us further our cause with a tax-deductible donation, every $1 goes a long way.</p>

                                <Link href="/donate" className="btn btn-outline bg-transparent hover:bg-transparent border-white hover:border-white text-white w-full md:w-max gap-3" data-aos="zoom-in">
                                    Support
                                    <span className="bg-primary-light rounded-full text-white bg-opacity-40 p-1">
                                        <ChevronRightIcon />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="flex flex-col items-center bg-white p-5">
                    <div className="w-full max-w-6xl py-10">
                        <h2 className="text-center text-neutral-900 text-4xl md:text-5xl font-bold my-2">Some of our amazing supporters</h2>
                        <p className="text-center text-neutral-900 text-lg font-light my-2">Brands we've loved working with</p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-10">
                            {["vercel", "paystack", "lazerpay", "filecoin", "sail", "spheron", "technext", "i4g", "klas", "zeddpay", "techsteroid", "gameverse", "zuri", "abcd-community"].map((supporter) => (
                                <img key={supporter} src={`/assets/images/supporters/${supporter}.svg`} className="m-auto h-44 aspect-video" alt="company-logo" data-aos="fade-up" />
                            ))}
                        </div>
                    </div>
                </section>

                <section className="flex flex-col items-center bg-slate-100 p-5">
                    <div className="w-full max-w-6xl py-10">
                        <p className="text-primary text-lg uppercase font-bold my-2">Our Initiatives</p>
                        <h2 className="text-neutral-900 text-3xl md:text-5xl font-bold my-2">Find out what GenZtechies are up to</h2>

                        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 py-10">
                            <Link href="https://www.youtube.com/watch?v=YQwja2nCLnY" target="_blank" className="relative md:col-span-3" data-aos="fade-down-zoom-in">
                                <Image src={require("../public/assets/images/initiatives/hackfest.jpg")} placeholder="blur" width={0} height={0} sizes="100" className="w-full h-full aspect-square md:aspect-video object-cover rounded-2xl" alt="initiative-preview" />

                                <div className="flex w-full h-full items-end gap-2 absolute overflow-hidden top-0 left-0 bg-gradient-to-t from-black to-transparent rounded-2xl p-5">
                                    <div className="flex flex-row items-center gap-2">
                                        <button className="btn btn-circle btn-ghost">
                                            <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="20" cy="20.5" r="20" fill="white" />
                                                <path d="M14.4587 12.7775C14.4356 12.0081 15.2542 11.5021 15.9321 11.8669L29.1514 18.979C29.8293 19.3438 29.8582 20.3056 29.2033 20.7103L16.4344 28.6025C15.7795 29.0072 14.9321 28.5513 14.9091 27.7819L14.4587 12.7775Z" fill="#11113E" />
                                            </svg>
                                        </button>

                                        <div className="w-full">
                                            <h1 className="text-white text-xl font-bold">Gen Z Hackfest 2022</h1>
                                            <p className="text-gray-400">#GenZHackfest</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            <Link href="https://www.youtube.com/watch?v=h7uCgsaYV9E" target="_blank" className="relative md:col-span-2" data-aos="fade-down-zoom-in">
                                <Image src={require("../public/assets/images/initiatives/paystacktour.jpg")} placeholder="blur" width={0} height={0} sizes="100" className="w-full h-full aspect-square md:aspect-video object-cover rounded-2xl" alt="initiative-preview" />

                                <div className="flex w-full h-full items-end gap-2 absolute overflow-hidden top-0 left-0 bg-gradient-to-t from-black to-transparent rounded-2xl p-5">
                                    <div className="flex flex-row items-center gap-2">
                                        <button className="btn btn-circle btn-ghost">
                                            <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="20" cy="20.5" r="20" fill="white" />
                                                <path d="M14.4587 12.7775C14.4356 12.0081 15.2542 11.5021 15.9321 11.8669L29.1514 18.979C29.8293 19.3438 29.8582 20.3056 29.2033 20.7103L16.4344 28.6025C15.7795 29.0072 14.9321 28.5513 14.9091 27.7819L14.4587 12.7775Z" fill="#11113E" />
                                            </svg>
                                        </button>

                                        <div className="w-full">
                                            <h1 className="text-white text-xl font-bold">Paystack Office Tour</h1>
                                            <p className="text-gray-400">#OfficeTourWIthGenZtechies</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            <Link href="/initiatives" className="btn btn-wide bg-primary hover:bg-primary border-none text-white gap-3">
                                View all initiatives
                                <span className="bg-primary-light rounded-full text-white bg-opacity-40 p-1">
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
