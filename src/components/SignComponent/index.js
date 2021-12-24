import React from "react";

const SignComponent = ({value}) => {
  const [isActive, setActive] = React.useState(false);

  console.log("Child render");

  return (
    <span
      className={isActive ? "sign-component-active" : "sign-component"}
      onClick={() => setActive(true)}
    >
      {value}
    </span>
  );
};

export default SignComponent;
