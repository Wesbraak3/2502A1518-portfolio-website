import React from "react";
import { Header_1 } from "../atoms/Titles";
import { Text } from "../atoms/Text";
import { ContactForm } from "@/components/organisms/ContactForm";

export const ContactTemplate: React.FC = () => (
  <div className="w-[90%] max-w-6xl mx-auto mb-16">
    <Header_1 className="text-center mb-12">Contact</Header_1>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
      {/* LEFT COLUMN: Explanation */}
      <div className="text-left">
        <Header_1 className="mb-4 text-center">Do you have a question?</Header_1>
        <Text className="text-base leading-relaxed text-center">
          Do you have a question about one of my projects? <br />
          Send your question through this form, and I’ll contact you as soon as I’m able.
        </Text>
      </div>

      {/* RIGHT COLUMN: Form */}
      <div>
        <ContactForm />
      </div>
    </div>
  </div>
);