import React from 'react';

const InputWithLabel = React.memo(({labelText, type,value,setValue}) => {
    return (
        <div className="inputs-wrapper">
            <label htmlFor="pwd" className="input-label">{labelText}</label>
            <input  type={type}  autoComplete="new-password" value={value} onChange={setValue}  className="input"/>
        </div>
    );
});

export default InputWithLabel;
