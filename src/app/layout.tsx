import "./globals.css";
import type { Metadata } from "next";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap",
  weight: "500",
  variable: "--quicksand",
});

export const metadata: Metadata = {
  title: "Portfolio | Negra Hodzic",
  description: "This portoflio is generated with NextJs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
