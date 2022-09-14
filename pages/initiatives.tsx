import Image from "next/image";
import React from "react";
import Card from "../components/Card";
import { EventsType } from "../components/Card/Card";
import Navbar from "../components/Sections/Navbar";

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
            {/* Hero ends here */}
            {/* Event cards starts here */}
            <section className="bg-light py-10">
                <div className="container grid grid-cols-1 lg:grid-cols-2 min-h-screen justify-items-center justify-center gap-8">
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
