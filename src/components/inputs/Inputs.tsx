import React, { useState } from "react";
import './Inputs.css'

const Inputs = () => {
    const [isActive, setIsActive] = useState<boolean>(false)
  return (
    <div className="input-wrap">
      <input
        type="text"
        id="name"
        minLength={4}
        className={`input-field${isActive?" active":''}`}
        autoComplete="email"
        required
        onFocus={()=>{
            setIsActive(true)
        }}
        onBlur={()=>{
            setIsActive(false)
        }}
      />
      <label htmlFor="name">Name</label>
    </div>
  );
};

export default Inputs;
