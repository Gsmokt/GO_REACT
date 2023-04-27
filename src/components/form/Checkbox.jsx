import React from "react";

const Checkbox = ({ name, value, onChange, checked, title }) => {
  return (
    <div className="form-check">
      <input
        id={name}
        type="text"
        className="form-check-input"
        value={value}
        name={name}
        onChange={onChange}
        checked={checked}
      />
      <label className="form-check-label" htmlFor={name}>
        {title}
      </label>
    </div>
  );
};

export default Checkbox;
