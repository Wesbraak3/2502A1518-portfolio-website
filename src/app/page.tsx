import { RecentActivity } from '@/components/organisms/RecentActivity'

export default function Home() {
  return (
    <>
      <div className="grid items-center justify-items-center mb-8">
        <div className="mb-2">
          about me
        </div>
        read more here
      </div>
      <RecentActivity/>
    </>
  );
}