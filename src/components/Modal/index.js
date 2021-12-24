import React from "react";

import TitleContainer from "../../containers/TitleContainer";
import BottomContainer from "../../containers/BottomContainer";
import FormContainer from "../../containers/FormContainer";
import SignContainer from "../../containers/SignContainer";

const Modal = () => {
  return (
    <div className="modal-container">
      <TitleContainer />
      <SignContainer />
      <FormContainer />
      <BottomContainer />
    </div>
  );
};

export default Modal;
