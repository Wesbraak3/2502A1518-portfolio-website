import { ReactNode } from "react";

interface ButtonProps {
    label: string;
    icon?: ReactNode;
    action?: () => void;
    href?: string;
    className?: string;
}

export function Button({ label, icon, action, href, className }: ButtonProps) {
    const content = (
        <>
          {icon && <span className={label?.length > 0 ? "mr-2" : ""}>{icon}</span>}
          {label}
        </>
    );
    
    const baseClasses = "inline-flex items-center justify-center px-4 py-2 text-text hover:bg-primary hover:text-background break-words whitespace-normal";

  return href ? (
    <a href={href} className={`${baseClasses} ${className ?? ""}`}>
      {content}
    </a>
  ) : (
    <button onClick={action} className={`${baseClasses} ${className ?? ""}`}>
      {content}
    </button>
  );
}

export function StyledButton({ label, href }: ButtonProps) {
    return (
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
            {label}
        </button>
    );
}