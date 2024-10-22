"use client";
import Footer from "@/components/layout/footer";
import NavbarComponent from "@/components/layout/navbar";
import { NextUIProvider } from "@nextui-org/react";
import { AnimatePresence } from "framer-motion";
import { SessionProvider, SessionProviderProps } from "next-auth/react";
import { usePathname } from "next/navigation";
import NextTopLoader from "nextjs-toploader";

const Providers = ({
  session,
  children,
}: {
  session: SessionProviderProps["session"];
  children: React.ReactNode;
}) => {
  const pathname = usePathname();

  // List of routes that should not use the layout
  const noLayoutRoutes = ["/auth/sign-up", "/auth"];

  if (noLayoutRoutes.includes(pathname)) {
    return (
      <NextUIProvider>
        <AnimatePresence>
          <SessionProvider session={session}>{children}</SessionProvider>
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
          <main className="min-h-screen">
            <NavbarComponent session={session} />
            {children}
            <Footer />
          </main>
        </SessionProvider>
        {/* </motion.div> */}
      </AnimatePresence>
    </NextUIProvider>
  );
};

export default Providers;
