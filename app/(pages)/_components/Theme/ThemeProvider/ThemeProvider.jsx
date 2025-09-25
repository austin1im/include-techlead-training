"use client";
import { createContext, useState } from "react";

export const Theme = createContext();

export default function ThemeProvider({ children }) {
    const [isLight, updateTheme] = useState(true);
    return (
        <Theme.Provider value={[isLight, updateTheme]}>
            {children}
        </Theme.Provider>
    )
}