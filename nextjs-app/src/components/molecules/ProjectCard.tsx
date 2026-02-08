"use client";

import React from "react";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { BannerIMG } from "../atoms/Banners";
import { Header_2 } from "../atoms/Titles";
import { Text } from "../atoms/Text";

interface ProjectCardProps {
  title?: string;
  image?: string;
  description?: string;
  link?: string;
  className?: string;
}

export function ProjectCard({
  title = "Project Title",
  image = "/PlaceholderImage.svg",
  description = "Description of the project",
  className = ""
}: ProjectCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Card */}
      <motion.div
        layout
        onClick={() => setOpen(true)}
        className={`cursor-pointer overflow-hidden rounded-lg border bg-background shadow-md w-full select-none`}
      >
        <BannerIMG image={image} alt={title} />

        <div className="p-4 flex flex-col items-center gap-2">
          <Header_2 className="text-center">{title}</Header_2>

          <Text className="text-xl text-center">
            {description}
          </Text>
        </div>
      </motion.div>

      {/* Expanded View */}
      <AnimatePresence>
        {open && (
          <ExpandedProject
            title={title}
            image={image}
            description={description}
            onClose={() => setOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

function ExpandedProject({
  title,
  image,
  description,
  onClose
}: {
  title: string;
  image: string;
  description: string;
  onClose: () => void;
}) {
  return (
    <>
      {/* Dark backdrop */}
      <motion.div
        className="fixed inset-0 bg-black/50 z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Expanding card */}
      <motion.div
        layout
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          layout
          className="bg-background rounded-xl shadow-xl max-w-3xl w-full overflow-hidden"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.95 }}
          onClick={(e) => e.stopPropagation()} 
        >

          <BannerIMG image={image} alt={title} />
          
          <motion.button
            layout={false}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute top-3 right-3 ..."
          >
            ✕
          </motion.button>

          <div className="p-6 space-y-4">
            <Header_2>{title}</Header_2>

            <Text className="text-lg">
              {description}
            </Text>

            <Text>
              🔥 Here’s where you add **extra details**, tech stack, links,
              screenshots, etc.
            </Text>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
