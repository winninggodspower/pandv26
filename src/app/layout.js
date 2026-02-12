import { Geist, Geist_Mono } from "next/font/google";
import { ToastContainer, toast } from 'react-toastify';
import "./globals.css";
import NextSessionProviders from "./session-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Praise & Victor - Wedding Invitation",
  description: "Join us as Praise and Victor get married. June 26th, 2026 in Lagos, Nigeria.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextSessionProviders>
          {children}
        </NextSessionProviders>
         <ToastContainer />
      </body>
    </html>
  );
}
