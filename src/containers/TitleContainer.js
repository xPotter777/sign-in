import React from 'react';
import {ReactComponent as CrossIcon} from "../Icons/cross.svg";

const TitleContainer = React.memo(() => {
    return (
        <div className="modal-title">
                  <span className="title">
                  Welcome to <span style={{color:'#3B85F4'}}>e</span>Bit
                  </span>
            <span className="cross-icon">
                  <CrossIcon/>
              </span>
        </div>
    );
});

export default TitleContainer;
