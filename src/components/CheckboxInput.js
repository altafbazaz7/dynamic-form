
const CheckboxInput = ({ label, value, onChange }) => (
  <div>
    <input type="checkbox" checked={value} onChange={onChange} />
    <label>{label}</label>
  </div>
);

export default CheckboxInput;
