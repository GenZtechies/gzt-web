import Image from "next/image";
import React from "react";

export type PressCardType = {
    image: string;
    title: string;
    subtitle: string;
    tags?: string[];
    date?: string;
};

const PressCard = ({ title, image, subtitle, tags, date }: PressCardType) => {
    return (
        <div className="w-full flex flex-col items-center space-y-4">
            <div className="relative h-64 w-full  overflow-hidden rounded-sm">
                <Image src={image} layout="fill" className="object-cover" alt="Hackfest 2022" />
            </div>
            <div className="flex items-center justify-between w-full ">
                <div className="flex items-center space-x-1">
                    {tags?.map((tag: string, index: number) => (
                        <button key={tag} className="capitalize bg-primary-light px-2 py-1 rounded-md text-primary text-sm">
                            {tag}
                        </button>
                    ))}
                </div>
                <span className="text-primary">{date}</span>
            </div>
            <div className="flex flex-col items-start w-full  md:p-1">
                <h1 className="text-xl text-black font-semibold cursor-pointer">{title}</h1>
                <p className="text-justify text-sm">{subtitle}</p>
            </div>
        </div>
    );
};

export default PressCard;
