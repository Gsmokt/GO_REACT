import React from "react";

const TextArea = ({
  name,
  title,
  value,
  onChange,
  rows,
  errorDiv,
  errorMsg,
}) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {title}
      </label>
      <textarea
        className="form-control"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
      />
      <div className={errorDiv}>{errorMsg}</div>
    </div>
  );
};

export default TextArea;
