import Image from "next/image";
import React from "react";

import { Navbar } from "../components";
import IconBlack from "../icons/IconBlack";
import IconColored from "../icons/IconColored";
import IconWhite from "../icons/IconWhite";
import Logo from "../icons/Logo";

const Brand = () => {
    return (
        <>
            {/* Hero starts here */}
            <main className="flex flex-col justify-between items-center h-fit w-screen bg-[url('/images/bg-initiatives.svg')]  bg-cover bg-top ">
                <Navbar />
                <div className="container flex flex-col md:flex-row justify-around md:justify-between w-full">
                    <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start space-y-4 text-center md:text-left">
                        <h1 className="text-warning md:text-xl">BRAND GUIDELINES</h1>
                        <p className="text-3xl md:text-5xl  md:text-left font-semibold">How GenZtechies brand should be represented</p>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center items-center">
                        <Image alt="team members" src={"/images/hero-brand.svg"} width={400} height={450} className="" />
                    </div>
                </div>
            </main>
            {/* Hero ends here */}
            {/* Use case section starts here */}
            <section className="container space-y-4">
                <div className="flex flex-col justify-center items-center md:items-start space-y-5 text-center md:text-left">
                    <h1 className="text-warning">USE CASE</h1>
                    <p className="text-3xl md:text-4xl  md:text-left font-semibold">Genztechies Logo</p>
                    <p className="md:text-left">Our logo is our most important brand asset. Use of our logo in the right way is crucial in establishing our brand’s identity.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-5 gap-y-5">
                    <div className="p-5 rounded-2xl bg-light w-full h-56 flex justify-center items-center">
                        <Image src={"https://assets.genztechies.com/logo-coloured.svg"} width={100} height={50} />
                    </div>
                    <div className="p-5 rounded-2xl bg-light w-full h-56 flex justify-center items-center">
                        <Image src={"https://assets.genztechies.com/logo-black.svg"} width={100} height={50} />
                    </div>
                    <div className="p-5 rounded-2xl bg-black w-full h-56 flex justify-center items-center">
                        <Image src={"https://assets.genztechies.com/logo-white.svg"} width={100} height={50} />
                    </div>
                </div>
            </section>
            {/* Use case section ends here */}
            {/* Icons section starts here */}
            <section className="container space-y-4 my-10">
                <div className="flex flex-col justify-center items-center md:items-start space-y-5 text-center md:text-left">
                    <h1 className="text-warning uppercase">icons</h1>
                    <p className="text-3xl md:text-4xl  md:text-left font-semibold">Icon Variation</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-5 gap-y-5">
                    <Image src={"https://assets.genztechies.com/icon-white.svg"} height={224} width={300} className="rounded-md" />

                    <Image src={"https://assets.genztechies.com/icon-coloured.svg"} height={224} width={300} className="rounded-2xl" />
                    {/* <IconWhite /> */}

                    {/* <IconBlack /> */}
                    <Image src={"https://assets.genztechies.com/icon-black.svg"} height={224} width={300} className="rounded-2xl" />
                </div>
            </section>
            {/* Icons section ends here */}
            {/* Fonts section starts here */}
            <section className="container space-y-14 my-10">
                <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-5">
                    <h1 className="text-warning uppercase">SORA & RUBIK</h1>
                    <p className="text-3xl md:text-4xl text-primary-dark md:text-left font-semibold">Our Font</p>
                </div>
                <div className="space-y-10">
                    <div className="flex flex-col justify-center items-center md:items-start space-y-5 text-center md:text-left">
                        <h1 className="text-primary-dark text-4xl uppercase md:text-left">Sora</h1>
                        <p className="text-base md:text-left">
                            Sora, meaning sky in Japanese, is a typeface family commissioned for the Sora decentralized autonomous economy focused on empowering projects that benefit society. Soramitsu, the developer of Sora, is a Japanese technology company specializing in blockchain development and well-known for creating the first central bank digital currency.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center md:items-start space-y-5 text-center md:text-left">
                        <h1 className="text-primary-dark text-4xl uppercase md:text-left">Rubik</h1>
                        <p className="text-base md:text-left">
                            Sora, meaning sky in Japanese, is a typeface family commissioned for the Sora decentralized autonomous economy focused on empowering projects that benefit society. Soramitsu, the developer of Sora, is a Japanese technology company specializing in blockchain development and well-known for creating the first central bank digital currency.
                        </p>
                    </div>
                </div>
            </section>
            {/* Fonts section ends here */}
            {/* How to use section starts here */}
            <section className="container my-10">
                <div className="bg-light rounded-2xl w-full px-10 py-20  space-y-10 text-center md:text-left">
                    <h1 className="text-3xl text-primary-dark md:text-left font-bold">Use Of Our Brand Materials</h1>
                    <div className="flex flex-col justify-center items-center md:items-start space-y-2 text-center md:text-left">
                        <h1 className="text-primary-dark text-lg uppercase md:text-left font-bold">IN GENRAL</h1>
                        <p className="text-base md:text-left">
                            {"Please don’t use our name, logos, or screenshots (“brand materials”) in ways that may be confusing, misleading, or suggest our sponsorship, partnership endorsement, or affiliation. For example, your name and logo should be more prominent than GenZtechies name or logo. And please don’t edit or change our logo — we like it how it is!"}
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center md:items-start space-y-2 text-center md:text-left">
                        <h1 className="text-primary-dark text-lg uppercase md:text-left font-bold">ADVERTISING, PROMOTIONAL, AND SALES MATERIALS</h1>
                        <p className="text-base md:text-left">Please check in with us before using our logo on websites, products, packaging, manuals, or for other commercial or product use. Especially if you are a company who has worked with the community or any of our initiatives.</p>
                    </div>
                    <div className="flex flex-col justify-center items-center md:items-start space-y-2 text-center md:text-left">
                        <h1 className="text-primary-dark text-lg uppercase md:text-left font-bold">EDUCATION AND INSTRUCTIONAL USE (BOOKS, GUIDES, PUBLICATIONS, AND CONFERENCES)</h1>
                        <p className="text-base md:text-left">{"You can use our brand materials for educational and instructional purposes, but please remember that it shouldn’t be confusing or misleading, or suggest our sponsorship or partnership. We generally don’t allow use of our logos or screenshots on book covers."}</p>
                        <p className="text-base md:text-left">{"Also remember to include this statement (or something like it) in your printed materials: “(Title) is not affiliated with or otherwise sponsored by GenZtechies”."}</p>
                    </div>
                    <div className="flex flex-col justify-center items-center md:items-start space-y-2 text-center md:text-left">
                        <h1 className="text-primary-dark text-lg uppercase md:text-left font-bold">PRODUCTS, WEBSITES, NAMES AND LOGOS</h1>
                        <p className="text-base md:text-left">{"Please don’t use our name as a part of your company or service name, website name, trade name, or product name. Don’t use our logo or incorporate our logo into yours. Don’t use a domain name containing “GenZtechies” or any confusingly similar words. Our official website domain is genztechies.com."}</p>
                    </div>
                </div>
            </section>
            {/* How to use section ends here */}
        </>
    );
};

export default Brand;
