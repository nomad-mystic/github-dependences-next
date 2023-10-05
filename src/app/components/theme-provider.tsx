'use client'

import * as React from 'react';

// @link https://ui.shadcn.com/docs/dark-mode/next
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    return <NextThemesProvider { ...props }>{ children }</NextThemesProvider>
}
