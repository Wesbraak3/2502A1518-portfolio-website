import React from "react";
import Link from "next/link";

interface HyperlinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

export function Hyperlink({
  href,
  children,
  className = "",
  target,
  rel,
}: HyperlinkProps) {
  return (
    <Link href={href}
      className={`text-primary hover:underline hover:text-accent ${className}`}
      target={target}
    >
      {children}
    </Link>
  );
}
