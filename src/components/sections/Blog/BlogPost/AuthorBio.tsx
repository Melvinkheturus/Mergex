"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Twitter, Linkedin, Globe } from "lucide-react";

type SocialLink = {
  platform: "twitter" | "linkedin" | "website";
  url: string;
};

type AuthorBioProps = {
  name: string;
  bio: string;
  image?: string;
  socialLinks?: SocialLink[];
};

const AuthorBio = ({
  name,
  bio,
  image = "/images/placeholder-author.png", // Default placeholder image
  socialLinks = []
}: AuthorBioProps) => {
  const renderSocialIcon = (platform: string) => {
    switch (platform) {
      case "twitter":
        return <Twitter size={16} />;
      case "linkedin":
        return <Linkedin size={16} />;
      case "website":
        return <Globe size={16} />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      className="my-10 rounded-xl border border-gray-800 bg-black/30 p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <div className="relative h-16 w-16 overflow-hidden rounded-full border border-purple-500/30">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        
        <div className="flex-1">
          <h3 className="text-lg font-bold text-white">{name}</h3>
          <p className="mt-1 text-sm text-gray-400">{bio}</p>
          
          {socialLinks.length > 0 && (
            <div className="mt-3 flex gap-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-colors hover:bg-purple-900 hover:text-white"
                  aria-label={`${name}'s ${link.platform}`}
                >
                  {renderSocialIcon(link.platform)}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default AuthorBio;