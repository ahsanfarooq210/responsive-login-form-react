import React, { useState } from "react";
import "./Inputs.css";

interface PropTypes {
  type: "text" | "password" | "email" | "phone";
  id: string;
  autoCompelete: string;
  required: boolean;
  labelText: string;
}

const Inputs = ({
  type,
  id,
  autoCompelete,
  required,
  labelText,
}: PropTypes) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  return (
    <div className="input-wrap">
      <input
        type={type}
        id={id}
        minLength={4}
        className={`input-field${isActive ? " active" : ""}`}
        autoComplete={autoCompelete}
        required={required}
        onFocus={() => {
          setIsActive(true);
        }}
        onBlur={() => {
          if (value.trim() == "") {
            setIsActive(false);
          }
        }}
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
      <label htmlFor={id}>{labelText}</label>
    </div>
  );
};

export default Inputs;
