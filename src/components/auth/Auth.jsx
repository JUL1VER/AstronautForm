import './auth.scss';

import React from 'react';

const Auth = () => {
    return (
        <div className='auth'>
            <div className='auth__upper'>
                <h2 className='auth__upper-title'>Don't have an account yet?</h2>
                <button className='auth__button auth__upper-create' type='button'>
                    <span className='auth__button-text auth__upper-create-text'>Sign Up</span>
                </button>
            </div>
            <div className='auth__bottom'>
                <h1 className='auth__bottom-title'>Log in into your account</h1>
                <form action='' className='auth__bottom-form'>
                    <input className='auth__bottom-input' type='text' />
                    <input className='auth__bottom-input' type='password' />
                    <button className='auth__button auth__bottom-submit' type='submit'>
                        <span className='auth__button-text auth__bottom-submit-text'>Sign In</span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Auth;