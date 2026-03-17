"use client";

import { useEffect, useState } from "react";
import { useVCard } from "../hooks/useVCard";

/**
 * SaveContactPopup - mobile bottom-sheet popup that auto-appears
 * once per session, prompting users to save Mergex as a contact.
 */
export default function SaveContactPopup() {
    const [visible, setVisible] = useState(false);
    const { downloadVCard } = useVCard();

    useEffect(() => {
        // Only show on mobile-width devices
        const isMobile = window.innerWidth <= 768;
        const alreadyDismissed = sessionStorage.getItem("mergex-contact-dismissed");

        if (isMobile && !alreadyDismissed) {
            const timer = setTimeout(() => setVisible(true), 1200);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleSave = () => {
        downloadVCard();
        setVisible(false);
        sessionStorage.setItem("mergex-contact-dismissed", "true");
    };

    const handleDismiss = () => {
        setVisible(false);
        sessionStorage.setItem("mergex-contact-dismissed", "true");
    };

    if (!visible) return null;

    return (
        <div className="connect-popup-overlay" onClick={handleDismiss}>
            <div
                className="connect-popup-sheet"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="connect-popup-handle" />
                <p className="connect-popup-title">Save Mergex to Contacts</p>
                <p className="connect-popup-subtitle">
                    One tap - always have our details handy.
                </p>
                <button className="connect-popup-save-btn" onClick={handleSave}>
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <line x1="19" y1="8" x2="19" y2="14" />
                        <line x1="22" y1="11" x2="16" y2="11" />
                    </svg>
                    Save Contact
                </button>
                <button className="connect-popup-dismiss" onClick={handleDismiss}>
                    Not now
                </button>
            </div>
        </div>
    );
}
