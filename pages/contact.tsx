import Image from "next/image";
import React from "react";
import Card from "../components/Card";

import Navbar from "../components/Sections/Navbar";
import TextField from "../components/TextField";

const Contact = () => {
    return (
        <>
            {/* Hero starts here */}
            <main className="flex flex-col justify-between items-center min-h-screen w-screen bg-[url('/images/bg-initiatives.svg')]  bg-cover bg-top ">
                <Navbar />
                <div className="container flex flex-col md:flex-row justify-around md:justify-between w-full min-h-[90vh]">
                    <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start space-y-4">
                        <h1 className="text-primary">Get In Touch</h1>
                        <p className="block md:hidden text-3xl  text-center  font-semibold">Any question or remark just write us a message</p>
                        <p className="hidden md:block text-5xl  font-semibold">Any question or remark just write us a message</p>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center items-center">
                        <Image alt="team members" src={"/images/hero-contact.svg"} width={500} height={550} className="" />
                    </div>
                </div>
            </main>
            {/* Hero ends here */}
            {/* Form  starts here */}
            <section className="bg-light py-10">
                <div className="container grid grid-cols-1 lg:grid-cols-3 min-h-screen justify-between items-start gap-8">
                    <div className="col-span-2">
                        <h1 className="text-3xl">Send a Message.</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                            <TextField name="firstName" label="First Name" placeholder="First Name" containerClass="col-span-2 md:col-span-1" />
                            <TextField name="lastName" label="Last Name" placeholder="Last Name" containerClass="col-span-2 md:col-span-1" />
                            <TextField name="email" type="email" label="Email" placeholder="Email" containerClass="col-span-2 md:col-span-1" />
                            <TextField name="phone" type="number" label="Phone" placeholder="Phone" containerClass="col-span-2 md:col-span-1" />
                            <TextField name="subject" label="Subject" placeholder="Subject" containerClass="col-span-2" />
                            <div className="form-control col-span-2 ">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <textarea className="textarea textarea-bordered h-32 focus:outline-none" placeholder="Message"></textarea>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="p-5 h-full bg-primary rounded-xl max-h-xs"></div>
                    </div>
                </div>
            </section>
            {/* Form  ends here */}
        </>
    );
};

export default Contact;
