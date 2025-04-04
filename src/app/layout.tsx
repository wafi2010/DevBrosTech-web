"use client"
import { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate page load completion after a short delay (optional)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust time as necessary for your content to load

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>DevBros Technology - DBT</title>
        <meta name="description" content="This is a sample Next.js page." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" sizes="any" />
        <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Loading animation with Tailwind */}
          {
            loading ? (
              <div className="flex flex-row gap-8 items-center justify-center h-screen">
  <div className="w-8 h-8 rounded-full bg-red-500 animate-bounce"></div>
  <div
    className="w-8 h-8 rounded-full bg-red-500 animate-bounce [animation-delay:-.3s]"
  ></div>
  <div
    className="w-8 h-8 rounded-full bg-red-500 animate-bounce [animation-delay:-.5s]"
  ></div>
</div>
            ) : (
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>)
          }
        </ThemeProvider>
      </body>
    </html>
  );
}
