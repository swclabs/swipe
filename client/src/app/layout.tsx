import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NextTopLoader from 'nextjs-toploader';
import "./globals.css";
import Providers from "./providers";
import NavbarComponent from "@/components/common/navbar";
import FooterComponent from "@/components/common/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Swipe",
  description: "Swipe",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className=" scroll-smooth">
      <body className={inter.className}>
        <NextTopLoader showSpinner={false} />
        <Providers>
          <NavbarComponent />
          {children}
          <FooterComponent />
        </Providers>
      </body>
    </html>
  );
}
