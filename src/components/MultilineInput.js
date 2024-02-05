
const EmailInput = ({ label, value, onChange, error }) => (
  <div>
    <label>{label}</label>
    <input type="email" value={value} onChange={(e) => onChange(e.target.value)} />
    {error && <p>{error}</p>}
  </div>
);

export default EmailInput;
