import { useState } from "react";

const Form = ({ fields, onSubmit }) => {
  const [formDetails, setFormDetails] = useState({});

  const handleInputChange = (e, key) => {
    setFormDetails((prev) => ({
      ...prev,
      [key]: e.target.value,
    }));
  };

  const handleRadioChange = (e, key) => {
    setFormDetails((prev) => ({
      ...prev,
      [key]: e.target.value,
    }));
  };

  const handleSelectChange = (e, key) => {
    setFormDetails((prev) => ({
      ...prev,
      [key]: e.target.value,
    }));
  };

  const handleCheckboxChange = (e, key) => {
    setFormDetails((prev) => ({
      ...prev,
      [key]: e.target.checked,
    }));
  };

  const validateInput = (inputType, value) => {
    switch (inputType) {
      case "text":
        return value?.trim() !== "";
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      default:
        return true;
    }
  };

  const renderInputField = (inputType, label, key) => {
    const isValid = validateInput(inputType, formDetails[key]);
    const error = !isValid ? "This field is required" : "";

    switch (inputType) {
      case "text":
        return (
          <InputField
            key={key}
            label={label}
            value={formDetails[key]}
            onChange={(e) => handleInputChange(e, key)}
            error={error}
          />
        );
      case "radio":
        return (
          <RadioField
            label={label}
            value={formDetails.gender}
            onChange={(e) => handleRadioChange(e, key)}
          />
        );
      case "select":
        return (
          <SelectField
            label={label}
            value={formDetails.place}
            onChange={(e) => handleSelectChange(e, key)}
            options={["Delhi", "Mumbai", "Kolkata"]}
          />
        );
      case "checkbox":
        return (
          <CheckboxField
            label={label}
            value={formDetails.consent}
            onChange={(e) => handleCheckboxChange(e, key)}
          />
        );
      default:
        return null;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formDetails);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form__wrapper">
        {fields && fields.map(({ inputType, label, key }) =>
          renderInputField(inputType, label, key)
        )}

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form;

const InputField = ({ label, value, onChange, error }) => {
  return (
    <div>
      <label>{label}</label>
      <input type="text" value={value} onChange={onChange} />
      {error && <p>{error}</p>}
    </div>
  );
};

const RadioField = ({ label, value, onChange, options }) => {
  return (
    <div className="gender__section">
      <label>{label}</label>
      {["Male", "Female"].map((option) => (
        <div key={option}>
          <input
            type="radio"
            value={option}
            checked={value === option}
            onChange={onChange}
          />
          <label>{option}</label>
        </div>
      ))}
    </div>
  );
};

const SelectField = ({ label, value, onChange, options }) => {
  return (
    <div className="select__element">
      <label>{label}</label>
      <select value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

const CheckboxField = ({ label, value, onChange }) => {
  return (
    <div className="checkbox__element">
      <input type="checkbox" value={value} onChange={onChange} />
      <label>{label}</label>
    </div>
  );
};
