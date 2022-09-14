import Image from "next/image";
import React from "react";
import Navbar from "../components/Sections/Navbar";

const Initiatives = () => {
    return (
        <>
            <main className="flex flex-col justify-between items-center min-h-screen w-screen bg-[url('/images/bg-initiatives.svg')]  bg-cover bg-top ">
                <Navbar />
                <div className="container flex flex-col md:flex-row justify-around md:justify-between w-full min-h-[90vh]">
                    <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start space-y-4">
                        <h1 className="text-primary">Events & Initiatives</h1>
                        <p className="block md:hidden text-3xl  text-center  font-semibold">Projects, events and activities we work on as a community</p>
                        <p className="hidden md:block text-5xl  font-semibold">Projects, events and activities we work on as a community</p>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center items-center">
                        <Image alt="team members" src={"/images/hero-initiatives.svg"} width={500} height={550} className="" />
                    </div>
                </div>
            </main>
        </>
    );
};

export default Initiatives;
