import Link from "next/link";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosResponse, AxiosError } from "axios";

// generate an array for quikc links
const quickLinks = [
    {
        name: "Our Initiatives",
        link: "/initiatives"
    },
    {
        name: "Donate",
        link: "/donate"
    },
    {
        name: "Store",
        link: "/store"
    },
    {
        name: "Press",
        link: "/press"
    },
    {
        name: "Gallery",
        link: "/gallery"
    },
    {
        name: "Contact Us",
        link: "/contact"
    },
    {
        name: "Privacy Policy",
        link: "/privacy-policy.pdf",
        target: "_blank"
    },
    {
        name: "Terms And Conditions",
        link: "/terms-and-conditions.pdf",
        target: "_blank"
    }
];

const Footer = () => {
    const { isLoading, mutate } = useMutation((context: any) => axios.post("/api/subscribe", context), {
        onSuccess: async (response: AxiosResponse) => {
            // Clear form
            (document.getElementById("newsletterForm") as any).reset();

            return toast.success("Email subscribed");
        },
        onError: (error: AxiosError<any>) => {
            // return toast.error(error.response ? error.response.data.error : error.message);
            return toast.error("An error occured, please try again.");
        }
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const formDataToJSON = Object.fromEntries(formData);

        mutate(formDataToJSON);
    };

    return (
        <>
            <section className="flex flex-col items-center p-5 bg-white border-dashed border-y-4">
                <div className="w-full max-w-6xl py-8">
                    <div className="grid grid-cols-3 gap-10 md:grid-cols-5">
                        <Link href="/press" className="m-auto">
                            <img src="/assets/images/press-logos/1.png" alt="press-logo" data-aos="zoom-in" />
                        </Link>
                        <Link href="/press" className="m-auto">
                            <img src="/assets/images/press-logos/2.png" alt="press-logo" data-aos="zoom-in" />
                        </Link>
                        <Link href="/press" className="m-auto">
                            <img src="/assets/images/press-logos/3.png" alt="press-logo" data-aos="zoom-in" />
                        </Link>
                        <Link href="/press" className="hidden m-auto md:block">
                            <img src="/assets/images/press-logos/1.png" alt="press-logo" data-aos="zoom-in" />
                        </Link>
                        <Link href="/press" className="hidden m-auto md:block">
                            <img src="/assets/images/press-logos/2.png" alt="press-logo" data-aos="zoom-in" />
                        </Link>
                    </div>
                </div>
            </section>

            <footer className="flex flex-col items-center p-5 bg-slate-100">
                <div className="w-full max-w-6xl py-10">
                    <div className="flex flex-col justify-center items-center rounded-2xl bg-[url('/assets/images/footer-cta-bg.png')] bg-cover bg-center bg-no-repeat px-10 py-32 m-auto">
                        <h2 className="max-w-2xl my-5 text-2xl font-bold text-center text-white md:text-4xl">Looking to connect with other Gen-Zs in tech across Africa?</h2>
                        <Link href="https://linktr.ee/genztechies" target="_blank" className="bg-white border-none btn btn-wide hover:bg-primary text-primary hover:text-white animate-bounce">
                            Join the Community
                        </Link>
                    </div>
                </div>

                <div className="w-full max-w-6xl py-10">
                    <div className="flex flex-col justify-between gap-10 md:flex-row">
                        <div className="md:w-1/3">
                            <Link href="/" className="my-5">
                                <img className="h-20 aspect-video" src="https://assets.genztechies.com/logo-coloured.svg" alt="genztechies-logo-icon-text" />
                            </Link>
                            <p className="my-5 text-base font-light text-black/50">GenZtechies is a nonprofit community fiscally sponsored by The Hack Foundation Nonprofit EIN: 81-2908499.</p>
                        </div>
                        <div className="flex flex-row w-full gap-10 md:w-1/3">
                            <div className="w-1/2">
                                <h2 className="my-5 text-base font-bold uppercase text-primary">Quick Links</h2>

                                <ul className="pt-5 space-y-4 text-lg font-normal">
                                    {quickLinks.map((link, index) => (
                                        <Link href={link.link} className="list-item" target={link.target || "_self"}>
                                            {link.name}
                                        </Link>
                                    ))}
                                </ul>
                            </div>
                            <div className="w-1/2">
                                <h2 className="my-5 text-base font-bold uppercase text-primary">CONNECT</h2>

                                <ul className="pt-5 space-y-4 text-lg font-normal">
                                    <Link href="https://twitter.com/genztechies" target="_blank" className="list-item">
                                        <div className="flex gap-2">
                                            <img src="/assets/images/social-icons/twitter.svg" alt="social-icon" />
                                            Twitter
                                        </div>
                                    </Link>
                                    <Link href="https://www.instagram.com/genztechies/" target="_blank" className="list-item">
                                        <div className="flex gap-2">
                                            <img src="/assets/images/social-icons/instagram.svg" alt="social-icon" />
                                            Instagram
                                        </div>
                                    </Link>
                                    <Link href="https://www.linkedin.com/company/genztechies/" target="_blank" className="list-item">
                                        <div className="flex gap-2">
                                            <img src="/assets/images/social-icons/linkedin.svg" alt="social-icon" />
                                            Linkedin
                                        </div>
                                    </Link>
                                    <Link href="https://linktr.ee/genztechies" target="_blank" className="list-item">
                                        <div className="flex gap-2">
                                            <img src="/assets/images/social-icons/slack.svg" alt="social-icon" />
                                            Slack
                                        </div>
                                    </Link>
                                    <Link href="https://www.facebook.com/genztechies" target="_blank" className="list-item">
                                        <div className="flex gap-2">
                                            <img src="/assets/images/social-icons/facebook.svg" alt="social-icon" />
                                            Facebook
                                        </div>
                                    </Link>
                                    <Link href="https://youtube.com/@genztechies" target="_blank" className="list-item">
                                        <div className="flex gap-2">
                                            <img src="/assets/images/social-icons/youtube.svg" alt="social-icon" />
                                            Youtube
                                        </div>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                        <div className="md:w-1/3">
                            <h2 className="my-5 text-base font-bold uppercase text-primary">Subscribe To Our Newsletter</h2>

                            <form className="my-5 space-y-3" id="newsletterForm" onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="email" className="label">
                                        <span className="text-base label-text">Email Address</span>
                                    </label>
                                    <input type="email" name="email" placeholder="genz@mail.com" className="w-full rounded input input-bordered focus:border-primary" required />
                                </div>

                                <button type="submit" disabled={isLoading} className={["btn btn-block rounded bg-primary hover:bg-primary border-none text-white no-animation", isLoading && "loading"].join(" ")}>
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-between w-full max-w-6xl gap-5 pt-10 pb-5 border-t-2 md:flex-row">
                    <p className="text-black/80">Copyright (c) {new Date().getFullYear()} GenZtechies | All rights reserved.</p>

                    <p className="space-x-4 text-black/50">
                        <Link href="/brand">Brand Guidelines</Link>
                        <span>|</span>
                        <Link href="/press">Press Features</Link>
                    </p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
