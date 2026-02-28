"use client";

import { AnimatePresence, motion, useSpring } from "framer-motion";
import { Play, Plus } from "lucide-react";
import {
  MediaControlBar,
  MediaController,
  MediaMuteButton,
  MediaPlayButton,
  MediaTimeRange,
  MediaVolumeRange,
} from "media-chrome/react";
import type { ComponentProps } from "react";
import React, { useState, useEffect } from "react";

import { cn } from "@/lib/utils";

export type VideoPlayerProps = ComponentProps<typeof MediaController>;

export const VideoPlayer = ({ style, ...props }: VideoPlayerProps) => (
  <MediaController style={{ ...style }} {...props} />
);

export type VideoPlayerControlBarProps = ComponentProps<typeof MediaControlBar>;

export const VideoPlayerControlBar = (props: VideoPlayerControlBarProps) => (
  <MediaControlBar {...props} />
);

export type VideoPlayerTimeRangeProps = ComponentProps<typeof MediaTimeRange>;

export const VideoPlayerTimeRange = ({ className, ...props }: VideoPlayerTimeRangeProps) => (
  <MediaTimeRange
    className={cn("[--media-range-thumb-opacity:0] [--media-range-track-height:2px]", className)}
    {...props}
  />
);

export type VideoPlayerPlayButtonProps = ComponentProps<typeof MediaPlayButton>;

export const VideoPlayerPlayButton = ({ className, ...props }: VideoPlayerPlayButtonProps) => (
  <MediaPlayButton className={cn("", className)} {...props} />
);

export type VideoPlayerMuteButtonProps = ComponentProps<typeof MediaMuteButton>;

export const VideoPlayerMuteButton = ({ className, ...props }: VideoPlayerMuteButtonProps) => (
  <MediaMuteButton className={cn("", className)} {...props} />
);

export type VideoPlayerContentProps = ComponentProps<"video">;

export const VideoPlayerContent = ({ className, ...props }: VideoPlayerContentProps) => (
  <video className={cn("mb-0 mt-0", className)} {...props} />
);

export const Skiper67 = ({
  onOpenChange,
  isOpen
}: {
  onOpenChange?: (open: boolean) => void;
  isOpen?: boolean;
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const SPRING = { mass: 0.1 };

  const x = useSpring(0, SPRING);
  const y = useSpring(0, SPRING);
  const opacity = useSpring(0, SPRING);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    opacity.set(1);
    const bounds = e.currentTarget.getBoundingClientRect();

    // Account for current GSAP scale of the element
    const scaleX = bounds.width / e.currentTarget.offsetWidth;
    const scaleY = bounds.height / e.currentTarget.offsetHeight;

    x.set((e.clientX - bounds.left) / scaleX);
    y.set((e.clientY - bounds.top) / scaleY);
  };

  const togglePopOver = (show: boolean) => {
    onOpenChange?.(show);
  };

  return (
    <>
      <motion.div
        layoutId="skiper-video-card"
        style={{ opacity: isOpen ? 0 : 1 }}
        onMouseMove={handlePointerMove}
        onMouseLeave={() => opacity.set(0)}
        onClick={() => togglePopOver(true)}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        className="relative flex w-full aspect-video items-center justify-center overflow-hidden rounded-xl bg-black/40 border border-white/10 shadow-lg backdrop-blur-sm group font-sans cursor-pointer z-10"
      >
        <motion.div
          style={{ x, y, opacity }}
          className="absolute top-0 left-0 z-20 flex w-fit select-none items-center justify-center gap-2 p-2 text-sm text-white mix-blend-exclusion pointer-events-none"
        >
          <Play className="size-4 fill-white" /> Play
        </motion.div>
        <video
          autoPlay
          muted
          playsInline
          loop
          className="h-full w-full object-cover"
        >
          <source src="/assets/labs portfolio/Banana Choco Mix.mp4" />
        </video>
      </motion.div>

      {/* Popover is now handled by parent to escape scaling containers */}
    </>
  );
};

export const VideoPopOver = ({
  setShowVideoPopOver,
}: {
  setShowVideoPopOver: (showVideoPopOver: boolean) => void;
}) => {
  return (
    <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-black/80 absolute inset-0 backdrop-blur-xl"
        onClick={() => setShowVideoPopOver(false)}
      />
      <motion.div
        layoutId="skiper-video-card"
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        className="relative aspect-video w-full max-w-[90vw] md:max-w-[85vw] overflow-hidden rounded-2xl bg-black shadow-2xl z-20 border border-white/5"
      >
        <VideoPlayer style={{ width: "100%", height: "100%" }}>
          <VideoPlayerContent
            src="/assets/labs portfolio/Banana Choco Mix.mp4"
            autoPlay
            slot="media"
            className="w-full h-full object-cover"
            style={{ width: "100%", height: "100%" }}
          />

          <span
            onClick={() => setShowVideoPopOver(false)}
            className="absolute right-4 top-4 z-10 cursor-pointer rounded-full bg-black/20 p-2 backdrop-blur-md transition-colors hover:bg-black/40"
          >
            <Plus className="size-6 rotate-45 text-white" />
          </span>
          <VideoPlayerControlBar className="absolute bottom-0 left-0 right-0 flex w-full items-center justify-center px-6 py-4 mix-blend-exclusion md:px-12 md:py-8">
            <VideoPlayerPlayButton className="h-4 bg-transparent" />
            <VideoPlayerTimeRange className="bg-transparent" />
            <VideoPlayerMuteButton className="size-4 bg-transparent" />
          </VideoPlayerControlBar>
        </VideoPlayer>
      </motion.div>
    </div>
  );
};
