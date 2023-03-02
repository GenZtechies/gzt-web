import React from "react";
import Link from "next/link";
import Image from "next/image";

import { ChevronRightIcon, Footer, Seo, TopNavigationBar } from "../components";

import type { NextPage } from "next";

const Gallery: NextPage = () => {
    return (
        <>
            <Seo title="Gallery" />

            <TopNavigationBar />

            <main>
                <section className="flex flex-col items-center w-screen bg-[url('/assets/images/general-hero-bg.svg')] bg-cover bg-center bg-no-repeat p-5">
                    <div className="flex flex-col md:flex-row items-center w-full max-w-6xl mt-10 pb-20 md:py-10 gap-10">
                        <div className="w-full md:w-1/2">
                            <p className="text-primary text-xl uppercase font-bold my-2">Gallery Album</p>
                            <h1 className="text-neutral-900 text-3xl md:text-5xl leading-10 font-bold my-5" data-aos="fade-up">
                                See latest photos from our events
                            </h1>
                        </div>
                        <div className="flex justify-center items-center mx-auto">
                            <Image alt="team members" src={require("../public/assets/images/press-hero.png")} placeholder="blur" width={400} height={450} data-aos="zoom-in-right" />
                        </div>
                    </div>
                </section>

                <section className="flex flex-col items-center bg-slate-100 p-5">
                    <div className="w-full max-w-6xl py-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
                            {[
                                {
                                    title: "Gen Z Hackfest 2022",
                                    image: "https://lh3.googleusercontent.com/qIY82QaAZUZwmYO-xK2kRb-NJlFxaczYCgi-8D4MuSbklygyIVwBhcia5PK_M9spDs7UQ9zIQQpWJym1eHyiX7dNE3m3nFAuKmPqP_PVxmjzd3_HCyPgpvv7eEKRcmmDcUH9iBvOMw=w2400",
                                    url: "https://photos.app.goo.gl/MnLqmyVyAn8ivCc19"
                                },
                                {
                                    title: "Paystack Office Tour",
                                    image: "https://lh3.googleusercontent.com/j7zCaO_b37vzH70f-AfFIlUt16MZ5SRcCss5WLRHg7dAANWrVgHp8e-vQcQOp8DpvEX1iz11pmSw19eNRowc9fGQ8-0RvhvzThrSeTeENx1mGqXncKE35oduIOXXGF3GizXjrL270g=w2400",
                                    url: "https://photos.app.goo.gl/mH487AK3sPnKQBs9A"
                                },
                                {
                                    title: "AltSchool Office Tour",
                                    image: "https://lh3.googleusercontent.com/ZT797Ce8n5hA8hfID3JA36uKz7YrBSzD-tQgPe224KiB0AJ76UflWtXMgx-ZXiWycgH5hbr0oQXIBvASfB8DUUA6TPMy-tUUw8K4g_xpzirQOzO-ZRWqsppwC_talkHB2ilXDi-g1w=w2400",
                                    url: "https://photos.app.goo.gl/wciKAVECUykx5BhR8"
                                }
                            ].map((press, index) => (
                                <div key={index} data-aos="fade-up">
                                    <img src={press.image} className="w-full aspect-square md:aspect-video object-cover rounded-2xl" alt={press.title} />

                                    <div className="p-4 space-y-5">
                                        <h2 className="text-primary text-2xl font-bold mb-2">{press.title}</h2>

                                        <Link href={press.url} target="_blank" className="btn bg-primary hover:bg-primary border-none text-white gap-3 my-5">
                                            View Album
                                            <span className="bg-primary-light rounded-full text-white bg-opacity-40 p-1">
                                                <ChevronRightIcon />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
};

export default Gallery;
