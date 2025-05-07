
import { Header } from '@/components/organisms/Header'


export default function Home() {
  return (
    <>
      <Header />
      <div className="grid items-center justify-items-center min-h-screen">
        <div className="p-4">
          <h1 className="text-xl">Hello, Tailwind Themes!</h1>
          <p>Switch themes by toggling the dark mode.</p>
        </div>
      </div>
    </>
  );
}