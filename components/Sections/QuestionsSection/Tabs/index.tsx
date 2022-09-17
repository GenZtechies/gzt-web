import { useRouter } from "next/router";
import React from "react";
import GenZTechiesTab from "./GenZTechiesTab";

type SectionsType = {
    title: string;
    query: string;
};

const sections: SectionsType[] = [
    {
        title: "GenZTechies",
        query: "genztechies"
    },
    {
        title: "Partnership",
        query: "partnership"
    },
    {
        title: "Sponsorship",
        query: "sponsorship"
    }
];

const TabsIndex = () => {
    const router = useRouter();

    const currentTab = React.useMemo(() => router.query.tab || sections[0].query, [router.query]);

    const handleChange = (tab: string) => {
        router.push(
            {
                query: { ...router.query, tab },
                pathname: router.pathname
            },
            {
                query: { ...router.query, tab },
                pathname: router.pathname
            },
            {
                scroll: false
            }
        );
    };

    return (
        <div className="space-y-5">
            <div className="tabs border-b space-x-5">
                {sections.map((section: SectionsType, index: number) => (
                    <a onClick={() => handleChange(section.query)} key={section.query} className={`tab p-[2px]  ${section.query === currentTab ? "text-primary border-b-4 border-primary" : "text-black"}`}>
                        {section.title}
                    </a>
                ))}
            </div>
            <GenZTechiesTab />
        </div>
    );
};

export default TabsIndex;
