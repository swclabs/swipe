import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import { auth } from "@/lib/oauth";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin", 'vietnamese'] });
const roboto = Roboto({
  weight: '400',
  subsets: ['latin', 'vietnamese'],
})

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
      <body className={inter.className}>
        <Providers session={session}>
          <Toaster />
          {children}
        </Providers>
      </body>
    </html>
  );
}
