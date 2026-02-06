import React from "react";

interface BaseFieldProps {
  placeholder: string;
  name: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  id?: string;
  required?: boolean;
  className?: string;
}

interface InputFieldProps extends BaseFieldProps {
  type?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  name,
  value,
  onChange,
  id,
  type = "text",
  required = false,
  className = "",
}) => {
  const inputId = id || name;

  return (
    <input
      id={inputId}
      name={name}
      className={`border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      autoComplete={type}
    />
  );
};

export const TextArea: React.FC<BaseFieldProps> = ({
  placeholder,
  name,
  value,
  onChange,
  id,
  required = false,
  className = "",
}) => {
  const inputId = id || name;

  return (
    <textarea
      id={inputId}
      name={name}
      className={`border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      rows={4}
    />
  );
};
