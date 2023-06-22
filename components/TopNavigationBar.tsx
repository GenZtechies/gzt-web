import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const links = [
    {
        name: "our initiatives",
        href: "/initiatives"
    },
    {
        name: "donate",
        href: "/donate"
    },
    {
        name: "store",
        href: "/store"
    },
    {
        name: "press",
        href: "/press"
    },
    {
        name: "gallery",
        href: "/gallery"
    },
    {
        href: "https://blog.genztechies.com",
        name: "blog",
        target: "_blank"
    },
    {
        name: "contact us",
        href: "/contact"
    }
];

const TopNavigationBar = () => {
    const router = useRouter();
    const [isMobileNavExpanded, setIsMobileNavExpanded] = React.useState<boolean>(false);

    return (
        <>
            <nav className="flex flex-col items-center p-5 bg-white">
                <div className="flex flex-row flex-wrap items-center justify-between w-full max-w-6xl m-auto lg:flex-row">
                    <div>
                        <Link href="/">
                            <img className="w-auto h-12 mx-auto" src="https://assets.genztechies.com/logo-coloured.svg" alt="genztechies-logo-icon-text" />
                        </Link>
                    </div>

                    <div className="block lg:hidden">
                        <button type="button" onClick={() => setIsMobileNavExpanded(!isMobileNavExpanded)} className="btn btn-circle btn-outline text-primary hover:text-white hover:border-primary border-primary hover:bg-primary">
                            <svg viewBox="0 0 25 19" className="w-6 h-6" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <line x1="0.285645" y1="1.89285" x2="24.2856" y2="1.89285" stroke="currentColor" strokeWidth="2.5" />
                                <line x1="6.28564" y1="9.60715" x2="24.2856" y2="9.60715" stroke="currentColor" strokeWidth="2.5" />
                                <line x1="12.2949" y1="17.3214" x2="24.2949" y2="17.3214" stroke="currentColor" strokeWidth="2.5" />
                            </svg>
                        </button>
                    </div>
                    <div className={["lg:flex flex-col lg:flex-row justify-between my-4 lg:my-0 lg:gap-5 transition-all duration-500 ease-in", isMobileNavExpanded ? "flex w-full lg:w-auto" : "hidden"].join(" ")}>
                        {links.map((link) => (
                            <Link href={link.href} target={link?.target || "_self"} className={["hover:text-primary text-base my-1 p-1 capitalize transition-all duration-300 ease-in font-semibold", router.pathname === link.href ? "text-primary font-bold" : "text-slate-600"].join(" ")}>
                                {link.name}
                            </Link>
                        ))}
                        {/* <Link href="/initiatives" className={["hover:text-primary text-base my-1 p-1 capitalize", activePage === "initiatives" ? "text-primary font-bold" : "text-neutral-900 font-medium"].join(" ")}>
                            our initiatives
                        </Link>
                        <Link href="/donate" className={["hover:text-primary text-base my-1 p-1 capitalize", activePage === "donate" ? "text-primary font-bold" : "text-neutral-900 font-medium"].join(" ")}>
                            donate
                        </Link>
                        <Link href="/store" className={["hover:text-primary text-base my-1 p-1 capitalize", activePage === "store" ? "text-primary font-bold" : "text-neutral-900 font-medium"].join(" ")}>
                            store
                        </Link>
                        <Link href="/press" className={["hover:text-primary text-base my-1 p-1 capitalize", activePage === "press" ? "text-primary font-bold" : "text-neutral-900 font-medium"].join(" ")}>
                            press
                        </Link>
                        <Link href="/gallery" className={["hover:text-primary text-base my-1 p-1 capitalize", activePage === "gallery" ? "text-primary font-bold" : "text-neutral-900 font-medium"].join(" ")}>
                            gallery
                        </Link>
                        <Link href="https://blog.genztechies.com" target="_blank" className={["hover:text-primary text-base my-1 p-1 capitalize", activePage === "blog" ? "text-primary font-bold" : "text-neutral-900 font-medium"].join(" ")}>
                            blog
                        </Link>
                        <Link href="/contact" className={["hover:text-primary text-base my-1 p-1 capitalize", activePage === "contact" ? "text-primary font-bold" : "text-neutral-900 font-medium"].join(" ")}>
                            contact us
                        </Link> */}
                    </div>

                    <div className={["lg:block", isMobileNavExpanded ? "flex w-full lg:w-auto" : "hidden"].join(" ")}>
                        <Link href="https://apply.genztechies.com" target="_blank" className="text-white border-none btn btn-wide bg-primary hover:bg-primary">
                            Join the Community
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default TopNavigationBar;
