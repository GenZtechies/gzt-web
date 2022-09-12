import React from "react";
import type { NextPage } from "next";

import Loading from "../components/Loading";
import Events from "../components/Sections/Events";
import Navbar from "../components/Sections/Navbar";
import Image from "next/image";
const Home: NextPage = () => {
    return (
        <>
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
                        <Image src={"/images/group-img.png"} width={500} height={500} className="" />
                    </div>
                </div>
            </main>
            <section className="container relative">
                <div className="flex justify-center md:absolute md:-top-24 md:left-0">
                    <div className="w-full md:w-4/5 px-5 py-3 md:py-14 bg-white border-2 border-dashed border-gray-300 flex flex-col md:flex-row items-center  justify-center space-x-4 rounded-lg ">
                        <img src="/images/left-quote.png" alt="" className="w-14 h-14 md:w-24 md:h-24 self-start" />
                        <div className="md:w-3/5">
                            <h1 className="uppercase text-primary font-semibold">WE ARE GENZTECHIES</h1>
                            <p>Our mission is to connect {"Gen Z’s"} involved in technology across Africa to share ideas and access new opportunities.</p>
                        </div>
                        <img src="/images/right-quote.png" alt="" className="w-14 h-14 md:w-24 md:h-24 self-end" />
                    </div>
                </div>
            </section>
            <section className="bg-primary min-h-screen -mt-32 md:-mt-0">
                <div className="container pt-[20vh] md:pt-[30vh]">
                    <h1 className="text-white text-3xl md:text-5xl text-center">Spread the super power with us</h1>
                </div>
            </section>
            <Events />
        </>
    );
};

export default Home;
