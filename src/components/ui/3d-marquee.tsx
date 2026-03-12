"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { cn } from "@/lib/utils";
export const ThreeDMarquee = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  // Split the images array into 5 equal parts to match the 5 columns
  const chunkSize = Math.ceil(images.length / 5);
  const chunks = Array.from({ length: 5 }, (_, colIndex) => {
    const start = colIndex * chunkSize;
    return images.slice(start, start + chunkSize);
  });
  return (
    <div
      className={cn(
        "mx-auto block h-[600px] overflow-hidden rounded-2xl max-sm:h-100",
        className,
      )}
    >
      <div className="flex size-full items-center justify-center perspective-[1000px]">
        <div className="shrink-0 scale-[0.45] sm:scale-[0.65] lg:scale-[0.85] flex items-center justify-center">
          <div
            style={{
              transform: "rotateX(55deg) rotateZ(-45deg)",
            }}
            className="grid origin-center grid-cols-5 gap-6 sm:gap-8 transform-3d"
          >
            {chunks.map((subarray, colIndex) => (
              <motion.div
                animate={{ y: colIndex % 2 === 0 ? [0, 600] : [0, -600] }}
                transition={{
                  duration: colIndex % 2 === 0 ? 15 : 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear"
                }}
                key={colIndex + "marquee"}
                className="flex flex-col items-start gap-8 [will-change:transform]"
              >
                <GridLineVertical className="-left-4" offset="80px" />
                {subarray.map((image, imageIndex) => {
                  const isVideo = image.endsWith(".mp4") || image.endsWith(".webm");

                  return (
                    <div className="relative" key={imageIndex + image}>
                      <GridLineHorizontal className="-top-4" offset="20px" />
                      {isVideo ? (
                        <motion.video
                          whileHover={{ scale: 1.05, z: 50 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          src={image}
                          className="w-[220px] sm:w-[300px] md:w-[400px] h-auto rounded-lg object-contain shadow-xl shadow-black/20 hover:shadow-2xl transition-transform cursor-pointer [will-change:transform]"
                          autoPlay
                          loop
                          muted
                          playsInline
                        />
                      ) : (
                        <motion.div
                          whileHover={{ scale: 1.05, z: 50 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="relative w-[220px] sm:w-[300px] md:w-[400px] h-auto rounded-lg shadow-xl shadow-black/20 hover:shadow-2xl overflow-hidden cursor-pointer transition-transform [will-change:transform]"
                        >
                          <Image
                            src={image}
                            alt={`Image ${imageIndex + 1}`}
                            width={400}
                            height={600}
                            className="w-full h-auto object-contain"
                            priority={imageIndex < 2}
                          />
                        </motion.div>
                      )}
                    </div>
                  );
                })}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const GridLineHorizontal = ({
  className,
  offset,
}: {
  className?: string;
  offset?: string;
}) => {
  return (
    <div
      style={
        {
          "--background": "#ffffff",
          "--color": "rgba(0, 0, 0, 0.2)",
          "--height": "1px",
          "--width": "5px",
          "--fade-stop": "90%",
          "--offset": offset || "200px", //-100px if you want to keep the line inside
          "--color-dark": "rgba(255, 255, 255, 0.2)",
          maskComposite: "exclude",
        } as React.CSSProperties
      }
      className={cn(
        "absolute left-[calc(var(--offset)/2*-1)] h-[var(--height)] w-[calc(100%+var(--offset))]",
        "bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_left,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_right,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude]",
        "z-30",
        "dark:bg-[linear-gradient(to_right,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
        className,
      )}
    ></div>
  );
};

const GridLineVertical = ({
  className,
  offset,
}: {
  className?: string;
  offset?: string;
}) => {
  return (
    <div
      style={
        {
          "--background": "#ffffff",
          "--color": "rgba(0, 0, 0, 0.2)",
          "--height": "5px",
          "--width": "1px",
          "--fade-stop": "90%",
          "--offset": offset || "150px", //-100px if you want to keep the line inside
          "--color-dark": "rgba(255, 255, 255, 0.2)",
          maskComposite: "exclude",
        } as React.CSSProperties
      }
      className={cn(
        "absolute top-[calc(var(--offset)/2*-1)] h-[calc(100%+var(--offset))] w-[var(--width)]",
        "bg-[linear-gradient(to_bottom,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_top,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_bottom,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude]",
        "z-30",
        "dark:bg-[linear-gradient(to_bottom,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
        className,
      )}
    ></div>
  );
};
