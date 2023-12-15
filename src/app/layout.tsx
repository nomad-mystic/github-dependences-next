'use client';

import React from 'react';
import './styles/globals.css';

// Next
import type { Metadata } from 'next';
import { NextFont } from 'next/dist/compiled/@next/font';

// Fonts
// @link https://nextjs.org/docs/app/building-your-application/optimizing/fonts
import { Inter } from 'next/font/google';

// Components
import { ThemeProvider } from '@/app/components/theme-provider';
import { Provider } from 'react-redux';

import store from './store/index';

const inter: NextFont = Inter({
    subsets: ['latin'],
});

// export const metadata: Metadata = {
//     title: 'GitHub Dependencies',
//     description: '',
//     applicationName: 'GitHub Dependencies',
// };

/**
 * @description
 * @public
 * @author Keith Murphy | nomadmystics@gmail.com
 *
 * @param {Object.children} children
 * @return {React.JSX.Element}
 */
export default function RootLayout({ children }: { children: React.ReactNode }): React.JSX.Element {
    // @ts-ignore
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={ inter.className }>

        <Provider store={ store }>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >

                { children }

            </ThemeProvider>
        </Provider>
        </body>
        </html>
    )
};
