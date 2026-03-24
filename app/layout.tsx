import Navbar from "@/components/Home/Navbar";
import WhatsAppFloat from "@/components/Home/WhatsAppFloat";
import type { Metadata } from "next";
import { IBM_Plex_Mono, Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Articulate Agency | Engaging eLearning Design & Development",
  description:
    "Articulate Agency designs interactive eLearning courses with Articulate Storyline, modern visual design, and instructional strategy for teams that want training that actually works.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sora.variable} ${ibmPlexMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
