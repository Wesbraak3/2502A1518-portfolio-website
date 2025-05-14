import React from "react";

import { BannerIMG } from "../atoms/Banners";
import { Header_2 } from "../atoms/Titles";
import { Text } from "../atoms/Text";
import { Hyperlink } from "../atoms/Hyperlink";

interface ProjectCardProps {
    title?: string;
    image?: string;
    description?: string;
    link?: string;
    classname?: string;
  }
export function ProjectCard({
    title = "Project Title",
    image = "/",
    description = "Description of the project",
    link = "/",
    classname = ""
  }: ProjectCardProps) {
    return (
        <div className={`overflow-hidden rounded-lg border bg-background shadow-md w-full ${classname}`}>
        {/* Banner Image */}
        <BannerIMG image={image} alt={title} />

        {/* Content */}
        <div className="p-4 flex items-center flex-col gap-2 justify">
            <Header_2>{title}</Header_2>

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