import type { Metadata } from "next";
import "./globals.css";
import { Poppins, Caveat, Yeseva_One } from "next/font/google";
import ResponsiveNav from "@/Home/Layout/ResponsiveNav";
import Footer from "@/Home/Footer/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
});

const yeseva = Yeseva_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-yeseva",
});

export const metadata: Metadata = {
  title: "Saloni",
  description: "Salon & Beauty Template",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
    ${poppins.variable} 
    ${caveat.variable} 
    ${yeseva.variable}
    antialiased
  `}>
        <ResponsiveNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
