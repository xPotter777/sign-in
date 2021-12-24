import React from "react";

const Button = ({submit, text}) => {
  return (
    <div className="button-wrapper" {...submit && {type:"submit"}}>
      <button className="custom-button">{text}</button>
    </div>
  );
};

export default Button;
