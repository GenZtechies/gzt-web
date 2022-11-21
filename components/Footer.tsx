import Link from "next/link";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosResponse, AxiosError } from "axios";

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
            <section className="flex flex-col items-center bg-white border-y-4 border-dashed p-5">
                <div className="w-full max-w-6xl py-8">
                    <div className="grid grid-cols-5 gap-10">
                        <Link href="/press" className="p-5 m-auto">
                            <img src="/assets/images/press-logos/1.png" alt="press-logo" data-aos="zoom-in" />
                        </Link>
                        <Link href="/press" className="p-5 m-auto">
                            <img src="/assets/images/press-logos/2.png" alt="press-logo" data-aos="zoom-in" />
                        </Link>
                        <Link href="/press" className="p-5 m-auto">
                            <img src="/assets/images/press-logos/3.png" alt="press-logo" data-aos="zoom-in" />
                        </Link>
                        <Link href="/press" className="p-5 m-auto">
                            <img src="/assets/images/press-logos/1.png" alt="press-logo" data-aos="zoom-in" />
                        </Link>
                        <Link href="/press" className="p-5 m-auto">
                            <img src="/assets/images/press-logos/2.png" alt="press-logo" data-aos="zoom-in" />
                        </Link>
                    </div>
                </div>
            </section>

            <footer className="flex flex-col items-center bg-slate-100 p-5">
                <div className="w-full max-w-6xl py-10">
                    <div className="flex flex-col justify-center items-center rounded-2xl bg-[url('/assets/images/footer-cta-bg.png')] bg-cover bg-center bg-no-repeat px-10 py-32 m-auto">
                        <h2 className="max-w-2xl text-center text-white text-2xl md:text-4xl font-bold my-5">Looking to connect with other Gen Z’s in tech across Africa?</h2>
                        <Link href="https://linktr.ee/genztechies" target="_blank" className="btn btn-wide bg-white hover:bg-primary border-none text-primary hover:text-white animate-bounce">
                            Join The Community
                        </Link>
                    </div>
                </div>

                <div className="w-full max-w-6xl py-10">
                    <div className="flex flex-col md:flex-row justify-between gap-10">
                        <div className="md:w-1/3">
                            <Link href="/" className="my-5">
                                <img className="h-20 aspect-video" src="https://assets.genztechies.com/logo-coloured.svg" alt="genztechies-logo-icon-text" />
                            </Link>
                            <p className="text-black/50 text-base font-light my-5">GenZtechies is a nonprofit community fiscally sponsored by The Hack Foundation Nonprofit EIN: 81-2908499.</p>
                        </div>
                        <div className="flex w-full md:w-1/3 flex-row gap-10">
                            <div className="w-1/2">
                                <h2 className="text-primary text-base uppercase font-bold my-5">Quick Links</h2>

                                <ul className="text-lg font-normal space-y-4 pt-5">
                                    <Link href="/initiatives" className="list-item">
                                        Our Initiatives
                                    </Link>
                                    <Link href="/donate" className="list-item">
                                        Donate
                                    </Link>
                                    <Link href="/store" className="list-item">
                                        Store
                                    </Link>
                                    <Link href="/press" className="list-item">
                                        Press
                                    </Link>
                                    <Link href="/contact" className="list-item">
                                        Contact Us
                                    </Link>
                                </ul>
                            </div>
                            <div className="w-1/2">
                                <h2 className="text-primary text-base uppercase font-bold my-5">CONNECT</h2>

                                <ul className="text-lg font-normal space-y-4 pt-5">
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
                                            {/* <img src="/assets/images/social-icons/facebook.svg" alt="social-icon" /> */}
                                            Facebook
                                        </div>
                                    </Link>
                                    <Link href="https://youtube.com/@genztechies" target="_blank" className="list-item">
                                        <div className="flex gap-2">
                                            {/* <img src="/assets/images/social-icons/youtube.svg" alt="social-icon" /> */}
                                            Youtube
                                        </div>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                        <div className="md:w-1/3">
                            <h2 className="text-primary text-base uppercase font-bold my-5">Subscribe To Our Newsletter</h2>

                            <form className="my-5 space-y-3" id="newsletterForm" onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="email" className="label">
                                        <span className="label-text text-base">Email Address</span>
                                    </label>
                                    <input type="email" name="email" placeholder="genz@mail.com" className="input input-bordered rounded focus:border-primary w-full" required />
                                </div>

                                <button type="submit" disabled={isLoading} className={["btn btn-block rounded bg-primary hover:bg-primary border-none text-white no-animation", isLoading && "loading"].join(" ")}>
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between w-full max-w-6xl border-t-2 pt-10 pb-5 gap-5">
                    <p className="text-black/80">Copyright (c) {new Date().getFullYear()} GenZtechies | All rights reserved.</p>

                    <p className="text-black/50 space-x-4">
                        <Link href="/brand">Brand Guide</Link>
                        <span>|</span>
                        <Link href="/press">The Press</Link>
                    </p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
