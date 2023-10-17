import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Sora } from "next/font/google";
import Footer from "@/components/Footer";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anime Flix",
  description: "Anime flix adalah platform ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={`${sora.className} bg-primary`}>
        <main className="min-h-screen w-full">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
