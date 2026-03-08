"use client";

/**
 * useVCard — generates and triggers download of a .vcf vCard file.
 * Pure client-side, no server dependency.
 */
export function useVCard() {
    const downloadVCard = () => {
        const vcard = [
            "BEGIN:VCARD",
            "VERSION:3.0",
            "FN:Mergex",
            "ORG:Mergex Ecosystems",
            "TEL;TYPE=WORK,VOICE:+919042172025",
            "ADR;TYPE=WORK:;;Ambattur;Chennai;Tamil Nadu;;India",
            "URL:https://mergex.in",
            "EMAIL;TYPE=WORK:hello@mergex.in",
            "NOTE:One system. Zero friction. — Structured business systems that eliminate scattered workflows and accelerate growth.",
            "END:VCARD",
        ].join("\r\n");

        const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.download = "Mergex.vcf";
        document.body.appendChild(link);
        link.click();

        // Cleanup
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    return { downloadVCard };
}
