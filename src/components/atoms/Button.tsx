import { ReactNode } from "react";

interface ButtonProps {
    content: ReactNode;
    href?: string;
    action?: () => void;
    className?: string;
}

export function HeaderButton({ content, href, action, className }: ButtonProps) {
  const boolean = false;

  const baseClasses = "inline-flex items-center justify-center px-4 py-2";
  const txtClasses = "select-none text-text font-bold hover:text-primary break-words whitespace-normal";
  const bgClasses = "bg-background";
  
  const themeClasses = `${baseClasses} ${txtClasses} ${boolean ? bgClasses : ""}`;

  return href ? (
    <a href={href} className={`${themeClasses} ${className ?? ""}`}>
      {content}
    </a>
  ) : (
    <button onClick={action} className={`${themeClasses} ${className ?? ""}`}>
      {content}
    </button>
  );
}