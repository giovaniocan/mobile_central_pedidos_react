import { Roboto } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

// Defina os pesos corretamente como um array
const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"], // Lista os pesos que você quer usar
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Central pedido mobile",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
