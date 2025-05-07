import React from "react";
import { ReactNode } from "react";

import { Button } from '../atoms/Button'
import { Divider } from '../atoms/Divider'; 

interface ButtonListProps {
    buttons: { content: ReactNode; href?: string }[];
}

export function HButtonList({ buttons }: ButtonListProps) {
    return (
        <div className="flex gap-4 justify-center">
          {buttons.map(({ content, href }, index) => (
            <Button key={`${content}-${index}`} content={content} href={href} className="rounded"/>
          ))}
        </div>
    );
}

export function VButtonList({ buttons }: ButtonListProps) {
    return (
      <div className="flex flex-col">
        {buttons.map(({ content, href }, index) => (
          <React.Fragment key={`${index}-${content}`}>
            <Button content={content} href={href} className="w-full"/>
            {index < buttons.length - 1 && <Divider />} {/* Add Divider after each button except the last one */}
          </React.Fragment>
        ))}
      </div>
    );
}