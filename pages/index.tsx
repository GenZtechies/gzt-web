import React from "react";
import type { NextPage } from "next";

import Loading from "../components/Loading";
import Navbar from "../components/Sections/Navbar";
import Image from "next/image";
import ChevronRight from "../icons/ChevronRight";

const supporters: string[] = ["vercel", "paystack", "lazerpay", "filecoin", "sail", "spheron", "ifg", "technext", "klas", "zeddpay", "techsteroid", "devtranet"];
const Home: NextPage = () => {
    return (
        <>
            {/* Hero section starts */}
            <main className="flex flex-col justify-bey items-center min-h-screen w-screen bg-[url('/images/bg-hero.svg')]  bg-cover bg-top ">
                <Navbar />
                <div className="container flex flex-col md:flex-row justify-around md:justify-between w-full min-h-[90vh]">
                    <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start">
                        <p className="block md:hidden leading-relaxed text-center text-3xl font-semibold w-full md:w-4/5">
                            {"Africa's"} largest network for <span className="text-primary">{"GenZ’s "}</span> in tech
                        </p>
                        <p className="hidden md:block leading-normal text-5xl font-semibold w-full md:w-4/5">
                            {"Africa's"} largest network for <span className="text-primary">{"GenZ’s "}</span> in tech
                        </p>
                        <button className="btn bg-primary hover:opacity-80 hover:bg-primary text-white border-none text-sm">Join the Community</button>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center items-center">
                        <Image alt="team members" src={"/images/group-img.png"} width={500} height={550} className="" />
                    </div>
                </div>
            </main>
            {/* Hero section ends */}
            {/* Mission section starts */}
            <section className="container relative">
                <div className="flex justify-center md:absolute md:-top-24 md:left-0">
                    <div className="w-full md:w-4/5 px-5 py-3 md:py-14 bg-white border-2 border-dashed border-gray-300 flex flex-col md:flex-row items-center  justify-center space-x-4 rounded-lg ">
                        <img src="/images/left-quote.png" alt="" className="w-14 h-14 md:w-24 md:h-24 self-start" />
                        <div className="md:w-3/5">
                            <h1 className="uppercase text-primary font-semibold">WE ARE GENZTECHIES</h1>
                            <p className="text-primary-dark font-semibold">Our mission is to connect {"Gen Z’s"} involved in technology across Africa to share ideas and access new opportunities.</p>
                        </div>
                        <img src="/images/right-quote.png" alt="" className="w-14 h-14 md:w-24 md:h-24 self-end" />
                    </div>
                </div>
            </section>
            {/* Mission section ends */}
            {/* Features section starts */}
            <section className="bg-primary min-h-screen -mt-32 md:-mt-0 flex flex-col py-10">
                <div className="container pt-[20vh] min-h-full flex flex-col  flex-grow space-y-16">
                    <div className="space-y-2 flex flex-col justify-center">
                        <h1 className="text-white text-3xl md:text-4xl text-center">Spread the super power with us</h1>
                        <p className="text-white text-center text-lg">Aside from building and launching things, we take pride in bridging the gaps in the tech in Africa through workshops, hackathons, events, mentorship programs, and more…</p>
                    </div>
                    <div className={`grid grid-cols-1 md:grid-cols-3 gap-5 w-full`}>
                        <div className={`flex flex-col items-start space-y-5`}>
                            <Image src="/images/membership.png" alt="Membership Icon" width={100} height={100} />
                            <h1 className="text-2xl font-bold text-white">Membership</h1>
                            <p className="text-primary-light text-sm">A website that brings together teen developers and innovators from around Nigeria in one place.</p>
                            <button className="btn btn-ghost border border-primary-light  text-primary-light hover:bg-transparent hover:border hover:border-primary-light gap-2">
                                Join Us
                                <span className="bg-primary-light p-2 rounded-full text-white bg-opacity-40">
                                    <ChevronRight className="opacity-100" />
                                </span>
                            </button>
                        </div>
                        <div className={`flex flex-col items-start space-y-5`}>
                            <Image src="/images/partnership.png" alt="Parnership Icon" width={100} height={100} />
                            <h1 className="text-2xl font-bold text-white">Partner With Us</h1>
                            <p className="text-primary-light text-sm">A website that brings together teen developers and innovators from around Nigeria in one place.</p>
                            <button className="btn btn-ghost border border-primary-light  text-primary-light hover:bg-transparent hover:border hover:border-primary-light gap-2">
                                Partner
                                <span className="bg-primary-light p-2 rounded-full text-white bg-opacity-40">
                                    <ChevronRight className="opacity-100" />
                                </span>
                            </button>
                        </div>
                        <div className={`flex flex-col items-start space-y-5`}>
                            <Image src="/images/support.png" alt="Support Icon" width={100} height={100} />
                            <h1 className="text-2xl font-bold text-white">Support Us</h1>
                            <p className="text-primary-light text-sm">A website that brings together teen developers and innovators from around Nigeria in one place.</p>
                            <button className="btn btn-ghost border border-primary-light  text-primary-light hover:bg-transparent hover:border hover:border-primary-light gap-2">
                                Support
                                <span className="bg-primary-light p-2 rounded-full text-white bg-opacity-40">
                                    <ChevronRight className="opacity-100" />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            {/* Features section ends */}
            {/* Supporters section starts */}
            <section className="container min-h-screen py-10">
                <h1 className="font-bold text-2xl md:text-4xl text-black text-center">Some of our amazing supporters</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-start gap-5 w-full py-10">
                    {supporters.map((supporter: string, index: number) => (
                        <div key={supporter} className="flex items-center justify-center w-full">
                            <Image src={`/images/${supporter}.svg`} height={80} width={300} alt="Supporters Image" />
                        </div>
                    ))}
                </div>
            </section>
            {/* Supporters section ends */}
            {/* Events section starts */}
            <section className="bg-slate-100 min-h-screen py-10 md:p-10">
                <div className="container w-full">
                    <h1 className="text-tertiary uppercase font-semibold text-lg">OUR INITIATIVES</h1>
                    <p className="text-slate-900 text-3xl font-bold my-5">Find out what GenZtechies are up to</p>
                    <div className="w-full h-screen flex flex-col md:flex-row justify-between flex-wrap">
                        <div className="relative h-[60%] md:h-4/5 w-full md:w-8/12 overflow-hidden rounded-3xl">
                            <Image src="/images/hackfest2022.png" layout="fill" className="object-cover" alt="Hackfest 2022" />
                            <div className="absolute bottom-0 left-0 p-5 flex items-center space-x-3">
                                <button className="btn btn-circle btn-ghost">
                                    <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="20" cy="20.5" r="20" fill="white" />
                                        <path d="M14.4587 12.7775C14.4356 12.0081 15.2542 11.5021 15.9321 11.8669L29.1514 18.979C29.8293 19.3438 29.8582 20.3056 29.2033 20.7103L16.4344 28.6025C15.7795 29.0072 14.9321 28.5513 14.9091 27.7819L14.4587 12.7775Z" fill="#11113E" />
                                    </svg>
                                </button>
                                <div>
                                    <h1 className="text-white text-xl">Genz Hackfest 2022</h1>
                                    <p className="text-gray-400">Genz Hackfest 2022</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-[30%] md:h-4/5 w-full md:w-[30%] overflow-hidden rounded-3xl">
                            <Image src="/images/paystacktour.png" layout="fill" className="object-cover" alt="PayStack Tour 2022" />
                            <div className="absolute bottom-0 left-0 p-5 flex items-center space-x-3">
                                <button className="btn btn-circle btn-ghost">
                                    <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="20" cy="20.5" r="20" fill="white" />
                                        <path d="M14.4587 12.7775C14.4356 12.0081 15.2542 11.5021 15.9321 11.8669L29.1514 18.979C29.8293 19.3438 29.8582 20.3056 29.2033 20.7103L16.4344 28.6025C15.7795 29.0072 14.9321 28.5513 14.9091 27.7819L14.4587 12.7775Z" fill="#11113E" />
                                    </svg>
                                </button>
                                <div>
                                    <h1 className="text-white text-xl">Paystack Office Tour</h1>
                                    <p className="text-gray-400">Paystack Office Tour</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full">
                            <button className="btn bg-primary text-white capitalize hover:bg-primary border-none gap-5">
                                <span>View More Projects</span>
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="16" cy="16" r="16" fill="white" fillOpacity="0.15" />
                                    <path d="M13.5 21L18.5 16L13.5 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            {/* Events section ends */}
        </>
    );
};

export default Home;
