import React, { useCallback, useState } from "react";
import InputWithLabel from "../components/InputWithLabel";
import Button from "../components/Button";
import axios from "axios";

const FormContainer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailHandler = useCallback((e) => setEmail(e.target.value), []);

  const passwordHandler = useCallback((e) => setPassword(e.target.value), []);

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post("/something-bad", {
        email,
        password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <form onSubmit={onSubmit} method="POST">
      <div className="inputs-container">
        <InputWithLabel
          type="text"
          labelText="Email"
          value={email}
          setValue={emailHandler}
        />
        <InputWithLabel
          type="password"
          labelText="Password"
          value={password}
          setValue={passwordHandler}
        />
      </div>
      <div className="button-wrapper">
        <Button text="Sign in" submit />
      </div>
    </form>
  );
};

export default FormContainer;
