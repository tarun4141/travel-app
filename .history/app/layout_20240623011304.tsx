import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";



export const metadata: Metadata = {
  title: "Travel App",
  description: "Travel next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Navbar
      <body >{children}</body>
    </html>
  );
}
