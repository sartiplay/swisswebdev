import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./animations.css";
import Navbar from "@/components/Navbar";
import CursorFollower from "@/components/cursor/Cursor";
import TransitionLayout from "@/components/hooks/TransitionLayout";
import Footer from "@/components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Swiss Web Dev",
  description: "Swiss Web Development, Design and Consulting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <CursorFollower /> */}
        <Navbar />
        <TransitionLayout>{children}</TransitionLayout>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
