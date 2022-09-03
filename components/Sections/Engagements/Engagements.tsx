import React from "react";

const Engagements = ({ className, contentClassName }: { className?: string; contentClassName?: string }) => {
    return (
        <section className={`flex flex-col md:flex-row justify-between space-y-10 md:space-y-0 w-full ${className}`}>
            <div className={`flex items-start space-x-4 ${contentClassName}`}>
                <img src="/images/events.png" alt="events" className="w-20 drop-shadow-2xl shadow-primary" />
                <div>
                    <h1 className="text-xl font-bold">Events and Partnerships</h1>
                    <p className="text-gray-400 text-sm">A website that brings together teen developers and innovators from around Nigeria in one place.</p>
                </div>
            </div>
            <div className={`flex items-start space-x-4 ${contentClassName}`}>
                <img src="/images/hackathon.png" alt="events" className="w-20 drop-shadow-2xl shadow-secondary" />
                <div>
                    <h1 className="text-xl font-bold">Hackathons</h1>
                    <p className="text-gray-400 text-sm">A website that brings together teen developers and innovators from around Nigeria in one place.</p>
                </div>
            </div>
            <div className={`flex items-start space-x-4 ${contentClassName}`}>
                <img src="/images/hangouts.png" alt="events" className="w-20 drop-shadow-2xl shadow-tertiary" />
                <div>
                    <h1 className="text-xl font-bold">Hangouts and Fun</h1>
                    <p className="text-gray-400 text-sm">A website that brings together teen developers and innovators from around Nigeria in one place.</p>
                </div>
            </div>
        </section>
    );
};

export default Engagements;
