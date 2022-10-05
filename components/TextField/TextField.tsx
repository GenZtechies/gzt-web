import * as React from "react";

export type TextFieldTypes = {
    label?: string | React.ReactNode;
    placeholder?: string;
    type?: "text" | "number" | "email";
    name: string;
    containerClass?: string;
    className?: string;
};

const TextField = ({ label, placeholder, type = "text", containerClass, className, ...props }: TextFieldTypes) => {
    return (
        <div className={`form-control w-full ${containerClass}`}>
            {label && (
                <label className="label">
                    <span className="label-text">{label}</span>
                </label>
            )}
            <input {...props} type={type} placeholder={placeholder} className={`input input-bordered w-full  focus-within:outline-none focus:outline-none ${className}`} />
        </div>
    );
};

export default TextField;
