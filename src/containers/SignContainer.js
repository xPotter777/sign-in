import React, {useCallback, useState} from 'react';
import SignComponent from "../components/SignComponent";

const SignContainer = () => {

    const [currentSign, setCurrentSign] = useState('Sign in');

    const handleSignIn = useCallback(
        () => setCurrentSign('Sign in'),
        []
    );
    const handleSignUp = useCallback(
        () => setCurrentSign('Sign up'),
        []
    );

    return (
        <div className="sign-wrapper">
            <SignComponent
                value="Sign in"
                currentSign={currentSign}
                setCurrentSign={handleSignIn}
            />
            <SignComponent
                value="Sign up"
                currentSign={currentSign}
                setCurrentSign={handleSignUp}
            />
        </div>
    );
};

export default SignContainer;
