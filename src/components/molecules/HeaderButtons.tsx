// components/molecules/ButtonList.tsx
import React from "react";
import { Button } from '../atoms/Button';

interface HeaderButtonsProps {
  buttons: { content: React.ReactNode; href?: string}[];
}

export function HeaderButtons({ buttons }: HeaderButtonsProps) {
  return (
    <div className="flex gap-4 justify-center">
      {buttons.map(({ content, href }, index) => (
        <Button
          key={`${content}-${index}`}
          label={content}
          href={href}
          className="hover:text-primary"
        />
      ))}
    </div>
  );
}