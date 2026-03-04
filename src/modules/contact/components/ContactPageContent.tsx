"use client";

import { motion } from "framer-motion";
import ContactHero from "./ContactHero";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import ContactPartner from "./ContactPartner";
import ContactDirectCall from "./ContactDirectCall";

export default function ContactPageContent() {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <ContactHero />

            <div className="mt-16 lg:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                {/* Left Column: Form */}
                <div className="lg:col-span-7 xl:col-span-8">
                    <ContactForm />
                </div>

                {/* Right Column: Info & Partner */}
                <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-10">
                    <ContactInfo />
                    <ContactPartner />
                </div>
            </div>

            <div className="mt-20 lg:mt-32">
                <ContactDirectCall />
            </div>
        </div>
    );
}
