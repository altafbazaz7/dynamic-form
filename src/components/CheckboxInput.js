
const CheckboxInput = ({ label, value, onChange }) => {
  const handleCheckboxChange = () => {
    onChange(!value);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={value}
        onChange={handleCheckboxChange}
      />
      <label>{label}</label>
    </div>
  );
};

export default CheckboxInput;
