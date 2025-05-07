import React from "react";

import { Button } from '../atoms/Buttons'
import { Divider } from '../atoms/Divider'; 

interface ButtonListProps {
    buttons: { label: string; href?: string }[];
}

export function HButtonList({ buttons }: ButtonListProps) {
    return (
        <div className="flex gap-4 justify-center">
          {buttons.map(({ label, href }, index) => (
            <Button key={`${label}-${index}`} label={label} href={href} className="rounded"/>
          ))}
        </div>
    );
}

export function VButtonList({ buttons }: ButtonListProps) {
    return (
      <div className="flex flex-col">
        {buttons.map(({ label, href }, index) => (
          <React.Fragment key={`${index}-${label}`}>
            <Button label={label} href={href} className="w-full"/>
            {index < buttons.length - 1 && <Divider />} {/* Add Divider after each button except the last one */}
          </React.Fragment>
        ))}
      </div>
    );
}