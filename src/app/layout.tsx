import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Priyesh Rai-A Softwaer Enginner.",
  description: "Hii, I am Priyesh Rai I am a Software Enginner.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
       <head>
        <link rel="icon" href="/images/logo.png" />
      </head>
      <body className={inter.className}>
        <Header/>
        {children}
      <Footer/>
      </body>
    </html>
  );
}
