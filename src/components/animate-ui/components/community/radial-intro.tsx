'use client';

import * as React from 'react';
import {
  LayoutGroup,
  motion,
  useAnimate,
  type Transition,
  type AnimationSequence,
} from 'motion/react';

// Utility for delay (polyfill if not exported or to ensure behavior)
const delay = (fn: () => void, ms: number) => setTimeout(fn, ms);

interface ComponentProps {
  orbitItems: OrbitItem[];
  stageSize?: number;
  imageSize?: number;
  centerImage?: string;
}

export type OrbitItem = {
  id: number | string;
  name: string;
  src: string;
};

const transition: Transition = {
  delay: 0,
  stiffness: 300,
  damping: 35,
  type: 'spring',
  restSpeed: 0.01,
  restDelta: 0.01,
};

const spinConfig = {
  duration: 30,
  ease: 'linear' as const,
  repeat: Infinity,
};

const qsa = (root: Element, sel: string) =>
  Array.from(root.querySelectorAll(sel));

const angleOf = (el: Element) => Number((el as HTMLElement).dataset.angle || 0);

const armOfImg = (img: Element) =>
  (img as HTMLElement).closest('[data-arm]') as HTMLElement | null;

function RadialIntro({
  orbitItems,
  stageSize = 320,
  imageSize = 60,
  centerImage,
}: ComponentProps) {
  const step = 360 / orbitItems.length;
  const [scope, animate] = useAnimate();

  React.useEffect(() => {
    const root = scope.current;
    if (!root) return;

    // get arm and image elements
    const arms = qsa(root, '[data-arm]');
    const imgs = qsa(root, '[data-arm-image]');
    const centerImg = root.querySelector('[data-center-image]');
    const stops: Array<() => void> = [];

    // center image fade-in
    if (centerImg) {
      animate(centerImg, { opacity: 1, scale: 1 }, { duration: 0.8, delay: 0.2 });
    }

    // image lift-in
    delay(() => {
      if (scope.current) animate(imgs, { top: 0 }, transition)
    }, 250);

    // build sequence for orbit placement
    const orbitPlacementSequence: AnimationSequence = [
      ...arms.map((el): [Element, Record<string, any>, any] => [
        el,
        { rotate: angleOf(el) },
        { ...transition, at: 0 },
      ]),
      ...imgs.map((img): [Element, Record<string, any>, any] => [
        img,
        { rotate: -angleOf(armOfImg(img)!), opacity: 1 },
        { ...transition, at: 0 },
      ]),
    ];

    // play placement sequence
    delay(() => {
      if (scope.current) animate(orbitPlacementSequence);
    }, 700);

    // start continuous spin for arms and images
    delay(() => {
      // arms spin clockwise
      arms.forEach((el) => {
        if (!el) return;
        const angle = angleOf(el);
        const ctrl = animate(el, { rotate: [angle, angle + 360] }, spinConfig);
        stops.push(() => ctrl.cancel());
      });

      // images counter-spin to stay upright
      imgs.forEach((img) => {
        if (!img) return;
        const arm = armOfImg(img);
        const angle = arm ? angleOf(arm) : 0;
        const ctrl = animate(
          img,
          { rotate: [-angle, -angle - 360] },
          spinConfig,
        );
        stops.push(() => ctrl.cancel());
      });
    }, 1300);

    return () => stops.forEach((stop) => stop());
  }, []);

  return (
    <LayoutGroup>
      <motion.div
        ref={scope}
        className="relative overflow-visible"
        style={{ width: stageSize, height: stageSize }}
        initial={false}
      >
        {centerImage && (
          <motion.img
            data-center-image
            initial={{ opacity: 0, scale: 0.8 }}
            src={centerImage}
            alt="Center Logo"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full object-cover z-20"
            style={{ width: imageSize * 1.5, height: imageSize * 1.5 }}
          />
        )}

        {orbitItems.map((item, i) => (
          <motion.div
            key={item.id}
            data-arm
            className="will-change-transform absolute inset-0"
            style={{ zIndex: orbitItems.length - i }}
            data-angle={i * step}
            layoutId={`arm-${item.id}`}
          >
            <motion.img
              data-arm-image
              className="rounded-full object-fill absolute left-1/2 top-1/2 aspect-square translate -translate-x-1/2"
              style={{
                width: imageSize,
                height: imageSize,
                opacity: i === 0 ? 1 : 0,
              }}
              src={item.src}
              alt={item.name}
              draggable={false}
              layoutId={`arm-img-${item.id}`}
            />
          </motion.div>
        ))}
      </motion.div>
    </LayoutGroup>
  );
}

export { RadialIntro };
