import React from 'react';
import Auth from '../../components/auth/Auth.jsx';
import './authPage.scss';

const AuthPage = () => {
    return (
        <div className='auth-page'>
            <img src={require('./../../img/mars.webp')} alt="Mars" className='auth-page__mars'/>
            <img src={require('./../../img/earth.webp')} alt="Earth" className='auth-page__earth'/>
            <img src={require('./../../img/spaceman.webp')} alt="Astronaut" className='auth-page__spaceman'/>
            <img src={require('./../../img/spaceship.webp')} alt="Rocket" className='auth-page__spaceship'/>
            <Auth/>
        </div>
    );
};

export default AuthPage;