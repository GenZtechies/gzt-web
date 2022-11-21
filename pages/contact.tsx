import React from "react";
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError, AxiosResponse } from "axios";

import { FaqAccordion, Footer, TopNavigationBar } from "../components";

import type { NextPage } from "next";

const Contact: NextPage = () => {
    const { isLoading, mutate } = useMutation((context: any) => axios.post("/api/contact", context), {
        onSuccess: async (response: AxiosResponse) => {
            // Clear form
            (document.getElementById("contactForm") as any).reset();

            return toast.success("Message sent");
        },
        onError: (error: AxiosError<any>) => {
            // return toast.error(error.response ? error.response.data.error : error.message);
            return toast.error("An error occured sending message");
        }
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const formDataToJSON = Object.fromEntries(formData);

        mutate(formDataToJSON);
    };

    return (
        <>
            <TopNavigationBar />

            <main>
                <section className="flex flex-col items-center w-screen bg-[url('/assets/images/general-hero-bg.svg')] bg-cover bg-center bg-no-repeat p-5">
                    <div className="flex flex-col md:flex-row items-center w-full max-w-6xl mt-10 pb-20 md:py-10 gap-10">
                        <div className="w-full md:w-1/2">
                            <p className="text-primary text-xl uppercase font-bold my-2">Get In Touch</p>
                            <h1 className="text-neutral-900 text-3xl md:text-5xl leading-10 font-bold my-5" data-aos="fade-up">
                                Got any questions or concerns?
                            </h1>
                        </div>
                        <div className="flex justify-center items-center mx-auto">
                            <Image alt="team members" src={require("../public/assets/images/contact-hero.png")} placeholder="blur" width={400} height={450} data-aos="zoom-in-right" />
                        </div>
                    </div>
                </section>

                <section className="flex flex-col items-center bg-slate-100 p-5">
                    <div className="w-full max-w-6xl py-10">
                        <div className="flex flex-col md:flex-row justify-between gap-10">
                            <div className="w-full">
                                <h2 className="text-neutral-900 text-3xl font-normal my-5">Send us a Message.</h2>

                                <form className="my-5 space-y-3" id="contactForm" onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="fullName" className="label">
                                            <span className="label-text text-base">Full Name</span>
                                        </label>
                                        <input type="text" name="fullName" placeholder="John Doe" className="input input-bordered rounded focus:border-primary w-full" required />
                                    </div>

                                    <div>
                                        <label htmlFor="phoneNumber" className="label">
                                            <span className="label-text text-base">Phone Number</span>
                                        </label>
                                        <input type="text" name="phoneNumber" placeholder="+23412345678" className="input input-bordered rounded focus:border-primary w-full" required />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="label">
                                            <span className="label-text text-base">Email Address</span>
                                        </label>
                                        <input type="email" name="email" placeholder="genz@mail.com" className="input input-bordered rounded focus:border-primary w-full" required />
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="label">
                                            <span className="label-text text-base">Subject</span>
                                        </label>
                                        <select name="subject" defaultValue="" className="select select-bordered rounded focus:border-primary w-full" required>
                                            <option value="">Choose a subject</option>
                                            <option value="General Enquiries">General Enquiries</option>
                                            <option value="Sponsorship / Partnership">Sponsorship / Partnership</option>
                                            <option value="Other">Other Reason</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="label">
                                            <span className="label-text text-base">Message</span>
                                        </label>
                                        <textarea name="message" placeholder="I love your community so much, I want to give you $500,000 and...." className="textarea textarea-bordered rounded focus:border-primary w-full" required />
                                    </div>

                                    <button type="submit" disabled={isLoading} className={["btn btn-block rounded bg-primary hover:bg-primary border-none text-white no-animation", isLoading && "loading"].join(" ")}>
                                        Send Message
                                    </button>
                                </form>
                            </div>

                            <div className="md:w-2/3 rounded-xl bg-[url('/assets/images/contact-side-info-bg.png')] bg-cover bg-center bg-no-repeat space-y-5 p-8">
                                <h2 className="text-white text-3xl font-bold my-2">Contact Information</h2>

                                <p className="text-white text-base my-1">Fill up the form and our team will get back to you within 24 hours</p>

                                <ul className="space-y-8">
                                    <Link href={"mailto:hello@genztechies.com"} className="list-item">
                                        <div className="flex items-center gap-4">
                                            <div className="p-3 border border-white rounded-full w-fit">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#D6D6F5" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M22 6L12 13L2 6" stroke="#D6D6F5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            <div className="flex flex-col space-y-2">
                                                <span className="text-primary-light text-base">Email</span>
                                                <span className="text-white text-lg">hello@genztechies.com</span>
                                            </div>
                                        </div>
                                    </Link>

                                    <Link href="https://twitter.com/genztechies" target="_blank" className="list-item">
                                        <div className="flex items-center gap-4">
                                            <div className="p-3 border border-white rounded-full w-fit">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M22.7722 2.94685C22.7241 2.83101 22.643 2.73191 22.5389 2.6619C22.4348 2.5919 22.3125 2.5541 22.1871 2.55323H18.8254C18.4099 1.79007 17.7986 1.15131 17.0545 0.702588C16.3104 0.253871 15.4602 0.0113836 14.5913 4.67119e-05C13.2858 -0.00562887 12.0313 0.506095 11.1022 1.42323C10.1731 2.34036 9.64514 3.5882 9.6339 4.89365V5.81918C5.12327 4.74472 1.39987 1.07451 1.35732 1.0426C1.27531 0.961635 1.1729 0.904388 1.06098 0.87693C0.949053 0.849472 0.831782 0.852829 0.721611 0.886644C0.611439 0.920459 0.512478 0.983471 0.435229 1.06899C0.357981 1.15451 0.305327 1.25935 0.282855 1.37238C-0.642674 6.4362 0.878599 9.81917 2.31477 11.766C3.07647 12.8084 4.01215 13.7117 5.08072 14.4362C3.43178 16.4362 0.719025 17.4787 0.68711 17.4894C0.596473 17.5227 0.514761 17.5766 0.448335 17.6467C0.381909 17.7168 0.332561 17.8013 0.304132 17.8936C0.273944 17.9837 0.264959 18.0795 0.277876 18.1736C0.290793 18.2677 0.325262 18.3576 0.3786 18.4362C0.484983 18.5957 1.52753 20 5.16582 20C12.5807 20 18.7828 14.266 19.3786 6.90429L22.6339 3.63834C22.7261 3.55188 22.7891 3.43875 22.8139 3.31476C22.8387 3.19078 22.8241 3.06214 22.7722 2.94685ZM18.3041 6.17024C18.1934 6.28064 18.1288 6.42893 18.1232 6.58514C17.6871 13.3936 11.9956 18.7234 5.16582 18.7234C3.6871 18.7234 2.7403 18.4681 2.17647 18.2128C3.37859 17.6064 5.34667 16.4149 6.5488 14.6064C6.59669 14.5314 6.62892 14.4475 6.64354 14.3598C6.65817 14.272 6.65489 14.1822 6.6339 14.0958C6.61123 14.0073 6.57013 13.9246 6.5133 13.8531C6.45647 13.7816 6.38519 13.7229 6.30412 13.6809C6.28284 13.6809 4.6871 12.8511 3.30412 10.9575C1.65519 8.70215 1.00626 5.94684 1.36796 2.766C2.92115 4.08514 6.2722 6.5745 10.1658 7.22343C10.2575 7.24084 10.3518 7.2376 10.4421 7.21395C10.5323 7.1903 10.6161 7.14684 10.6874 7.08672C10.7588 7.02661 10.8158 6.95135 10.8544 6.86643C10.893 6.7815 10.9121 6.68904 10.9105 6.59578V4.89365C10.9189 3.92959 11.3085 3.00805 11.9942 2.33033C12.6799 1.6526 13.606 1.27379 14.5701 1.27664C15.2667 1.2867 15.9458 1.49655 16.5266 1.88126C17.1074 2.26597 17.5656 2.80936 17.8466 3.44685C17.8952 3.56152 17.9767 3.65917 18.0809 3.72737C18.1851 3.79557 18.3072 3.83123 18.4317 3.82982H20.6445L18.3041 6.17024Z"
                                                        fill="#D6D6F5"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="flex flex-col space-y-2">
                                                <span className="text-primary-light text-base">Twitter</span>
                                                <span className="text-white text-lg">GenZtechies</span>
                                            </div>
                                        </div>
                                    </Link>

                                    <Link href="https://www.instagram.com/genztechies" target="_blank" className="list-item">
                                        <div className="flex items-center gap-4">
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
                                                <span className="text-primary-light text-base">Instgram</span>
                                                <span className="text-white text-lg">GenZtechies</span>
                                            </div>
                                        </div>
                                    </Link>

                                    <Link href="https://linkedin.com/company/genztechies" target="_blank" className="list-item">
                                        <div className="flex items-center gap-4">
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
                                                <span className="text-primary-light text-base">LinkedIn</span>
                                                <span className="text-white text-lg">GenZtechies</span>
                                            </div>
                                        </div>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="flex flex-col items-center bg-white p-5">
                    <div className="w-full max-w-5xl py-10">
                        <h2 className="text-center text-neutral-900 text-4xl md:text-5xl font-bold my-2">Maybe we can answer your question?</h2>

                        <div className="grid grid-cols-1 pt-10">
                            {[
                                { question: "What is GenZtechies all about?", answer: "Africa’s largest network for Gen-Z developers, founders, and technologists. Dream, build, and launch things with us! We love networking, events, and opportunites that lets us get hacky." },
                                { question: "How can i be a part of GenZtechies", answer: "" },
                                { question: "What does GenZtechies Do ?", answer: "" },
                                { question: "What are the perks of being a GenZtechie ?", answer: "" },
                                { question: "Can I partner with GenZtechies ?", answer: "" },
                                { question: "Can I sponsor with GenZtechies ?", answer: "" }
                            ].map((faq, index) => (
                                <FaqAccordion key={index} question={faq.question} answer={faq.answer} />
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
};

export default Contact;
