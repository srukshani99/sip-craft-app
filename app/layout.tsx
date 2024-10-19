import type { Metadata } from "next";
import { Plus_Jakarta_Sans as FontSans } from "next/font/google";
import "./styles/globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "sipcraft",
  description: "Explore variety of high quality cocktails images from here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontSans.className} antialiased h-screen bg-neutral-900`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
