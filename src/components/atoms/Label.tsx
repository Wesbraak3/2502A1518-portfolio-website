import React from "react";

interface LabelProp {
  label: string;
  className?: string;
}

export function Label({ label, className = "" }: LabelProp) {
  return (
    <label className={`block text-sm font-medium text-primairy ${className}`}>
      {label}
    </label>
  );
}