// components/atoms/Button.tsx

import React from "react";
import Link from "next/link";

interface ButtonProps {
  label: React.ReactNode;
  href?: string;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  href,
  type = "button",
  onClick,
  className,
}) => {
  const baseClasses =
    "inline-flex items-center justify-center px-4 py-2 select-none font-bold text-text hover:text-primary rounded";
  const combinedClasses = `${baseClasses} ${className ?? ""}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {label}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses}>
      {label}
    </button>
  );
};