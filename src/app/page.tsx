
import { Introduction } from "@/data/aboutMe";
import { Header_1 } from "@/components/atoms/Titles"
import { Text } from "@/components/atoms/Text"

import { RecentActivity } from '@/components/organisms/RecentActivity'

export default function Home() {
  return (
    <div className="grid w-[80%] text-center mx-auto mb-8">
      <div className="space-y-6 mb-12">
        <Header_1>Short Introduction</Header_1>

        <Text>{Introduction}</Text>
      </div>
      
      <RecentActivity/>
    </div>
  );
}