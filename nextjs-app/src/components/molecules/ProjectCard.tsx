import React from "react";

import { BannerIMG } from "../atoms/Banners";
import { Header_2 } from "../atoms/Titles";
import { Text } from "../atoms/Text";
// import { Hyperlink } from "../atoms/Hyperlink";

interface ProjectCardProps {
  title?: string;
  image?: string;
  description?: string;
  link?: string;
  className?: string;  // fixed casing
}

export function ProjectCard({
  title = "Project Title",
  image = "/PlaceholderImage.svg",
  description = "Description of the project",
  // link = "/",
  className = ""
}: ProjectCardProps) {
  return (
    <div className={`overflow-hidden rounded-lg border bg-background shadow-md w-full ${className}`}>
      {/* Banner Image */}
      <BannerIMG image={image} alt={title} />

      {/* Content */}
      <div className="p-4 flex flex-col items-center gap-2">
        <Header_2 className="text-center">{title}</Header_2>

        <Text className="text-xl whitespace-normal break-words text-center">
          {description}
        </Text>

        <Text className="mt-2">
          See more by clicking{" "}
          {/* <Hyperlink href={link} target="_blank"> here </Hyperlink> */}
          . (coming soon)
        </Text>
      </div>
    </div>
  );
}