import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Eid-Joy – Celebrate Eid with Fun, Games & Good Deeds!",
  description:
    "Experience the joy of Eid like never before! Play fun games to guess your total Eidi, test your knowledge with an exciting Eid quiz, and generate a meaningful good deed to do on this special occasion. Join the celebration now!",
  keywords:
    "Eid celebration, Eid games, Guess Eidi game, Eid quiz, Good deeds for Eid, Fun Eid activities, Eid traditions, Interactive Eid website, Eid predictions",
  author: "Aushah Gowhar Wani",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
