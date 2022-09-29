import Image from "next/image";
import React from "react";

export type EventsType = {
    image: string;
    title: string;
    subtitle: string;
};

const Card = ({ title, image, subtitle }: EventsType) => {
    return (
        <div className="w-full flex flex-col items-center space-y-4">
            <div className="relative h-96 w-full  overflow-hidden rounded-3xl">
                <Image src={image} layout="fill" className="object-cover" alt="Hackfest 2022" />
                <div className="absolute bottom-0 left-0 p-5 flex items-center space-x-3 w-full overflow-hidden">
                    <button className="btn btn-circle btn-ghost">
                        <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20" cy="20.5" r="20" fill="white" />
                            <path d="M14.4587 12.7775C14.4356 12.0081 15.2542 11.5021 15.9321 11.8669L29.1514 18.979C29.8293 19.3438 29.8582 20.3056 29.2033 20.7103L16.4344 28.6025C15.7795 29.0072 14.9321 28.5513 14.9091 27.7819L14.4587 12.7775Z" fill="#11113E" />
                        </svg>
                    </button>
                    <div className="w-full">
                        <h1 className="text-white text-xl truncate w-4/5">{title}</h1>
                        <p className="text-gray-400 w-4/5 truncate">{subtitle}</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-start w-full  md:p-1">
                <h1 className="text-xl text-black font-semibold cursor-pointer">{title}</h1>
                <p className="text-justify text-sm">{subtitle}</p>
            </div>
        </div>
    );
};

export default Card;
