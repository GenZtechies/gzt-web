import React from "react";

const Engagements = () => {
    return (
        <section className="flex flex-col md:flex-row justify-between space-y-10 md:space-y-0">
            <div className="flex items-start space-x-4">
                <img src="/images/events.png" alt="events" className="w-20  " />
                <div>
                    <h1 className="text-xl font-bold">Events and Partnerships</h1>
                    <p className="text-gray-400 text-sm">A website that brings together teen developers and innovators from around Nigeria in one place.</p>
                </div>
            </div>
            <div className="flex items-start space-x-4">
                <img src="/images/hackathon.png" alt="events" className="w-20 " />
                <div>
                    <h1 className="text-xl font-bold">Hackathons</h1>
                    <p className="text-gray-400 text-sm">A website that brings together teen developers and innovators from around Nigeria in one place.</p>
                </div>
            </div>
            <div className="flex items-start space-x-4">
                <img src="/images/hangouts.png" alt="events" className="w-20 " />
                <div>
                    <h1 className="text-xl font-bold">Hangouts and Fun</h1>
                    <p className="text-gray-400 text-sm">A website that brings together teen developers and innovators from around Nigeria in one place.</p>
                </div>
            </div>
        </section>
    );
};

export default Engagements;
