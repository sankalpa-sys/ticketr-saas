import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";
import { ConvexClientProvider } from "../components/ConvexClientProvider";
import SyncUserWithConvex from "@/components/SyncUserWithConvex";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Ticketing SAAS",
  description: "Your comprehensive ticketing platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexClientProvider>
      <ClerkProvider>
        <html lang="en">
          <body>
            <Header />
            <SyncUserWithConvex />
            {children}
            <Toaster />
          </body>
        </html>
      </ClerkProvider>
    </ConvexClientProvider>
  );
}
