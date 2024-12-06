import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";
import { ConvexClientProvider } from "../components/ConvexClientProvider";
import SyncUserWithConvex from "@/components/SyncUserWithConvex";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Ticketr: Anyone can sell tickets",
  description:
    "Ticketr is a revolutionary ticketing platform that allows anyone to become a ticket seller effortlessly. Whether you're hosting a small gathering, a large-scale event, or managing recurring activities, Ticketr gives you the tools to create, manage, and sell tickets with ease. Our user-friendly interface, secure payment options, and real-time analytics make it simple for individuals and businesses to connect with their audiences. With Ticketr, event management is no longer limited to professionals—anyone can now sell tickets and share experiences seamlessly.",
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
