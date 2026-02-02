"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type Section = {
    id: string;
    label: string;
    description: string;
    gradient: string;
    component?: ReactNode; // The live component preview
};

type ScrollSectionContextType = {
    sections: Section[];
    setSections: (sections: Section[]) => void;
};

const ScrollSectionContext = createContext<ScrollSectionContextType | undefined>(undefined);

export function ScrollSectionProvider({ children }: { children: ReactNode }) {
    const [sections, setSections] = useState<Section[]>([]);

    return (
        <ScrollSectionContext.Provider value={{ sections, setSections }}>
            {children}
        </ScrollSectionContext.Provider>
    );
}

export function useScrollSections() {
    const context = useContext(ScrollSectionContext);
    if (context === undefined) {
        throw new Error("useScrollSections must be used within a ScrollSectionProvider");
    }
    return context;
}
