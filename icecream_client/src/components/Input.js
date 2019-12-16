import React from "react";

const Input = props => {
  const { handleChange, category, placeholder, blogEntry, type, value } = props;
  return (
    <>
      <label htmlFor={category}>{blogEntry}</label>
      <input
        id={category}
        name={category}
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
