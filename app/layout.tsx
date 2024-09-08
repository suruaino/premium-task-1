import type { Metadata } from "next";
import { Inter, Jost } from "next/font/google";
import dynamic from 'next/dynamic';
// import Header from "../components/main-header/MainHeader"
import Footer from "../components/main-footer/Mainfooter"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Suru Designo App | Task-one",
  description: "Created by Suru Emmanuel",
};

const Header = dynamic(() => import('../components/main-header/MainHeader'), { ssr: false });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={jost.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
