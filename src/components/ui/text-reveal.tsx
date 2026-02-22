"use client"

import { ComponentPropsWithoutRef, FC, ReactNode, useRef } from "react"
import { motion, MotionValue, useScroll, useTransform } from "motion/react"

import { cn } from "@/lib/utils"

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  children: string
  textClassName?: string
  header?: ReactNode
  footer?: ReactNode
  offset?: any
}

export const TextReveal: FC<TextRevealProps> = ({ children, className, textClassName, header, footer, offset }) => {
  const targetRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: offset || ["start end", "end start"],
  })

  if (typeof children !== "string") {
    throw new Error("TextReveal: children must be a string")
  }

  const words = children.split(" ")

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[200vh]", className)}>
      <div
        className={
          "sticky top-0 mx-auto flex h-screen max-w-4xl flex-col justify-center bg-transparent px-[1rem] py-[5rem]"
        }
      >
        {header && <div className="mb-6 w-full text-center">{header}</div>}
        <span
          className={cn(
            "flex flex-wrap justify-center p-5 text-black/20 md:p-8 lg:p-10 dark:text-white/20",
            textClassName
          )}
        >
          {words.map((word, i) => {
            const start = i / (words.length * 2)
            const end = start + 1 / (words.length * 2)
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            )
          })}
        </span>
        {footer && <div className="mt-6 w-full text-center">{footer}</div>}
      </div>
    </div>
  )
}

interface WordProps {
  children: ReactNode
  progress: MotionValue<number>
  range: [number, number]
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1])
  return (
    <span className="xl:lg-3 relative mx-1 lg:mx-1.5">
      <span className="absolute opacity-30">{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        className={"text-black dark:text-white"}
      >
        {children}
      </motion.span>
    </span>
  )
}
