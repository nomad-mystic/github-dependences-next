'use client'

import React, { useRef } from 'react';

// Styles
import './login.css';

// @link https://ui.shadcn.com/docs/components/card
import {
    Card
} from '@/app/components/ui/card';

import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { useTheme } from 'next-themes';
import Link from 'next/link';

/**
 *
 * @constructor
 * @return {React.JSX.Element}
 */
const LoginPage = (): React.JSX.Element => {
    // @todo Maybe change this to a global setting?
    // @link https://ui.shadcn.com/docs/dark-mode/next
    const { setTheme } = useTheme();
    setTheme('dark');

    // Add our hooks
    const usernameInput: React.MutableRefObject<any> = useRef(null);
    const passwordInput: React.MutableRefObject<any> = useRef(null);

    /**
     * @description
     * @public
     * @author Keith Murphy | nomadmystics@gmail.com
     *
     * @param {React.FormEvent} event
     * @return {void}
     */
    const onSubmit = (event: React.FormEvent): void => {
        try {
            event.preventDefault();

            const target: HTMLFormElement | undefined = event?.target as HTMLFormElement;

            if (target && typeof target !== 'undefined' && target.tagName === 'FORM') {
                const username = usernameInput.current.value;
                const password = passwordInput.current.value;

                console.log(username);
                console.log(password);

                // @todo Call our endpoint

            }

        } catch (err: any) {
            console.log('LoginPage.onSubmit()');
            console.log(err);
        }
    };

    return (
        <section className="Login flex flex-col items-center justify-center h-screen">
            <Card className="w-1/3 flex flex-col items-center justify-between bg-cardBackground">
                <section className="text-teal p-8 mt-0 mb-0 w-full">
                    <form onSubmit={ onSubmit } id="Login-form">
                        <div className="flex flex-col mb-6">
                            <Label htmlFor="username" className="mb-2 font-body">Username</Label>
                            <Input type="text" id="username" ref={ usernameInput }/>
                        </div>

                        <div className="flex flex-col mb-6">
                            <Label htmlFor="password" className="mb-2 font-body">Password</Label>
                            <Input type="password" id="password" ref={ passwordInput }/>
                        </div>

                        <div className="flex justify-center w-1/2 m-auto">
                            <Button className="font-body w-full">Sign-in</Button>
                        </div>
                    </form>

                    <div className="flex justify-center w-1/2 m-auto mt-4">
                        <p className="text-xs">Dont have have an account?</p>
                        <Link className="Login-createAccount text-primary text-xs ml-1" href="/create-account">Create One.</Link>
                    </div>
                </section>
            </Card>
        </section>
    );
};

export default LoginPage;
