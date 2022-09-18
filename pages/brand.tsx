import Image from "next/image";
import React from "react";

import Navbar from "../components/Sections/Navbar";
import IconBlack from "../icons/IconBlack";
import IconColored from "../icons/IconColored";
import IconWhite from "../icons/IconWhite";
import Logo from "../icons/Logo";

const Brand = () => {
    return (
        <>
            {/* Hero starts here */}
            <main className="flex flex-col justify-between items-center min-h-screen w-screen bg-[url('/images/bg-initiatives.svg')]  bg-cover bg-top ">
                <Navbar />
                <div className="container flex flex-col md:flex-row justify-around md:justify-between w-full min-h-[90vh]">
                    <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start space-y-4 text-center md:text-left">
                        <h1 className="text-warning">BRAND GUIDELINES</h1>
                        <p className="text-3xl md:text-4xl  md:text-left">How GenZtechies brand should be represented</p>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center items-center">
                        <Image alt="team members" src={"/images/hero-brand.svg"} width={500} height={550} className="" />
                    </div>
                </div>
            </main>
            {/* Hero ends here */}
            {/* Use case section starts here */}
            <section className="container space-y-4">
                <div className="flex flex-col justify-center items-center md:items-start space-y-2 text-center md:text-left">
                    <h1 className="text-warning">USE CASE</h1>
                    <p className="text-3xl md:text-4xl  md:text-left font-semibold">Genztechies Logo</p>
                    <p className="md:text-left">Our logo is our most important brand asset. Use of our logo in the right way is crucial in establishing our brand’s identity.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-5 gap-y-5">
                    {[1, 2, 3].map((n: number, i: number) => (
                        <div key={n} className="p-5 rounded-2xl bg-light w-full h-56 flex justify-center items-center">
                            <Logo />
                        </div>
                    ))}
                </div>
            </section>
            {/* Use case section ends here */}
            {/* Icons section starts here */}
            <section className="container space-y-4 my-10">
                <div className="flex flex-col justify-center items-center md:items-start space-y-2 text-center md:text-left">
                    <h1 className="text-warning uppercase">icons</h1>
                    <p className="text-3xl md:text-4xl  md:text-left font-semibold">Icon Variation</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-5 gap-y-5">
                    <div className="p-5 rounded-2xl bg-light w-full h-56 flex justify-center items-center">
                        <IconColored />
                    </div>
                    <div className="p-5 rounded-2xl bg-primary-dark w-full h-56 flex justify-center items-center">
                        <IconWhite />
                    </div>
                    <div className="p-5 rounded-2xl bg-light w-full h-56 flex justify-center items-center">
                        <IconBlack />
                    </div>
                </div>
            </section>
            {/* Icons section ends here */}
            {/* Fonts section starts here */}
            <section className="container space-y-4 my-10">
                <div className="flex flex-col justify-center items-center md:items-start space-y-2 text-center md:text-left">
                    <h1 className="text-warning uppercase">SORA & RUBIK</h1>
                    <p className="text-3xl md:text-4xl text-primary-dark md:text-left font-semibold">Our Font</p>
                </div>
                <div className="space-y-10">
                    <div className="flex flex-col justify-center items-center md:items-start space-y-2 text-center md:text-left">
                        <h1 className="text-primary-dark text-4xl uppercase md:text-left">Sora</h1>
                        <p className="text-base md:text-left">
                            Sora, meaning sky in Japanese, is a typeface family commissioned for the Sora decentralized autonomous economy focused on empowering projects that benefit society. Soramitsu, the developer of Sora, is a Japanese technology company specializing in blockchain development and well-known for creating the first central bank digital currency.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center md:items-start space-y-2 text-center md:text-left">
                        <h1 className="text-primary-dark text-4xl uppercase md:text-left">Rubik</h1>
                        <p className="text-base md:text-left">
                            Sora, meaning sky in Japanese, is a typeface family commissioned for the Sora decentralized autonomous economy focused on empowering projects that benefit society. Soramitsu, the developer of Sora, is a Japanese technology company specializing in blockchain development and well-known for creating the first central bank digital currency.
                        </p>
                    </div>
                </div>
            </section>
            {/* Fonts section ends here */}
            {/* How to use section starts here */}
            <section className="container space-y-4 my-10">
                <div className="bg-light rounded-2xl w-full p-10 space-y-5 text-center md:text-left">
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
