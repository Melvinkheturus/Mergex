"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Maximize2, ChevronLeft, ChevronRight } from "lucide-react";

type GalleryImage = {
  src: string;
  alt: string;
  type: "desktop" | "mobile" | "tablet" | "other";
};

type VisualShowcaseProps = {
  images: GalleryImage[];
};

const defaultImages: GalleryImage[] = [
  {
    src: "/placeholder-desktop.jpg",
    alt: "Desktop view of the website homepage",
    type: "desktop"
  },
  {
    src: "/placeholder-mobile.jpg",
    alt: "Mobile view of the website",
    type: "mobile"
  },
  {
    src: "/placeholder-tablet.jpg",
    alt: "Tablet view of the dashboard",
    type: "tablet"
  },
  {
    src: "/placeholder-other.jpg",
    alt: "Product screenshot",
    type: "other"
  }
];

const VisualShowcase = ({
  images = defaultImages
}: VisualShowcaseProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const openLightbox = (index: number) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          className="mx-auto max-w-5xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8 text-center">
            <span className="mb-2 inline-block text-sm font-medium uppercase tracking-wider text-purple-400">Project Gallery</span>
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Visual Showcase
            </h2>
          </div>
          
          {/* Featured Image */}
          <motion.div 
            className="relative mb-6 aspect-video w-full overflow-hidden rounded-xl border border-gray-800 bg-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-full w-full">
              {/* Placeholder for actual image */}
              <div className="flex h-full w-full items-center justify-center bg-gray-900 text-gray-600">
                [Featured Image: {images[activeIndex].alt}]
              </div>
              
              {/* Expand button */}
              <button 
                onClick={() => openLightbox(activeIndex)}
                className="absolute right-4 top-4 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-all hover:bg-black/70"
              >
                <Maximize2 size={16} />
              </button>
              
              {/* Navigation arrows */}
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-all hover:bg-black/70"
              >
                <ChevronLeft size={20} />
              </button>
              
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-all hover:bg-black/70"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </motion.div>
          
          {/* Thumbnails */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {images.map((image, index) => (
              <motion.div
                key={index}
                className={`cursor-pointer overflow-hidden rounded-lg border ${activeIndex === index ? 'border-purple-500' : 'border-gray-800'}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                onClick={() => setActiveIndex(index)}
              >
                <div className="aspect-video bg-gray-900">
                  {/* Placeholder for actual image thumbnail */}
                  <div className="flex h-full w-full items-center justify-center text-xs text-gray-600">
                    [{image.type}]
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Lightbox */}
          {lightboxOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
              <div className="relative max-h-[90vh] max-w-[90vw] overflow-hidden rounded-lg">
                {/* Placeholder for actual lightbox image */}
                <div className="flex aspect-video w-full max-w-5xl items-center justify-center bg-gray-900 text-gray-600">
                  [Lightbox Image: {images[activeIndex].alt}]
                </div>
                
                {/* Close button */}
                <button 
                  onClick={closeLightbox}
                  className="absolute right-4 top-4 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-all hover:bg-black/70"
                >
                  ✕
                </button>
                
                {/* Navigation arrows */}
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-all hover:bg-black/70"
                >
                  <ChevronLeft size={24} />
                </button>
                
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-all hover:bg-black/70"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default VisualShowcase;