import React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Joel Ymele Leki - Senior Full Stack Engineer",
  description:
    "Specializing in React & Next.js to build high-performance, user-centric web applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-inter antialiased bg-zinc-100 text-zinc-900`}
      >
        {children}
      </body>
    </html>
  );
}
