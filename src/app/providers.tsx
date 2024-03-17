"use client";
import { NextUIProvider } from "@nextui-org/react";
import { isMobile } from 'react-device-detect';
import { useWindowSize } from "@/utils/window-size";

const Providers = ({ children }: any) => {
    const size = useWindowSize()
    if (isMobile) {
        return (
            <div className=" flex h-[100vh] flex-col text-center justify-center text-xs">
                <p className="">Application does not support this device</p>
            </div>
        );
    }
    return (
        <NextUIProvider>
            {children}
        </NextUIProvider>
    );
};

export default Providers;