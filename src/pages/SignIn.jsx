import React from 'react';
import './SignIn.css';
import Header from "../components/Header.jsx";

import headerImg from '../assets/header.png';
import main3 from '../assets/main3.png';

const SignIn = () => {
    return (
        <div>
            <Header imageSrc={headerImg}/>
        <div className="center-container">
            <div className="popup">
                <div className="left-side">
                    <img
                        src={main3}
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
        </div>
    );
};

export default SignIn;
