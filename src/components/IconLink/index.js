import React from 'react';

const IconLink = ({href,children}) => {
    return (
        <div className="icon-wrapper">
            <a href={href} target="_blank">
                {children}
            </a>
        </div>
    );
};

export default IconLink;
