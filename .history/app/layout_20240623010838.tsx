import type { Metadata } from "next";

import "./globals.css";

const inter = 

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
      <body >{children}</body>
    </html>
  );
}
