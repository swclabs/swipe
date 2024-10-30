import "./globals.css";
import Providers from "./providers";
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { auth } from "@/lib/oauth";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Swipe",
  description: "Swipe",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${GeistSans.variable} ${GeistMono.variable}`}>
        <Providers session={session}>
          <Toaster />
          {children}
        </Providers>
      </body>
    </html>
  );
}
