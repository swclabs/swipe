"use client";
import { NextUIProvider } from "@nextui-org/react";
import { isMobile } from 'react-device-detect';
import { motion, AnimatePresence, useAnimation } from "framer-motion"

const Providers = ({ children }: any) => {
    if (isMobile) {
        return (
            <div className=" flex h-[100vh] flex-col text-center justify-center text-xs">
                <p className="">Application does not support this device</p>
            </div>
        );
    }
    return (
        <NextUIProvider>
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.25 }}
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </NextUIProvider>
    );
};

export default Providers;