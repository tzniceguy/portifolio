import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import NavBar from "./NavBar";
import { Footer } from "./Footer";

const space = Space_Grotesk({subsets: ['latin']});

export const metadata = {
  title: "Tzniceguy - Portifolio",
  description: "Created with NextJS and TailwindCSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={space.className}>
        <NavBar />
        <main>{children}</main>
        <Footer />
        </body>
    </html>
  );
}
