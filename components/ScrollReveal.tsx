"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type ScrollRevealVariant = "fade-up" | "fade-in";

export function ScrollReveal({
  children,
  className,
  delay = 0,
  variant = "fade-up",
  rootMargin = "0px 0px -10% 0px",
  threshold = 0.15,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: ScrollRevealVariant;
  rootMargin?: string;
  threshold?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If user prefers reduced motion, show content immediately.
    const media =
      typeof window !== "undefined"
        ? window.matchMedia?.("(prefers-reduced-motion: reduce)")
        : null;
    if (media?.matches) {
      setIsVisible(true);
      return;
    }

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  const animateClass = variant === "fade-up" ? "animate-fade-up" : "animate-fade-in";
  // Match the keyframes start state to avoid any "jump" when the animation begins.
  const initialClass =
    variant === "fade-up" ? "opacity-0 translate-y-[20px]" : "opacity-0";

  return (
    <div
      ref={ref}
      className={`will-change-transform ${
        isVisible ? animateClass : initialClass
      } ${className ?? ""}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}

