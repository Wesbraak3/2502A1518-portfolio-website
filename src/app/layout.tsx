import "./globals.css";
import { ThemeProviders } from '@/components/providers'

import { Header } from '@/components/organisms/Header'

const NavigationButtons = [
  { content: "Home", href: "/home" },
  { content: "About", href: "/about" },
  { content: "Projects", href: "/projects" },
  { content: "Contact", href: "/contact" },
  { content: "FAQ", href: "/faq" },
  { content: "Portal", href: "/portal" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
