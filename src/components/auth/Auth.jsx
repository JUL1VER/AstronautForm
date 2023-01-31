import './auth.scss';
import { useState } from 'react';
import React from 'react';
import Form from '../form/Form';

const Auth = () => {
    const [isRegistered, setIsRegistered] = useState(true);

    return (
        <div className='auth'>
            <div className='auth__upper'>
                <h2 className='auth__upper-title'>
                    {isRegistered ? "Don't have an account yet?" : "Already have an account?"}
                </h2>
                <button
                    className='auth__button auth__button_upper'
                    type='button'
                    onClick={() => setIsRegistered(prev => !prev)}
                >
                    <span className='auth__button-text auth__button-text_upper'>
                        {isRegistered ? "Sign Up" : "Sign In"}
                    </span>
                </button>
            </div>
            <div className='auth__bottom'>
                <h1 className='auth__bottom-title'>
                    {isRegistered ? "Log in into your account" : "Create your account now"}
                </h1>
                <Form isRegistered={isRegistered}/>
            </div>
        </div>
    );
};

export default Auth;