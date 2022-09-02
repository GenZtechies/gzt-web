import React from "react";
import Navbar from "../Navbar";

const Hero = () => {
    return (
        <main className="flex flex-col justify-bey items-center min-h-screen w-screen bg-[url('/images/bg-xs.png')]  sm:bg-[url('/images/bg-main.png')] bg-cover bg-top ">
            <Navbar />

            <h1 className="text-center leading-normal md:leading-normal  text-2xl md:text-5xl font-semibold w-2/3 md:w-1/2 mt-10 mb-5">
                Connecting <span className="text-primary">{"GenZ’s in Tech"}</span> Across the <span className="text-tertiary">Continent</span>
            </h1>
            <button className="btn bg-primary hover:opacity-80 hover:bg-primary text-white border-none">Join the Community</button>
        </main>
    );
};

export default Hero;
