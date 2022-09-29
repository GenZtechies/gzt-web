import React from "react";
import { NextPage } from "next";
import { Navbar } from "../components";
import Image from "next/image";

const About: NextPage = () => {
    return (
        <>
            <main className="min-h-screen w-full bg-[url('/images/bg-about.svg')] bg-cover bg-center space-y-10">
                <Navbar />
                <div className="container flex flex-col md:flex-row items-center justify-between w-full space-y-5 md:space-y-0">
                    <div className="w-full md:w-1/2">
                        <h1 className="text-lg text-primary font-semibold">ABOUT US — WHO WE ARE</h1>
                        <p className="text-[#0B0A29] text-xl ">We're a community that connects young techies across Nigeria to exchange opportunities, engage on projects.</p>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-end">
                        <Image src="/images/happy-man.png" alt="Happy man" width={450} height={500} />
                    </div>
                </div>
            </main>
            <section className="container">
                <div className="container bg-white p-5 md:py-14 flex flex-col md:flex-row items-center  justify-center space-x-4 border-2 border-dashed border-gray-300 rounded-2xl">
                    <img src="/images/left-quote.png" alt="" className="w-14 h-14 md:w-24 md:h-24 self-start" />
                    <div className="w-full md:w-1/2 py-3 md:py-10">
                        <h1 className="uppercase text-primary font-semibold">Our mission</h1>
                        <p>Our mission is to connect teens involved in technology across Nigeria to share ideas and access new opportunities.</p>
                    </div>
                    <img src="/images/right-quote.png" alt="" className="w-14 h-14 md:w-24 md:h-24 self-end" />
                </div>
            </section>
            <section className="bg-slate-100">
                <div className="container  min-h-screen flex flex-col justify-around py-10">
                    <div className="w-full md:w-1/2">
                        <h1 className="text-lg text-primary font-semibold">ABOUT US — WHAT WE DO</h1>
                        <p className="text-[#0B0A29] text-2xl font-bold ">What we engage in as a community.</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
