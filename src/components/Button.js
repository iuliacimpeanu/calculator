import React from 'react';
import './Button.css';

const isNotOperator = (val) => {
  return !isNaN(val) || val === '.' || val === '=';
};

export const Button = (props) => {
  return (
    <div
      className={`button ${isNotOperator(props.children) ? null : 'operator'}`}
      onClick={() => props.handleClick(props.children)}
    >
      {props.children}
    </div>
  );
};
