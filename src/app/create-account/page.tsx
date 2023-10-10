'use client';

import React, { useRef, useState } from 'react';

import { Card } from '@/app/components/ui/card';
import { Label } from '@/app/components/ui/label';
import { Input } from '@/app/components/ui/input';
import { Button } from '@/app/components/ui/button';

import Link from 'next/link';

import { useTheme } from 'next-themes';


const CreateAccountPage = () => {
    // @todo Maybe change this to a global setting?
    // @link https://ui.shadcn.com/docs/dark-mode/next
    const { setTheme } = useTheme();
    setTheme('dark');

    // Add our hooks

    // States
    const [passwordValid, setPasswordValid] = useState('');

    // REFS
    const firstNameInput: React.MutableRefObject<any> = useRef(null);
    const lastNameInput: React.MutableRefObject<any> = useRef(null);
    const usernameInput: React.MutableRefObject<any> = useRef(null);
    const emailInput: React.MutableRefObject<any> = useRef(null);
    const passwordInput: React.MutableRefObject<any> = useRef(null);
    const confirmPasswordInput: React.MutableRefObject<any> = useRef(null);

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
                const firstName = firstNameInput.current.value.trim();
                const lastName = lastNameInput.current.value.trim();
                const email = emailInput.current.value.trim();
                const username = usernameInput.current.value.trim();
                const password = passwordInput.current.value.trim();
                const confirmPassword = confirmPasswordInput.current.value.trim();

                const passwordValid: boolean = validatePassword(password, confirmPassword);

                if (passwordValid) {
                    console.log(firstName);
                    console.log(lastName);
                    console.log(email);
                    console.log(username);
                    console.log(password);
                    console.log(confirmPassword);

                    // @todo Call our endpoint
                }
            }

        } catch (err: any) {
            console.log('LoginPage.onSubmit()');
            console.log(err);
        }
    };

    /**
     * @description
     * @public
     * @author Keith Murphy | nomadmystics@gmail.com
     *
     * @return {boolean}
     */
    const validatePassword = (password: string, confirmPassword: string): boolean => {
        let validPassword = true;

        if (password !== confirmPassword) {
            setPasswordValid('Passwords Don\'t match');

            validPassword = false;

        } else {

            setPasswordValid('');

        }

        return validPassword;
    };

    /**
     * @description
     * @public
     * @author Keith Murphy | nomadmystics@gmail.com
     *
     * @return {void}
     */
    const onPasswordChangeHandler = (): void => {
        const password = passwordInput.current.value.trim();
        const confirmPassword = confirmPasswordInput.current.value.trim();

        const passwordValid: boolean = validatePassword(password, confirmPassword);
    };

    return (
        <section className="CreateAccount flex flex-col items-center justify-center h-screen">
            <Card className="w-1/3 flex flex-col items-center justify-between bg-cardBackground">
                <section className="text-teal p-8 mt-0 mb-0 w-full">
                    <form onSubmit={ onSubmit } id="Login-form">
                        <div className="flex flex-col mb-6">
                            <Label htmlFor="first-name" className="mb-2 font-body">First Name:</Label>
                            <Input type="text" id="first-name" ref={ firstNameInput }/>
                        </div>

                        <div className="flex flex-col mb-6">
                            <Label htmlFor="last-name" className="mb-2 font-body">Last Name:</Label>
                            <Input type="text" id="last-name" ref={ lastNameInput }/>
                        </div>

                        <div className="flex flex-col mb-6">
                            <Label htmlFor="email" className="mb-2 font-body">Email:</Label>
                            <Input type="email" id="email" ref={ emailInput }/>
                        </div>

                        <div className="flex flex-col mb-6">
                            <Label htmlFor="username" className="mb-2 font-body">Username:</Label>
                            <Input type="text" id="username" ref={ usernameInput }/>
                        </div>

                        <div className="flex flex-col mb-6">
                            <Label htmlFor="password" className="mb-2 font-body">Password:</Label>
                            <Input type="password" id="password" ref={ passwordInput }/>
                        </div>

                        <div className="flex flex-col mb-6">
                            <Label htmlFor="confirm-password" className="mb-2 font-body">Confirm Password:</Label>
                            <Input type="password" id="confirm-password" ref={ confirmPasswordInput } onChange={ onPasswordChangeHandler }/>
                            <p className='text-red-600 text-xs mt-2'>{ passwordValid }</p>
                        </div>

                        <div className="flex justify-center w-1/2 m-auto">
                            <Button className="font-body w-full">Create Account</Button>
                        </div>
                    </form>

                    <div className="flex justify-center w-1/2 m-auto mt-4">
                        <p className="text-xs">Already have an account?</p>
                        <Link className="CreateAccount-login text-primary text-xs ml-1" href="/login">Login.</Link>
                    </div>
                </section>
            </Card>
        </section>
    );
};

export default CreateAccountPage;
