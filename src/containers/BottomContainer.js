import React from 'react';
import IconLink from "../components/IconLink";
import {ReactComponent as GoogleIcon} from "../Icons/google-icon.svg";
import {ReactComponent as SteamIcon} from "../Icons/steam-icon.svg";

const BottomContainer = () => {
    return (
        <div className="bottom-wrapper">
            <div className="sign-in-wrapper">
                <div className="borderline"></div>
                <span className="sign-in">Sign in with</span>
                <div className="borderline"></div>
            </div>
            <div className="icon-container">
                <IconLink
                    href='https://www.google.com'>
                    <GoogleIcon/>
                </IconLink>
                <IconLink
                    href='https://store.steampowered.com/'>
                    <SteamIcon/>
                </IconLink>
            </div>
        </div>


    );
};

export default BottomContainer;
