import React from "react";

import { BannerIMG } from "../atoms/Banners";
import { Title } from "../atoms/Title";
import { Text } from "../atoms/Text";
import { Hyperlink } from "../atoms/Hyperlink";

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    link: string;
}

export function ProjectCard({ title, description, image, link }: ProjectCardProps) {
    return (
        <div className="overflow-hidden rounded-lg border bg-background shadow-md">
        {/* Banner Image */}
        <BannerIMG image={image} alt={title} />

        {/* Content */}
        <div className="p-4 flex items-center flex-col gap-2 justify">
            <Title size="xl">{title}</Title>

            <Text className="text-xl whitespace-normal break-words">
                {description}
            </Text>

            <Text className="mt-2">
            See more by clicking <Hyperlink href={link}>here</Hyperlink>.
            </Text>
        </div>
        </div>
    );
}