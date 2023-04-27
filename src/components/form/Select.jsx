import React from "react";

const Select = ({
  name,
  title,
  value,
  onChange,
  placeHolder,
  options,
  errorDiv,
  errorMsg,
}) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {title}
      </label>
      <select
        className="form-select"
        name={name}
        id={name}
        value={value}
        onChange={onChange}
      >
        <option value="">{placeHolder}</option>
        {options.map((option) => {
          return (
            <option key={option.id} value={option.id}>
              {option.value}
            </option>
          );
        })}
      </select>
      <div className={errorDiv}>{errorMsg}</div>
    </div>
  );
};

export default Select;
