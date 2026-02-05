import { useRef, useLayoutEffect, useState } from 'react';
import Image from 'next/image';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from 'motion/react';
import './ScrollVelocity.css';

function useElementWidth(ref) {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    function updateWidth() {
      if (ref.current) {
        setWidth(ref.current.offsetWidth);
      }
    }
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, [ref]);

  return width;
}


/**
 * @typedef {Object} ScrollVelocityProps
 * @property {any} [scrollContainerRef]
 * @property {string[]} [texts]
 * @property {string[]} [images]
 * @property {number} [velocity]
 * @property {string} [className]
 * @property {string} [imageClassName]
 * @property {number} [damping]
 * @property {number} [stiffness]
 * @property {number} [numCopies]
 * @property {Object} [velocityMapping]
 * @property {string} [parallaxClassName]
 * @property {string} [scrollerClassName]
 * @property {Object} [parallaxStyle]
 * @property {Object} [scrollerStyle]
 * @property {number} [imageWidth]
 * @property {number} [imageHeight]
 */

/**
 * @param {ScrollVelocityProps} props
 */
export const ScrollVelocity = ({
  scrollContainerRef,
  texts = [],
  images = [],
  velocity = 100,
  className = '',
  imageClassName = '',
  damping = 50,
  stiffness = 400,
  numCopies = 6,
  velocityMapping = { input: [0, 1000], output: [0, 5] },
  parallaxClassName = 'parallax',
  scrollerClassName = 'scroller',
  parallaxStyle,
  scrollerStyle,
  imageWidth = 400,
  imageHeight = 300,
}) => {
  function VelocityText({
    children,
    baseVelocity = velocity,
    scrollContainerRef,
    className = '',
    imageClassName = '',
    damping,
    stiffness,
    numCopies,
    velocityMapping,
    parallaxClassName,
    scrollerClassName,
    parallaxStyle,
    scrollerStyle,
    isImage = false,
    imageWidth,
    imageHeight,
  }) {
    const baseX = useMotionValue(0);
    const scrollOptions = scrollContainerRef ? { container: scrollContainerRef } : {};
    const { scrollY } = useScroll(scrollOptions);
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
      damping: damping ?? 50,
      stiffness: stiffness ?? 400
    });
    const velocityFactor = useTransform(
      smoothVelocity,
      velocityMapping?.input || [0, 1000],
      velocityMapping?.output || [0, 5],
      { clamp: false }
    );

    const copyRef = useRef(null);
    const copyWidth = useElementWidth(copyRef);

    function wrap(min, max, v) {
      const range = max - min;
      const mod = (((v - min) % range) + range) % range;
      return mod + min;
    }

    const x = useTransform(baseX, v => {
      if (copyWidth === 0) return '0px';
      return `${wrap(-copyWidth, 0, v)}px`;
    });

    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

      if (velocityFactor.get() < 0) {
        directionFactor.current = -1;
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1;
      }

      moveBy += directionFactor.current * moveBy * velocityFactor.get();
      baseX.set(baseX.get() + moveBy);
    });

    const spans = [];
    for (let i = 0; i < numCopies; i++) {
      if (isImage) {
        spans.push(
          <div className={imageClassName} key={i} ref={i === 0 ? copyRef : null}>
            {children}
          </div>
        );
      } else {
        spans.push(
          <span className={className} key={i} ref={i === 0 ? copyRef : null}>
            {children}&nbsp;
          </span>
        );
      }
    }

    return (
      <div className={parallaxClassName} style={parallaxStyle}>
        <motion.div className={scrollerClassName} style={{ x, ...scrollerStyle }}>
          {spans}
        </motion.div>
      </div>
    );
  }

  // Render images if provided
  if (images.length > 0) {
    return (
      <section>
        <VelocityText
          className={className}
          imageClassName={imageClassName}
          baseVelocity={velocity}
          scrollContainerRef={scrollContainerRef}
          damping={damping}
          stiffness={stiffness}
          numCopies={numCopies}
          velocityMapping={velocityMapping}
          parallaxClassName={parallaxClassName}
          scrollerClassName={scrollerClassName}
          parallaxStyle={parallaxStyle}
          scrollerStyle={scrollerStyle}
          isImage={true}
          imageWidth={imageWidth}
          imageHeight={imageHeight}
        >
          {/* Render all images in a single horizontal container */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {images.map((image, idx) => (
              <Image
                key={idx}
                src={image}
                alt={`Gallery image ${idx + 1}`}
                width={imageWidth}
                height={imageHeight}
                className="object-cover rounded-lg"
                priority={idx < 2}
                style={{ flexShrink: 0 }}
              />
            ))}
          </div>
        </VelocityText>
      </section>
    );
  }

  // Render text (original behavior)
  return (
    <section>
      {texts.map((text, index) => (
        <VelocityText
          key={index}
          className={className}
          baseVelocity={index % 2 !== 0 ? -velocity : velocity}
          scrollContainerRef={scrollContainerRef}
          damping={damping}
          stiffness={stiffness}
          numCopies={numCopies}
          velocityMapping={velocityMapping}
          parallaxClassName={parallaxClassName}
          scrollerClassName={scrollerClassName}
          parallaxStyle={parallaxStyle}
          scrollerStyle={scrollerStyle}
        >
          {text}
        </VelocityText>
      ))}
    </section>
  );
};

export default ScrollVelocity;

