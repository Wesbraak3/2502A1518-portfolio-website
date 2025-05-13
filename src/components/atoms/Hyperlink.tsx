import React from "react";


interface HyperlinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
    target?: "_blank" | "_self" | "_parent" | "_top";
    rel?: string;
  }


  export function Hyperlink({ href, children, className = "", target = "_self", rel }: HyperlinkProps) {
    return (
      <a href={href} className={`text-primary hover:underline ${className}`} target={target} rel={rel}>
        {children}
      </a>
    );
  }