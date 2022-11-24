interface LoadingProp {
    text?: string;
    description?: string;
    isParent: boolean;
}

const Loading = ({ text, description, isParent }: LoadingProp) => {
    return (
        <div className={["flex flex-col items-center justify-center", isParent ? "min-h-screen" : "min-h-full py-20"].join(" ")}>
            <div className="flex flex-col items-center justify-center w-full flex-1 px-1 lg:px-20 text-center">
                <div className="flex justify-center items-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-y-4 border-blue-600 " />
                </div>
                {text && <h1 className="text-3xl font-bold mt-4">{text}</h1>}
                {description && <p className="text-lg font-light mt-4">{description}</p>}
            </div>
        </div>
    );
};

export default Loading;
