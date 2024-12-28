
const Input = ({ label, type = "text", value, onChange, required = false }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        style={{ display: "block", margin: "10px 0", padding: "8px", width: "100%" }}
      />
    </div>
  );
};

export default Input;
