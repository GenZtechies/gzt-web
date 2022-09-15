import Image from "next/image";
import Link from "next/link";
import React from "react";
import Card from "../components/Card";

import Navbar from "../components/Sections/Navbar";
import TextField from "../components/TextField";

const Contact = () => {
    return (
        <>
            {/* Hero starts here */}
            <main className="flex flex-col justify-between items-center min-h-screen w-screen bg-[url('/images/bg-initiatives.svg')]  bg-cover bg-top ">
                <Navbar />
                <div className="container flex flex-col md:flex-row justify-around md:justify-between w-full min-h-[90vh]">
                    <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start space-y-4">
                        <h1 className="text-primary">Get In Touch</h1>
                        <p className="block md:hidden text-3xl  text-center  font-semibold">Any question or remark just write us a message</p>
                        <p className="hidden md:block text-5xl  font-semibold">Any question or remark just write us a message</p>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center items-center">
                        <Image alt="team members" src={"/images/hero-contact.svg"} width={500} height={550} className="" />
                    </div>
                </div>
            </main>
            {/* Hero ends here */}
            {/* Form  starts here */}
            <section className="bg-light py-10">
                <div className="container grid grid-cols-1 lg:grid-cols-3 min-h-screen justify-between items-start gap-8">
                    <div className="col-span-2">
                        <h1 className="text-3xl">Send a Message.</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                            <TextField name="firstName" label="First Name" placeholder="First Name" containerClass="col-span-2 md:col-span-1" />
                            <TextField name="lastName" label="Last Name" placeholder="Last Name" containerClass="col-span-2 md:col-span-1" />
                            <TextField name="email" type="email" label="Email" placeholder="Email" containerClass="col-span-2 md:col-span-1" />
                            <TextField name="phone" type="number" label="Phone" placeholder="Phone" containerClass="col-span-2 md:col-span-1" />
                            <TextField name="subject" label="Subject" placeholder="Subject" containerClass="col-span-2" />
                            <div className="form-control col-span-2 ">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <textarea className="textarea textarea-bordered h-32 focus:outline-none" placeholder="Message"></textarea>
                            </div>
                            <button className="btn bg-primary hover:opacity-80 hover:bg-primary text-white border-none w-fit px-8">Send Message</button>
                        </div>
                    </div>
                    <div className="w-full col-span-2 md:col-span-1">
                        <div className="p-5 h-full bg-[url('/images/img-contact.svg')] bg-cover bg-center rounded-xl min-h-[523px] space-y-5">
                            <h1 className="text-white text-2xl font-semibold">Contact Information</h1>
                            <p className="text-white text-base">Fill up the form and our team will get back to you within 24 hours</p>
                            <div>
                                <ul className="space-y-8">
                                    {/* Email Link */}
                                    <li className="gap-2 ">
                                        <div className="flex items-center space-x-3">
                                            <div className="p-3 border border-white rounded-full w-fit">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#D6D6F5" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M22 6L12 13L2 6" stroke="#D6D6F5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            <div className="flex flex-col space-y-2">
                                                <span className="text-primary-light text-sm">Email</span>
                                                <span className="text-white">
                                                    <Link href={"mailto:hello@genztechies.com"}>
                                                        <a>hello@genztechies.com</a>
                                                    </Link>
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                    {/* Twitter Link */}
                                    <li className="gap-2 ">
                                        <div className="flex items-center space-x-3">
                                            <div className="p-3 border border-white rounded-full w-fit">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#D6D6F5" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M22 6L12 13L2 6" stroke="#D6D6F5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            <div className="flex flex-col space-y-2">
                                                <span className="text-primary-light text-sm">Twitter</span>
                                                <span className="text-white">
                                                    <Link href={"https://twitter.com/GenZtechies"}>
                                                        <a>GenZtechies</a>
                                                    </Link>
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                    {/* Instagram Link */}
                                    <li className="gap-2 ">
                                        <div className="flex items-center space-x-3">
                                            <div className="p-3 border border-white rounded-full w-fit">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="#D6D6F5" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path
                                                        d="M15.9997 11.3703C16.1231 12.2025 15.981 13.0525 15.5935 13.7993C15.206 14.5461 14.5929 15.1517 13.8413 15.53C13.0898 15.9082 12.2382 16.0399 11.4075 15.9062C10.5768 15.7726 9.80947 15.3804 9.21455 14.7855C8.61962 14.1905 8.22744 13.4232 8.09377 12.5925C7.96011 11.7619 8.09177 10.9102 8.47003 10.1587C8.84829 9.40716 9.45389 8.79404 10.2007 8.40654C10.9475 8.01904 11.7975 7.87689 12.6297 8.0003C13.4786 8.12619 14.2646 8.52176 14.8714 9.12861C15.4782 9.73545 15.8738 10.5214 15.9997 11.3703Z"
                                                        stroke="#D6D6F5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path d="M17.5 6.5H17.51" stroke="#D6D6F5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            <div className="flex flex-col space-y-2">
                                                <span className="text-primary-light text-sm">Instgram</span>
                                                <span className="text-white">
                                                    <Link href={"https://instgram.com/GenZtechies"}>
                                                        <a>GenZtechies</a>
                                                    </Link>
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                    {/* LinkedIn Link */}
                                    <li className="gap-2 ">
                                        <div className="flex items-center space-x-3">
                                            <div className="p-3 border border-white rounded-full w-fit">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z"
                                                        stroke="#D6D6F5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path d="M6 9H2V21H6V9Z" stroke="#D6D6F5" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="#D6D6F5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            <div className="flex flex-col space-y-2">
                                                <span className="text-primary-light text-sm">LinkedIn</span>
                                                <span className="text-white">
                                                    <Link href={"https://linkedin.com/GenZtechies"}>
                                                        <a>GenZtechies</a>
                                                    </Link>
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Form  ends here */}
        </>
    );
};

export default Contact;
