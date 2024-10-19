"use client";
import { NextUIProvider } from "@nextui-org/react";
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation";
import { Toaster } from "@/components/ui/toaster";
import { SessionProvider, SessionProviderProps } from 'next-auth/react';
import NextTopLoader from "nextjs-toploader";
import NavbarComponent from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const Providers = ({
  session,
  children
}: {
  session: SessionProviderProps['session'];
  children: React.ReactNode;
}) => {
  const pathname = usePathname();

  // List of routes that should not use the layout
  const noLayoutRoutes = ['/auth/sign-up', '/auth'];

  if (noLayoutRoutes.includes(pathname)) {
    return (
      <NextUIProvider>
        <AnimatePresence>
          <SessionProvider session={session}>
            {children}
          </SessionProvider>
        </AnimatePresence>
      </NextUIProvider>
    );
  }
  return (
    <NextUIProvider>
      <AnimatePresence>
        {/* <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.25 }}
        > */}
        <NextTopLoader showSpinner={false} />
        <SessionProvider session={session}>
          <NavbarComponent session={session} />
          {children}
          <Footer />
        </SessionProvider>
        {/* </motion.div> */}
      </AnimatePresence>
    </NextUIProvider>
  );
};

export default Providers;