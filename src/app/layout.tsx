import "./globals.css";
import type { Metadata } from "next";
import { headers } from "next/headers";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/app/Components/Navbar";
import Footer from "@/app/Components/Footer";
import { cookieToInitialState } from "wagmi";
import { Toaster } from "sonner";
import { config } from "@/config";
import Web3ModalProvider from "@/context";

export const metadata: Metadata = {
  title: "Artvault",
  description: "Making owning expensive art possible",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialState = cookieToInitialState(config, headers().get("cookie"));
  return (
    <html lang="en">
      <body className="mx-auto w-full px-4 p-2 sm:px-12 sm:pb-7 lg:px-8">
        <Web3ModalProvider initialState={initialState}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
            <Navbar />
            {children}
            <Toaster />
            <Footer />
          </ThemeProvider>
        </Web3ModalProvider>
      </body>
    </html>
  );
}
