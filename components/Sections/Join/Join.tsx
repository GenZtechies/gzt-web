import React from "react";

const Join = () => {
    return (
        <section className="min-h-fit py-10 my-10 bg-slate-100 ">
            <div className="container">
                <div className="bg-[url('/images/bg-join.png')] bg-cover bg-center h-fit  rounded-2xl flex flex-col justify-between items-center">
                    <div className="flex flex-col items-center justify-around p-10 space-y-5 mx-auto md:w-8/12">
                        <h1 className="text-2xl md:text-4xl text-white text-center font-semibold">
                            Are you a <span className="text-secondary">teen techie</span> looking to meet other <span className="text-secondary">techies</span> across the continent?
                        </h1>
                        <p className="text-white text-center">Join Us In Our Community</p>
                        <button className="btn bg-white text-primary hover:text-white hover:bg-primary border-none">Join The Community</button>
                    </div>
                    <div>
                        <img src="/images/fist.png" alt="" className="w-48 " />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Join;
