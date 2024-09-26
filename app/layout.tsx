import type { Metadata } from "next";
import { Link, Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import "./globals.scss";
import Words from "./_components/words";

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
        <Navbar>
          <NavbarBrand>
            <Link href="/">
              <Words />
            </Link>
          </NavbarBrand>
          <NavbarContent justify="end">
            <Link href="/know">Know</Link>
            <Link href="/test">Test</Link>
          </NavbarContent>
        </Navbar>
        {children}
      </body>
    </html>
  );
}
