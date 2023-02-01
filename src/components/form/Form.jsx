import React from 'react';
import { useState, useEffect } from 'react';
import { sendUserLogs } from './../../api/api';
import './form.scss';

const Form = ({isRegistered}) => {
    const [userLogs, setUserLogs] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [isEmailEmpty, setIsEmailEmpty] = useState(false);
    const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);
    const [isPasswordRepeatEmpty, setIsPasswordRepeatEmpty] = useState(false);
    const [emailError, setEmailError] = useState('Email cannot be empty');
    const [passwordError, setPasswordError] = useState('Password cannot be empty');
    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        if (emailError || passwordError) {
            setFormValid()
        } else {
            setFormValid(true)
        }
    }, [emailError, passwordError, isPasswordRepeatEmpty])

    const blurHandler = (e) => {
        if (isRegistered) {
            // eslint-disable-next-line default-case
            switch (e.target.name) {
                case 'email':
                    setIsEmailEmpty(true);
                    break
                case 'password':
                    setIsPasswordEmpty(true);
                    break
            }
        } else {
            // eslint-disable-next-line default-case
            switch (e.target.name) {
                case 'email':
                    setIsEmailEmpty(true);
                    break
                case 'password':
                    setIsPasswordEmpty(true);
                    break
                case 'passwordRepeat':
                    setIsPasswordRepeatEmpty(true);
                    break
                }
        }
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        const isValid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!isValid.test(String(e.target.value).toLowerCase())) {
            setEmailError('Incorrect email')
        } else {
            setEmailError('')
        }
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        if (String(e.target.value).length < 6) {
            setPasswordError('Password must have at least 6 characters')
        } else {
            setPasswordError('')
        }
    }

    const handlePasswordRepeatChange = (e) => {
        setPasswordRepeat(e.target.value);
        if (String(e.target.value) !== password) {
            setPasswordError('Passwords do not match')
        } else if (String(e.target.value).length < 6) {
            setPasswordError('Password must have at least 6 characters')
        } else {
            setPasswordError('')
        }
    }

    const sendInfo = (e) => {
        e.preventDefault();

        const info = {
            email: email,
            password: password,
        }

        setEmail('')
        setPassword('')
        setPasswordRepeat('')

        setUserLogs(info);
        sendUserLogs(userLogs);
    };

    return (
        <form className='auth__bottom-form' onSubmit={sendInfo}>
            <div className='auth__bottom-error'>{(isEmailEmpty && emailError) && emailError}</div>
            <input
                value={email}
                onBlur={e => blurHandler(e)}
                onChange={e => handleEmailChange(e)}
                className='auth__bottom-input auth__bottom-input_email'
                type='text'
                name='email'
                placeholder='Enter your email'
            />
            <div className='auth__bottom-error'>{(isPasswordEmpty && passwordError) && passwordError}</div>
            <input
                value={password}
                onBlur={e => blurHandler(e)}
                onChange={e => handlePasswordChange(e)}
                className='auth__bottom-input auth__bottom-input_password'
                type='password'
                name='password'
                placeholder='Enter your password'
            />
            { isRegistered ?
                ''
                :
                <input
                    value={passwordRepeat}
                    onBlur={e => blurHandler(e)}
                    onChange={e => handlePasswordRepeatChange(e)}
                    className='auth__bottom-input auth__bottom-input_password auth__bottom-input_password-repeat'
                    type='password'
                    name='passwordRepeat'
                    placeholder='Repeat your password'
                />
            }
            <button disabled={!formValid} className='auth__button auth__button_bottom' type='submit' onSubmit={sendInfo}>
                <span className='auth__button-text auth__button-text_bottom'>
                    {isRegistered ? "Sign In" : "Sign Up"}
                </span>
            </button>
        </form>
    );
};

export default Form;