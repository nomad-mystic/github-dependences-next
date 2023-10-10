'use client';

import React, { useEffect } from 'react';

import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
    useEffect(() => {
        fetch('/api/v1.0/repos/all').then((res) => res.json()).then((data) => console.log(data));
    }, []);

    return (
        <main className="flex flex-col items-center min-h-screen justify-center">
            <header>
                <h1 className="text-3xl">Github Dependencies</h1>
            </header>

            <section className="p-6 max-w-sm mr-auto ml-auto">
                <h2 className="text-2xl">WIP Components</h2>

                <section className="flex justify-between mt-6">
                    <Link href='/login' className="text-blue-700">Login</Link>
                    <Link href='/create-account' className="text-blue-700">Create Account</Link>
                </section>
            </section>
        </main>
    )
}
