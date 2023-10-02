import React from 'react';
import Card from "@/app/ui/Card/Card";

const LoginPage = (): React.JSX.Element => {
    return (
        <section className="">
            <Card>
                <section className="text-teal flex flex-col items-center justify-between bg-cardBackground p-8 mt-0 mb-0 mr-auto mr-left-0 w-fit">
                    <div className="flex flex-col mb-6">
                        <label htmlFor="username" className="mb-2 font-body">Username</label>
                        <input type="text" id="username"/>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password" className="mb-2 font-body">Password</label>
                        <input type="password" id="password"/>
                    </div>
                </section>
            </Card>
        </section>
    );
};

export default LoginPage;
