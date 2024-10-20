"use client";

import { ContextProvider } from '../context/nominasiDll';

export const ClientWrapper = ({ children }) => {
    return (
        <ContextProvider>
            {children}
        </ContextProvider>
    );
};