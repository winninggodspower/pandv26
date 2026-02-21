import { Inter, Inspiration, Junge } from "next/font/google";
import { ToastContainer } from 'react-toastify';
import "./globals.css";
import NextSessionProviders from "./session-provider";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap', 
})

const inspiration = Inspiration({
  subsets: ["latin"],
   weight: "400",
  variable: "--font-inspiration",
})

const junge = Junge({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-junge",
})

export const metadata = {
  title: "Praise & Victor Weddings",
  description: "Celebrating the wedding of Praise & Victor on June 20, 2026. Access the full schedule for the ceremony and reception, find gift registry information, and kindly submit your RSVP here.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${inspiration.variable} ${junge.variable} ${inter.className} antialiased bg-[#F8F6F1]`}
      >
        <NextSessionProviders>
          {children}
        </NextSessionProviders>
         <ToastContainer />
      </body>
    </html>
  );
}
