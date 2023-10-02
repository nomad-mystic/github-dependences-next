import React from 'react';
import './globals.css'

// Next
import type {Metadata} from 'next'
import { NextFont } from "next/dist/compiled/@next/font";

// Fonts
// @link https://nextjs.org/docs/app/building-your-application/optimizing/fonts
import { Inter } from 'next/font/google'

const inter: NextFont = Inter({
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'GitHub Dependencies',
    description: '',
    applicationName: 'GitHub Dependencies',
};

export default function RootLayout(
    {
       children,
   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    )
}
