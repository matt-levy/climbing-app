import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import PageHeader from "../components/PageHeader/PageHeader";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Crux — Find your people. Find your next climb.",
  description: "A climbing community for sharing sends, finding partners, and discovering your next project.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <PageHeader />
        {children}
      </body>
    </html>
  );
}
