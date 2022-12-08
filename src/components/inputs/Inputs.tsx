import React, { useState } from "react";
import './Inputs.css'

interface PropTypes{
    type:'text'|'password'|'email'|'phone',
    id:string,
    autoCompelete:string,
    required:boolean,
    labelText:string
}

const Inputs = ({type,id,autoCompelete,required,labelText}:PropTypes) => {
    const [isActive, setIsActive] = useState<boolean>(false)
  return (
    <div className="input-wrap">
      <input
        type={type}
        id={id}
        minLength={4}
        className={`input-field${isActive?" active":''}`}
        autoComplete={autoCompelete}
        required={required}
        onFocus={()=>{
            setIsActive(true)
        }}
        onBlur={()=>{
            setIsActive(false)
        }}
      />
      <label htmlFor={id}>{labelText}</label>
    </div>
  );
};

export default Inputs;
