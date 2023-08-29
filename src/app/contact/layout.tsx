import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Contact me",
  description: "My contact page description",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    // <html lang="en">
    //   <body className={inter.className}>{children}</body>
    // </html>

    <section className="contact">
      {/* Include shared UI here e.g. a header or sidebar */}
      <h2>Contact layout</h2>

      {children}
    </section>
  );
}
