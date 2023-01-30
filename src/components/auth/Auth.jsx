import './auth.scss';

import React from 'react';

const Auth = () => {
    return (
        <div className='auth'>
            <div className='auth__wrapper'>
                <h1 className='auth__title'>Create account</h1>
                <input className='auth__input' type='text' />
                <input className='auth__input' type='password' />
                <button className='auth__submit' type='submit'>Sign Up</button>
            </div>
        </div>
    );
};

export default Auth;