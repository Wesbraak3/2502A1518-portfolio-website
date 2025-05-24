// component/molecule/ContactFormFields.tsx

import React from "react";
import { InputField, TextArea } from "../atoms/InputField";
import { Text } from "../atoms/Text";
import { Hyperlink } from "../atoms/Hyperlink";

interface ContactFormFieldsProps {
  formData: {
    name: string;
    email: string;
    question: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export function ContactFormFields({ formData, handleChange }: ContactFormFieldsProps) {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <TextArea
            name="question"
            value={formData.question}
            onChange={handleChange}
            placeholder="Ask your question here*"
            required
          />
        </div>

        <InputField
          placeholder="Name*"
          name="name"
          value={formData.name}
          onChange={handleChange}
          type="text"
          required
        />

        <InputField
          placeholder="Email*"
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          required
        />

        {/* Privacy Declaration */}
        <Text className="text-xs text-center">
          By submitting this form, you agree to my <Hyperlink target="_blank" href="/privacy">privacy policy</Hyperlink>.
        </Text>
      </div>
    </>
  );
}