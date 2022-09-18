import React from "react";

type QuestionsType = {
    title: string;
    content: string;
};

const Questions: QuestionsType[] = [
    { title: "How can i partner with GenZTechies", content: "Lorem ipsum dolores sti ames just something random i cant remember all the words in lorem ipsum" },
    { title: "What does GenzTechies Do?", content: "Lorem ipsum dolores sti ames just something random i cant remember all the words in lorem ipsum" },
    { title: "What are the perks of being a GenZTechie?", content: "Lorem ipsum dolores sti ames just something random i cant remember all the words in lorem ipsum" },
    { title: "What are the perks of being a GenZTechie?", content: "Lorem ipsum dolores sti ames just something random i cant remember all the words in lorem ipsum" }
];

const PartnershipTab = () => {
    return (
        <div className="w-full space-y-5">
            {Questions.map((question: QuestionsType, index: number) => (
                <div key={index} tabIndex={0} className="bg-light collapse collapse-arrow border border-lighter  rounded-box">
                    <div className="collapse-title text-xl font-medium text-black">{question.title}</div>
                    <div className="collapse-content">
                        <p>{question.content}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PartnershipTab;
