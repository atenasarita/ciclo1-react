<<<<<<< HEAD
// src/components/FormField.jsx
=======
>>>>>>> 6ffaa46b548c6eeb14372a8e482626e01232bdd8
export default function FormField({
  label,
  id,
  type = 'text',
  value,
  onChange,
  disabled = false,
<<<<<<< HEAD
  className = 'field'   // default className
=======
  className = 'field'   
>>>>>>> 6ffaa46b548c6eeb14372a8e482626e01232bdd8
}) {
  return (
    <div className="form-field">
      <label htmlFor={id}>{label}</label>
      <input
        className={className}
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required
      />
    </div>
  );
}
