/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

export default function FormHandler(formSections) {
  console.log("sec is", formSections);

  const initialFormData = formSections.reduce((acc, section) => {
    section.fields.forEach((field) => {
      acc[field.name] = field.type === "checkbox" ? [] : "";
    });
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialFormData);
  console.log("form data is", formData);

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "file") {
      const file = files[0]; // Get the first file selected
      if (file) {
        setFormData((prevState) => ({
          ...prevState,
          [name]: file.name,
        }));
      }
    } else if (type === "checkbox") {
      const newValue = checked
        ? [...(formData[name] || []), value]
        : (formData[name] || []).filter((item) => item !== value);
      setFormData((prevState) => ({
        ...prevState,
        [name]: newValue,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.businessName)
      newErrors.businessName = "Business name is required";
    if (!formData.registrationNumber)
      newErrors.registrationNumber = "Registration number is required";
    if (!formData.ownerName) newErrors.ownerName = "Owner name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (formData.phone && !/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return {
    formData,
    errors,
    validateForm,
    handleInputChange,
    handleSubmit,
  };
}
