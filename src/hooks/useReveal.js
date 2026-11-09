import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Fades + slides the elements matching `selector` inside `ref` into view.
 * By default the animation waits until the section scrolls into view;
 * pass `immediate: true` for above-the-fold content.
 */
export function useReveal(
  ref,
  selector,
  { y = 24, duration = 0.9, stagger = 0.1, immediate = false } = {}
) {
  useEffect(() => {
    const root = ref.current;
    if (!root || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const targets = root.querySelectorAll(selector);
      if (!targets.length) return;

      gsap.from(targets, {
        y,
        opacity: 0,
        duration,
        stagger,
        ease: "power3.out",
        scrollTrigger: immediate
          ? undefined
          : { trigger: root, start: "top 80%", once: true },
      });
    }, root);

    return () => ctx.revert();
  }, [ref, selector, y, duration, stagger, immediate]);
}
