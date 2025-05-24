// component/organism/ContactForm.tsx

'use client'
import React, { useState } from "react";
import { ContactFormFields } from "../molecules/ContactFormFields";
import { Button } from "../atoms/Button";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    question: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Form submitted:", formData);
    setSubmitted(true);

    // Reset the form
    setFormData({
      name: "",
      email: "",
      question: "",
    });
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-background rounded shadow-md">
      <form onSubmit={handleSubmit}>
        <ContactFormFields formData={formData} handleChange={handleChange} />

        <div className="flex mt-4 justify-center">
          <Button label="Send Message" type="submit" className="border-2 border-primary rounded-full hover:text-background hover:bg-primary" />
        </div>

        {submitted && <p className="text-green-600 mt-2">Form submitted successfully!</p>}
      </form>
    </div>
  );
};
