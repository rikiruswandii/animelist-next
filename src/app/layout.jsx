import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Mikeu<b>Aniimee</b>",
  description: "Generated by MikeuAniimee",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-color-primary`}>
        <Navbar metadata={metadata}/>
        {children}
        <Footer mysite={metadata}/>
      </body>
    </html>
  );
}
