import React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";

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
        className={`${inter.variable} font-inter antialiased bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 transition-colors duration-300`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
