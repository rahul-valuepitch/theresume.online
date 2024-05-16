const FormInput = ({ label, type, name, required, error, ...props }) => {
  return (
    <>
      <div className="form-group">
        <label className="form-label" htmlFor={name}>
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        <input
          type={type}
          className="form-control"
          id={name}
          name={name}
          required={required}
          {...props}
        />
        {error && <span className="text-sm text-red-500">{error}</span>}
      </div>
    </>
  );
};

export default FormInput;
