
import '@/components/atoms/ThemeSwitch'
import ThemeSwitch from '@/components/atoms/ThemeSwitch'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeSwitch/>
        <div className="p-4">
          <h1 className="text-xl">Hello, Tailwind Themes!</h1>
          <p>Switch themes by toggling the dark mode.</p>
        </div>
        {children}
      </body>
    </html>
  )
}