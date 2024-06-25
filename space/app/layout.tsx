import type { Metadata } from "next";
import "./globals.css";
import Header from "./ui/header";
import { GeistSans } from "geist/font/sans";


export const metadata: Metadata = {
  title: "SpaceScope",
  description: "Take a look at the beginning of everything. Space.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <Header/>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
