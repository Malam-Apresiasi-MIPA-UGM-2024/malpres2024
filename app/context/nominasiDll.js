"use client";

import { createContext, useState, useContext } from 'react';

const NominasiDll = createContext();

export const ContextProvider = ({ children }) => {
    const [selectedNominasi, setSelectedNominasi] = useState("");

    return (
        <NominasiDll.Provider value={{ selectedNominasi, setSelectedNominasi }}>
            {children}
        </NominasiDll.Provider>
    );
};

export const useNominasiDll = () => useContext(NominasiDll);