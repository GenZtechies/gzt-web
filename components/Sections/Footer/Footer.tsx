import Link from "next/link";
import React from "react";
import Logo from "../../../icons/Logo";
import TextField from "../../TextField";
import { NavLinks, NavLinksType } from "../Navbar/Navbar";

const Footer = () => {
    return (
        <footer className="container py-4 space-y-10">
            <div className="flex flex-col space-y-10 md:flex-row md:space-y-0 justify-between border-b border-gray-200 pb-10">
                <div className="space-y-10 w-full md:w-1/4">
                    <Logo />
                    <h1 className="text-gray-500">Genz Techies is nonprofit. Registered as a 501(c)(3) charitable organisation under U.S. federal law (c)</h1>
                </div>
                <div className="space-y-10">
                    <h1 className="font-bold text-primary text-lg uppercase">quick links</h1>
                    <ul className="space-y-5">
                        {NavLinks.map((link: NavLinksType, index: number) => (
                            <li key={link.title}>
                                <Link href={link.url}>
                                    <a>{link.title}</a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="space-y-10">
                    <h1 className="font-bold text-primary text-lg uppercase">Connect</h1>
                    <div className="flex flex-col space-y-5">
                        <Link href="#">
                            <a className="text-primary gap-2 flex items-center">
                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.3571 1.64258H5.49998C3.33029 1.64258 1.57141 3.40146 1.57141 5.57115V13.4283C1.57141 15.598 3.33029 17.3569 5.49998 17.3569H13.3571C15.5268 17.3569 17.2857 15.598 17.2857 13.4283V5.57115C17.2857 3.40146 15.5268 1.64258 13.3571 1.64258Z" fill="#5D5CD6" stroke="#EFEFFB" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path
                                        d="M12.6803 9.18186C12.7773 9.83576 12.6656 10.5036 12.3611 11.0904C12.0567 11.6771 11.5749 12.153 10.9844 12.4502C10.394 12.7474 9.72481 12.8508 9.07214 12.7458C8.41948 12.6408 7.81655 12.3326 7.34911 11.8652C6.88168 11.3978 6.57353 10.7948 6.46851 10.1422C6.36349 9.4895 6.46693 8.82034 6.76414 8.22986C7.06134 7.63938 7.53717 7.15765 8.12394 6.85319C8.71071 6.54872 9.37855 6.43703 10.0325 6.534C10.6995 6.63291 11.317 6.94372 11.7938 7.42052C12.2706 7.89733 12.5814 8.51484 12.6803 9.18186Z"
                                        fill="#5D5CD6"
                                        stroke="#EFEFFB"
                                        strokeWidth="1.2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path d="M13.75 5.17871H13.7579" stroke="#EFEFFB" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                                <span>Instagram</span>
                            </a>
                        </Link>
                        <Link href="#">
                            <a className="text-primary gap-2 flex items-center">
                                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M18.6429 0.928799C17.8905 1.45953 17.0574 1.86546 16.1758 2.13094C15.7025 1.58684 15.0737 1.2012 14.3741 1.02617C13.6746 0.85114 12.9382 0.895167 12.2645 1.1523C11.5908 1.40943 11.0124 1.86726 10.6074 2.46386C10.2024 3.06047 9.99037 3.76706 10 4.48809V5.2738C8.61925 5.3096 7.25104 5.00337 6.01726 4.38236C4.78348 3.76136 3.72243 2.84487 2.92861 1.71451C2.92861 1.71451 -0.214251 8.78594 6.85718 11.9288C5.23902 13.0272 3.31137 13.578 1.35718 13.5002C8.42861 17.4288 17.0715 13.5002 17.0715 4.46451C17.0707 4.24566 17.0497 4.02734 17.0086 3.81237C17.8105 3.02154 18.3764 2.02307 18.6429 0.928799Z"
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <span>Twitter</span>
                            </a>
                        </Link>
                        <Link href="#">
                            <a className="text-primary gap-2 flex items-center">
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_302_377)">
                                        <path
                                            d="M0 1.646C0 1.013 0.526 0.5 1.175 0.5H14.825C15.474 0.5 16 1.013 16 1.646V15.354C16 15.987 15.474 16.5 14.825 16.5H1.175C0.526 16.5 0 15.987 0 15.354V1.646ZM4.943 13.894V6.669H2.542V13.894H4.943ZM3.743 5.682C4.58 5.682 5.101 5.128 5.101 4.434C5.086 3.725 4.581 3.186 3.759 3.186C2.937 3.186 2.4 3.726 2.4 4.434C2.4 5.128 2.921 5.682 3.727 5.682H3.743V5.682ZM8.651 13.894V9.859C8.651 9.643 8.667 9.427 8.731 9.273C8.904 8.842 9.299 8.395 9.963 8.395C10.832 8.395 11.179 9.057 11.179 10.029V13.894H13.58V9.75C13.58 7.53 12.396 6.498 10.816 6.498C9.542 6.498 8.971 7.198 8.651 7.691V7.716H8.635C8.64031 7.70765 8.64564 7.69932 8.651 7.691V6.669H6.251C6.281 7.347 6.251 13.894 6.251 13.894H8.651Z"
                                            fill="#5D5CD6"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_302_377">
                                            <rect width="16" height="16" fill="white" transform="translate(0 0.5)" />
                                        </clipPath>
                                    </defs>
                                </svg>

                                <span>LinkedIn</span>
                            </a>
                        </Link>
                    </div>
                </div>

                <div className="space-y-10 w-full md:w-2/5">
                    <h1 className="font-bold text-primary text-xl uppercase">Subscribe to our Newsletter</h1>
                    <div className="flex items-end justify-between space-x-3 w-full">
                        <TextField label="Email Address" name="email" type="email" placeholder="johndoe@mail.com" containerClass="flex-grow" />
                        <button className="btn bg-primary hover:opacity-80 hover:bg-primary text-white border-none">Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <p className="text-gray-500">GenzTechies | All Rights Reserved — @{new Date().getFullYear()}</p>
                <p className="text-gray-500">Brand Guide | The Press </p>
            </div>
        </footer>
    );
};

export default Footer;
