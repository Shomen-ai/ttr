import React from 'react';
import './SignUp.css';

const SignUp = () => {
    return (
        <div className="center-container">
            <div className="popup">
                <div className="left-side">
                    <img
                        src='./src/assets/main2.png'
                        alt="Traditional clothing"
                        className="side-image"
                    />
                </div>
                <div className="right-side">
                    <h2>Керу</h2>
                    <form>
                        <input type="text" placeholder="Email яки исем" />
                        <input type="password" placeholder="Пароль" />
                        <div className="forgot-text">Оныттыгыз?</div>
                        <button type="button">Керергэ</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
