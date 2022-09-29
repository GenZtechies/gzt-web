import Image from "next/image";
import React from "react";

import { EventsType } from "../components/Card/Card";
import { Navbar, Card } from "../components";

const events: EventsType[] = [
    {
        image: "/images/hackfest2022.png",
        title: "#GenZHackfest2022",
        subtitle: "Gen Z HackFest is an annual three-day virtual hackathon and a one-day in-person conference aimed to connect Gen Z's in tech on a large scale. It's an event where ambitious Gen Z's come together to put their creative and coding skills to test, build solutions to problems in Africa and showcase what they can do!"
    },
    {
        image: "/images/paystacktour.png",
        title: "#OfficeTourWIthGenZtechies",
        subtitle: "At least once every month, interested members of the community will be selected for an office tour to tech companies across the country. (limited spots). It's all about learning, having fun, and networking. We'll have a tour view of the office and chat with the founders and core team members to learn about the day-to-day processes in the company"
    },
    {
        image: "/images/hackfest2022.png",
        title: "AMA (Ask Me Anything)",
        subtitle: "Gen Z HackFest is an annual three-day virtual hackathon and a one-day in-person conference aimed to connect Gen Z's in tech on a large scale. It's an event where ambitious Gen Z's come together to put their creative and coding skills to test, build solutions to problems in Africa and showcase what they can do!"
    },
    {
        image: "/images/paystacktour.png",
        title: "Gen-Z Meet",
        subtitle: "At least once every month, interested members of the community will be selected for an office tour to tech companies across the country. (limited spots). It's all about learning, having fun, and networking. We'll have a tour view of the office and chat with the founders and core team members to learn about the day-to-day processes in the company"
    }
];

const Initiatives = () => {
    return (
        <>
            {/* Hero starts here */}
            <main className="flex flex-col justify-between items-center h-fit w-screen bg-[url('/images/bg-initiatives.svg')]  bg-cover bg-top ">
                <Navbar />
                <div className="container flex flex-col md:flex-row justify-around md:justify-between w-full h-fit">
                    <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start space-y-4 text-center md:text-left">
                        <h1 className="text-primary md:text-3xl">Events & Initiatives</h1>
                        <p className="text-3xl md:text-5xl md:text-left font-semibold">Projects, events and activities we work on as a community</p>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center items-center">
                        <Image alt="team members" src={"/images/hero-initiatives.svg"} width={400} height={450} className="" />
                    </div>
                </div>
            </main>
            {/* Hero ends here */}
            {/* Event cards starts here */}
            <section className="bg-light py-20">
                <div className="container grid grid-cols-1 lg:grid-cols-3 min-h-screen justify-items-center justify-center gap-12">
                    {events.map((evt: EventsType, index: number) => (
                        <Card key={evt.title} {...evt} />
                    ))}
                </div>
            </section>
            {/* Event cards ends here */}
        </>
    );
};

export default Initiatives;
