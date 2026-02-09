import "./globals.css";
import { ThemeProviders } from '@/components/providers'
import type { Metadata } from "next";

import { Header } from '@/components/organisms/Header'

export const metadata: Metadata = {
  title: "Statusloop",
  description: "Personal portfolio of Wes te Braak",
};

const NavigationButtons = [
  { content: "Home", href: "/" },
  { content: "About Me", href: "/about" },
  { content: "Projects", href: "/projects" },
  // { content: "Contact", href: "/contact" }
];

export default function RootLayout({
  children,
}: Readonly<
  {children: React.ReactNode;}
>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProviders>
          <Header buttons={NavigationButtons} />
            {children}
        </ThemeProviders>
      </body>
    </html>
  );
}