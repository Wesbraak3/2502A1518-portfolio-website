import React from "react";

import { Introduction, Profile } from "@/data/aboutMe";
import { Header_1 } from "@/components/atoms/Titles"
import { Text } from "@/components/atoms/Text"

export default function AboutPage() {
    return (
        <div className="w-[80%] text-center mx-auto space-y-6 pt-4">
            <Header_1>About Me</Header_1>
            <Text>{Introduction}</Text>
            
            <Header_1>Profile</Header_1>
            <Text className="whitespace-pre-line">{Profile}</Text>
        </div>
    );
}