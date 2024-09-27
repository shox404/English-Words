import type { Metadata } from "next";
import "./globals.scss";
import Bar from "./_components/navbar";

export const metadata: Metadata = {
  title: "Words",
  description: "English Words",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Bar />
        {children}
      </body>
    </html>
  );
}
