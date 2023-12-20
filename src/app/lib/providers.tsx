'use client'

import React from 'react';

import { Provider } from 'react-redux'
import store from '@/app/lib/redux/index';

export const Providers = (props: React.PropsWithChildren) => {
    return <Provider store={ store }>{ props.children }</Provider>
};
