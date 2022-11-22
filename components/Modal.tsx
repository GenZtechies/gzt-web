import React from "react";

const Modal = ({ children, open, onClose }: { children: React.ReactNode; open: Boolean; onClose(): void }) => {
    return (
        <>
            {open ? (
                <div onClick={onClose} className="fixed top-0 left-0 h-screen w-screen flex items-center justify-center bg-black bg-opacity-40">
                    <div onClick={onClose} className="h-screen w-screen flex items-center justify-center container mx-auto">
                        <div onClick={(event) => event.stopPropagation()} className="w-fit h-fit">
                            {children}
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
};

export default Modal;
