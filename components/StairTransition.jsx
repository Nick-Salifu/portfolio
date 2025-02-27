"use client"

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Stairs from "./Stairs";

export default function StairTransition() {
    const pathname = usePathname();
    return (
        <>
            <AnimatePresence mode="wait">
                <div key={pathname}>
                    <div className="w-screen h-screen top-0 left-0 right-0 fixed pointer-events-none z-40 flex">
                        <Stairs />
                    </div>

                    <motion.div
                        className="h-screen w-screen top-0 fixed bg-[#1c1c22] pointer-events-none"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 0, transition: { delay: 1, duration: 0.4, ease: 'easeInOut'}}}
                    />
                </div>
            </AnimatePresence>
        </>
    )
}