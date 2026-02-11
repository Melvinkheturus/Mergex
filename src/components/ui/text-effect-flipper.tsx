import React, { ReactNode } from "react"
import { motion } from "framer-motion"

const DURATION = 0.25
const STAGGER = 0.025

interface FlipLinkProps {
  children: string
  href: string
}

interface FlipTextProps {
  children: string
  className?: string
  active?: boolean
}

export const FlipText: React.FC<FlipTextProps> = ({ children, className, active }) => {
  return (
    <motion.div
      initial="initial"
      animate={active ? "hovered" : "initial"}
      whileHover="hovered"
      className={`relative inline-block overflow-hidden whitespace-nowrap uppercase ${className}`}
      style={{
        lineHeight: 0.95,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}

const FlipLink: React.FC<FlipLinkProps> = ({ children, href }) => {
  return (
    <motion.a
      target="_blank"
      href={href}
      className="block"
    >
      <FlipText className="text-4xl font-semibold uppercase dark:text-white/90 sm:text-7xl md:text-8xl">
        {children}
      </FlipText>
    </motion.a>
  )
}

export default FlipLink
