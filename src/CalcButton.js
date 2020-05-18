import React from 'react';
import './App.css';

function CalcButton({icon, id, className, action}){
  return(
  <button id={id}
    className={`button ${className}`}
    style={{gridArea: id}}
    onClick={action}>
      {icon}
  </button>
    )
}

export default CalcButton;
