import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";



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
      
      <body >
        
      <Navbar/>
      <main className="relati">
      {children}

      </main>
      
      <Footer/>
      </body>
    </html>
  );
}
