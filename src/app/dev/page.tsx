'use client'

import React, { useState } from "react";
import { InputField } from "@/components/atoms/InputField";
import { Button } from "@/components/atoms/Button";
import { ContactFormFields } from "@/components/molecules/ContactFormFields";

export default function DevPage() {
  const [name, setName] = useState("");

  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = () => {
    if (!name) {
      alert(`Please fill in all fields. ${name}`);
      return;
    }
    setShowPopup(true);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <ContactFormFields/>
    </div>
  );
}
