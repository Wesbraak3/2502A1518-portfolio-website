import React from "react";

interface LabelProp {
  label: string;
  className?: string;
}

export function Label({ label, className = "" }: LabelProp) {
  return (
    <label className={`block text-m text-text ${className}`}>
      {label}
    </label>
  );
}