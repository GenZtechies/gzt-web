import * as React from "react";

export interface TextFieldTypes extends React.HTMLProps<HTMLInputElement> {
    containerClass?: string;
    label?: string | React.ReactNode | any;
}

const TextField = ({ containerClass, className, label, ...props }: TextFieldTypes) => {
    return (
        <div className={`form-control w-full ${containerClass}`}>
            {label && (
                <label className="label">
                    <span className="label-text">{label}</span>
                </label>
            )}
            <input {...props} className={`input input-bordered w-full  focus-within:outline-none focus:outline-none ${className}`} />
        </div>
    );
};

export default TextField;
