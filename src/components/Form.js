import React, { useState } from "react";
import TextInput from "./TextInput";
import RadioInput from "./RadioInput";
import SelectInput from "./SelectInput";
import CheckboxInput from "./CheckboxInput";
import EmailInput from "./MultilineInput";

const Form = ({ fields, onSubmit }) => {
  const [formDetails, setFormDetails] = useState({});
  const [errors, setErrors] = useState({});

  const handleInputChange = (key, value) => {
    setFormDetails((prev) => ({
      ...prev,
      [key]: value,
    }));
    validateField(key, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formDetails);
    }
  };

  const validateField = (key, value) => {
    const field = fields.find((field) => field.key === key);
    if (!field) return;

    const { validation } = field;
    if (!validation) return;

    const isValid = validation(value);
    setErrors((prev) => ({
      ...prev,
      [key]: isValid ? "" : "Invalid input",
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};
    fields.forEach((field) => {
      const { key, validation } = field;
      if (validation) {
        const isValidField = validation(formDetails[key]);
        if (!isValidField) {
          newErrors[key] = "Invalid input";
          isValid = false;
        }
      }
    });
    setErrors(newErrors);
    return isValid;
  };

  return (
    <form onSubmit={handleSubmit} className="form__wrapper">
      {fields.map((field) => (
        <FormField
          key={field.key}
          {...field}
          value={formDetails[field.key] || ""}
          error={errors[field.key] || ""}
          onChange={(value) => handleInputChange(field.key, value)}
        />
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

const FormField = (props) => {
  const { inputType } = props;
  switch (inputType) {
    case "text":
      return <TextInput {...props} />;
    case "email":
      return <EmailInput {...props} />;
    case "radio":
      return <RadioInput {...props} />;
    case "select":
      return <SelectInput {...props} />;
    case "checkbox":
      return <CheckboxInput {...props} />;
    default:
      return null;
  }
};

export default Form;
