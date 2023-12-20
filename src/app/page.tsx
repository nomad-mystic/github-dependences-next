'use client';

// Community
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Link from 'next/link';

// Types
import { AuthState } from '@/app/lib/redux/slices/auth/auth-types';

// Components
import DashboardPage from '@/app/dashboard/page';

export default function Home(): React.JSX.Element {
    const isAuthorized = useSelector((state: AuthState) => state.auth);

    console.log(isAuthorized);

    return (
        <>
            {
                isAuthorized && (
                    <DashboardPage/>
                )
            }

            <main className="flex flex-col items-center min-h-screen justify-center">
                <header>
                    <h1 className="text-3xl">Github Dependencies</h1>
                </header>

                <section className="p-6 max-w-sm mr-auto ml-auto">
                    <h2 className="text-2xl">WIP Components</h2>

                    <section className="flex justify-between mt-6">
                        <Link href="/login" className="text-blue-700">Login</Link>
                        <Link href="/create-account" className="text-blue-700">Create Account</Link>
                    </section>
                </section>
            </main>
        </>
    )
};
