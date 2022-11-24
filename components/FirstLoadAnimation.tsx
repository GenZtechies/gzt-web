import React from "react";

interface FirstLoadAnimationProp {
    timeout: number;
}

const FirstLoadAnimation = ({ timeout }: FirstLoadAnimationProp) => {
    const [show, SetShow] = React.useState<boolean>(true);

    React.useEffect(() => {
        setTimeout(() => SetShow(false), timeout);
    }, []);

    return (
        <>
            {show && (
                <div className="fixed z-50 bg-slate-100 h-screen w-screen">
                    <div id="load">
                        <div>G</div>
                        <div>N</div>
                        <div>I</div>
                        <div>D</div>
                        <div>A</div>
                        <div>O</div>
                        <div>L</div>
                    </div>
                </div>
            )}
        </>
    );
};

export default FirstLoadAnimation;
