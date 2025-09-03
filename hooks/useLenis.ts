"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

export function useLenis(options?: ConstructorParameters<typeof Lenis>[0]) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      ...options,
      // no custom easing here, use default
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [options]);

  return lenisRef;
}
