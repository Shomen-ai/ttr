import React from 'react';
import './SignIn.css';

const SignIn = () => {
    return (
        <div className="center-container">
            <div className="popup">
                <div className="left-side">
                    <img
                        src='./src/assets/main3.png'
                        alt="Traditional clothing"
                        className="side-image"
                    />
                </div>
                <div className="right-side">
                    <h2>Аккаунт ясагыз</h2>
                    <form>
                        <input type="text" placeholder="Исем" />
                        <input type="text" placeholder="Электрон почта" />
                        <input type="password" placeholder="Пароль" />
                        <button type="button">Аккаунт ясарга</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
