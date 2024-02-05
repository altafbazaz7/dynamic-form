
const RadioInput = ({ label, value, onChange, options=["Male","Female"] }) => (
  <div>
    <label>{label}</label>
    {options.map(option => (
      <div key={option}>
        <input
          type="radio"
          value={option}
          checked={value === option}
          onChange={() => onChange(option)}
        />
        <label>{option}</label>
      </div>
    ))}
  </div>
);

export default RadioInput;
