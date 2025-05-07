
import ThemeSwitch from '@/components/molecules/ThemeSwitch'
import { Header } from '@/components/organisms/Header'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Header/>
      <body>
        <div className='grid items-center justify-items-center min-h-screen'>
          <ThemeSwitch/>
          
          <div className="p-4">
            <h1 className="text-xl">Hello, Tailwind Themes!</h1>
            <p>Switch themes by toggling the dark mode.</p>
          </div>
          {children}
        </div>
      </body>
    </html>
  )
}