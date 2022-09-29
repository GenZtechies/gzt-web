import Image from "next/image";
import React from "react";

import { Navbar, PressCard } from "../components";
import { PressCardType } from "../components/PressCard/PressCard";

const events: PressCardType[] = [
    {
        image: "/images/hackfest2022.png",
        title: "What is GenZTechies all about?",
        subtitle: "We are a Community that connects teen techies accross Nigeria in one place to share opportunites, work on awesome projects and foster quality connections.",
        tags: ["techcabal"],
        date: new Date().toDateString()
    },
    {
        image: "/images/paystacktour.png",
        title: "Blockchain Technology at Gen Z HackFest ",
        subtitle: "We are a Community that connects teen techies accross Nigeria in one place to share opportunites, work on awesome projects and foster quality connections.",
        tags: ["blockbuild"],
        date: new Date().toDateString()
    },
    {
        image: "/images/hackfest2022.png",
        title: "AMA (Ask Me Anything)",
        subtitle: "Gen Z HackFest is an annual three-day virtual hackathon and a one-day in-person conference aimed to connect Gen Z's in tech on a large scale. It's an event where ambitious Gen Z's come together to put their creative and coding skills to test, build solutions to problems in Africa and showcase what they can do!",
        tags: ["techcabal"],
        date: new Date().toDateString()
    },
    {
        image: "/images/paystacktour.png",
        title: "Gen-Z Meet",
        subtitle: "At least once every month, interested members of the community will be selected for an office tour to tech companies across the country. (limited spots). It's all about learning, having fun, and networking. We'll have a tour view of the office and chat with the founders and core team members to learn about the day-to-day processes in the company",
        tags: ["blockbuild"],
        date: new Date().toDateString()
    }
];

const Press = () => {
    return (
        <>
            {/* Hero starts here */}
            <main className="flex flex-col justify-between items-center h-fit w-screen bg-[url('/images/bg-initiatives.svg')]  bg-cover bg-top ">
                <Navbar />
                <div className="container flex flex-col md:flex-row justify-around md:justify-between w-full">
                    <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start space-y-4 text-center md:text-left">
                        <h1 className="text-primary md:text-xl">Press and Media</h1>
                        <p className="text-3xl md:text-6xl md:text-left font-semibold">Catch the latest buzz from GenZtechies</p>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center items-center">
                        <Image alt="team members" src={"/images/hero-press.svg"} width={400} height={450} className="" />
                    </div>
                </div>
            </main>
            {/* Hero ends here */}
            {/* Event cards starts here */}
            <section className="bg-light py-10">
                <div className="container grid grid-cols-1 lg:grid-cols-3 min-h-screen justify-items-center justify-center gap-8">
                    {events.map((evt: PressCardType, index: number) => (
                        <PressCard key={evt.title} {...evt} />
                    ))}
                </div>
            </section>
            {/* Event cards ends here */}
        </>
    );
};

export default Press;
