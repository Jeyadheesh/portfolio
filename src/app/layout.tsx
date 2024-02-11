import type { Metadata } from "next";
import {
  Inter,
  Raleway,
  Lora,
  Poppins,
  Lato,
  Open_Sans,
} from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"] });
// const playfair = Playfair({ subsets: ["latin"] });
const lora = Lora({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const open_Sans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });
const lato = Lato({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Jeyadheesh N",
  description: "Jeyadheesh N - Full Stack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={open_Sans.className}>{children}</body>
    </html>
  );
}
