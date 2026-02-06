import "./globals.css";
import { ThemeProviders } from '@/components/providers'

import { Header } from '@/components/organisms/Header'

const NavigationButtons = [
  { content: "Home", href: "/" },
  { content: "About", href: "/about" },
  { content: "Projects", href: "/projects" },
  // { content: "Contact", href: "/contact" }
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
