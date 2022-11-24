import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const TopNavigationBar = () => {
    const router = useRouter();
    const [isMobileNavExpanded, setIsMobileNavExpanded] = React.useState<boolean>(false);
    const activePage = router.pathname.split("/")[1];

    return (
        <>
            <nav className="flex flex-col items-center p-5 bg-white">
                <div className="m-auto w-full max-w-6xl flex flex-row lg:flex-row flex-wrap justify-between items-center">
                    <div>
                        <Link href="/">
                            <img className="mx-auto h-12 w-auto" src="https://assets.genztechies.com/logo-coloured.svg" alt="genztechies-logo-icon-text" />
                        </Link>
                    </div>

                    <div className="block lg:hidden">
                        <button type="button" onClick={() => setIsMobileNavExpanded(!isMobileNavExpanded)} className="btn btn-circle btn-outline text-primary hover:text-white hover:border-primary border-primary hover:bg-primary">
                            <svg viewBox="0 0 25 19" className="h-6 w-6" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <line x1="0.285645" y1="1.89285" x2="24.2856" y2="1.89285" stroke="currentColor" strokeWidth="2.5" />
                                <line x1="6.28564" y1="9.60715" x2="24.2856" y2="9.60715" stroke="currentColor" strokeWidth="2.5" />
                                <line x1="12.2949" y1="17.3214" x2="24.2949" y2="17.3214" stroke="currentColor" strokeWidth="2.5" />
                            </svg>
                        </button>
                    </div>

                    <div className={["lg:flex flex-col lg:flex-row justify-between my-4 lg:my-0 lg:gap-5", isMobileNavExpanded ? "flex w-full lg:w-auto" : "hidden"].join(" ")}>
                        <Link href="/initiatives" className={["hover:text-primary text-base my-1 p-1 capitalize", activePage === "initiatives" ? "text-primary font-bold" : "text-neutral-900 font-medium"].join(" ")}>
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
                        <Link href="https://blog.genztechies.com" target="_blank" className={["hover:text-primary text-base my-1 p-1 capitalize", activePage === "blog" ? "text-primary font-bold" : "text-neutral-900 font-medium"].join(" ")}>
                            blog
                        </Link>
                        <Link href="/contact" className={["hover:text-primary text-base my-1 p-1 capitalize", activePage === "contact" ? "text-primary font-bold" : "text-neutral-900 font-medium"].join(" ")}>
                            contact us
                        </Link>
                    </div>

                    <div className={["lg:block", isMobileNavExpanded ? "flex w-full lg:w-auto" : "hidden"].join(" ")}>
                        <Link href="https://linktr.ee/genztechies" target="_blank" className="btn btn-wide bg-primary hover:bg-primary border-none text-white">
                            Join the community
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default TopNavigationBar;
