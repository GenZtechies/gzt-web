import React from "react";
import type { NextPage } from "next";

import Loading from "../components/Loading";
import Hero from "../components/Sections/Hero";
import Engagements from "../components/Sections/Engagements";
import Events from "../components/Sections/Events";
import Projects from "../components/Sections/Projects";
const Home: NextPage = () => {
    return (
        <>
            <Hero />
            <section className="container  min-h-screen flex flex-col justify-around">
                <div className="mx-auto md:w-3/5 space-y-4 flex flex-col items-center">
                    <h1 className="text-3xl text-center font-bold">We Learn, Build and have fun</h1>
                    <p className="text-center text-lg">We connect young techies across Nigeria to exchange opportunities, work on innovative projects, and foster quality connections.</p>
                    <button className="btn bg-primary hover:opacity-80 hover:bg-primary text-white border-none">Know More</button>
                </div>
                <Engagements />
            </section>
            <section className="bg-[url('/images/bg-quote.svg')] bg-cover bg-bottom p-5 md:py-14 flex flex-col md:flex-row items-center  justify-center space-x-4 ">
                <img src="/images/left-quote.png" alt="" className="w-14 h-14 md:w-24 md:h-24 self-start" />
                <div className="w-full md:w-1/2 py-3 md:py-10">
                    <h1 className="uppercase text-primary font-semibold">Our mission</h1>
                    <p>Our mission is to connect teens involved in technology across Nigeria to share ideas and access new opportunities.</p>
                </div>
                <img src="/images/right-quote.png" alt="" className="w-14 h-14 md:w-24 md:h-24 self-end" />
            </section>
            <Events />
            <Projects />
        </>
    );
};

export default Home;
