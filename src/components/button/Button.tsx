import React from 'react'
import './Button.css'

interface propTypes{
    type:'button'|'submit',
    text:string,

}


const Button = ({type,text}:propTypes) => {
  return (
    <button type={type} className='button' >{text}</button>
  )
}

export default Button