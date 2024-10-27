"use client";
import Footer from "@/components/layout/footer";
import NavbarComponent from "@/components/layout/navbar";
import NavbarUser from "@/components/layout/navbar-user";
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
        <NextTopLoader showSpinner={false} />
        <SessionProvider session={session}>
          <main className="min-h-screen">
            <NavbarUser session={session} />
            <NavbarComponent session={session} />
            {children}
            <Footer />
          </main>
        </SessionProvider>
      </AnimatePresence>
    </NextUIProvider>
  );
};

export default Providers;
