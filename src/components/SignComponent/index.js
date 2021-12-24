import React from "react";

const SignComponent = React.memo(({value, currentSign, setCurrentSign,index}) => {

  const isActive = currentSign === value
  return (
    <span
      className={isActive ? "sign-component-active" : "sign-component"}
      onClick={setCurrentSign}
    >
      {value}
    </span>
  );
});

export default SignComponent;
