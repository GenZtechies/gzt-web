import React from "react";

type FaqAccordionType = {
    question: string;
    answer: string;
};

const FaqAccordion = ({ question, answer }: FaqAccordionType) => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);

    return (
        <div className="flex flex-col rounded-2xl border border-primary  bg-neutral-50 p-5 my-3" data-aos="zoom-in">
            <div className="flex flex-row items-center justify-between cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                <h5 className="text-left text-xl font-normal text-neutral-900">{question}</h5>
                <span className="min-w-max px-2">
                    {isOpen ? (
                        <button className="btn btn-outline bg-primary text-white hover:text-white hover:border-primary border-primary hover:bg-primary">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.07992 15.05L10.5999 8.53005C11.3699 7.76005 12.6299 7.76005 13.3999 8.53005L19.9199 15.05" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    ) : (
                        <button className="btn btn-outline text-primary hover:text-primary hover:border-primary border-primary hover:bg-white">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.9201 8.94995L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.94995" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    )}
                </span>
            </div>

            <p className={["mt-5 border-t border-neutral-300 pt-5 text-neutral-900", !isOpen && "hidden"].join(" ")}>{answer}</p>
        </div>
    );
};

export default FaqAccordion;
