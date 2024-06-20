const FormRadioSlide = ({
  label,
  name,
  options = [],
  error,
  value = [],
  onChange,
  className,
  ...props
}) => {
  return (
    <div className={`form-group ${className}`}>
      <label className="form-label" htmlFor={name}>
        {label}
      </label>
      <div className="form-radio-slide">
        <div className="form-radio-slide-item">
          <input type="radio" id="slide-1" name={name} value="1" />
          <label htmlFor="slide-1">Bad</label>
        </div>
        <div className="form-radio-slide-item">
          <input type="radio" id="slide-2" name={name} value="1" />
          <label htmlFor="slide-2">Ok</label>
        </div>
        <div className="form-radio-slide-item">
          <input type="radio" id="slide-3" name={name} value="1" />
          <label htmlFor="slide-3">Average</label>
        </div>
        <div className="form-radio-slide-item">
          <input type="radio" id="slide-4" name={name} value="1" />
          <label htmlFor="slide-4">Good</label>
        </div>
        <div className="form-radio-slide-item">
          <input type="radio" id="slide-5" name={name} value="1" />
          <label htmlFor="slide-5">Best</label>
        </div>
      </div>
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
};

export default FormRadioSlide;
