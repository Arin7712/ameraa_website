import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "./Sections/Nav";
import Footer from "./Sections/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Add required weights
  variable: "--font-poppins", // Define a CSS variable
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Amera Finnway",
  description: "Get funds for your next project",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
