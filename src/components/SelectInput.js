
const SelectInput = ({ label, value, onChange, options=[] }) => (
  <div>
    <label>{label}</label>
    <select value={value} onChange={e => onChange(e.target.value)}>
      {options.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export default SelectInput;
