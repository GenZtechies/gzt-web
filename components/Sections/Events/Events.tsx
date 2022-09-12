import Image from "next/image";
import React from "react";

const Events = () => {
    return (
        <section className="bg-slate-100 min-h-screen py-10 md:p-10">
            <div className="container w-full">
                <h1 className="text-tertiary uppercase font-semibold text-lg">OUR INITIATIVES</h1>
                <p className="text-slate-900 text-3xl font-bold my-5">Find out what GenZtechies are up to</p>
                <div className="w-full h-screen flex flex-col md:flex-row justify-between flex-wrap">
                    <div className="relative h-[60%] md:h-4/5 w-full md:w-8/12 overflow-hidden rounded-3xl">
                        <Image src="/images/hackfest2022.png" layout="fill" className="object-cover" />
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
                        <Image src="/images/paystacktour.png" layout="fill" className="object-cover" />
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
    );
};

export default Events;
