import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import NavbarComponent from "@/components/ui-app/navbar";
import FooterComponent from "@/components/ui-app/footer";

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
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <NavbarComponent />
          {children}
          <FooterComponent />
        </Providers>
      </body>
    </html>
  );
}
