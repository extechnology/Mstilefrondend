// hooks/useLenis.ts
import { useRef } from "react";
import { useAnimationFrame } from "framer-motion";
import type { LenisRef } from "lenis/react";

export const useLenis = () => {
    const lenisRef = useRef<LenisRef>(null);

    // ⛓ Sync Lenis with Framer Motion
    useAnimationFrame((t) => {
        lenisRef.current?.lenis?.raf(t);
    });

    return lenisRef;
};
