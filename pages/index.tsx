import React from "react";
import type { NextPage } from "next";

import { Loading } from "../components";
import { useUser, withAuth } from "../utils";

const Home: NextPage = () => {
    return (
        <>
            <main className="flex flex-col items-center min-h-screen p-5">
                <div className="m-auto">
                    <h1 className="text-5xl text-center">GenZtechies</h1>
                    <Loading isParent={false} />
                </div>
            </main>
        </>
    );
};

export default Home;
