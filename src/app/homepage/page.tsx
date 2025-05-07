
import ThemeSwitch from '@/components/atoms/ThemeSwitch'
import { Button, StyledButton } from '@/components/atoms/Buttons'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div className='grid items-center justify-items-center min-h-screen'>
          <ThemeSwitch/>
          <div className='flex w-20'>
            <Button label="text 1 with longs" href="/"/>
          </div>
          
          <StyledButton label="text 2"/>
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