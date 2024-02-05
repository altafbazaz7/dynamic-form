const TextInput = ({ label, value, onChange, error }) => (
  <div>
    <label>{label}</label>
    <input type="text" value={value} onChange={(e) => onChange(e.target.value)} />
    {error && <p>{error}</p>}
  </div>
);

export default TextInput;
