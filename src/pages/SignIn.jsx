import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SignIn.css';

const SignIn = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Здесь будет логика входа
        console.log('Вход выполнен');
        navigate('/'); // Перенаправление на главную после входа
    };

    return (
        <div className="sign-in-page">
            <h2>Вход</h2>
            <form onSubmit={handleSubmit} className="sign-in-form">
                <label>
                    Email:
                    <input type="email" name="email" required />
                </label>
                <label>
                    Пароль:
                    <input type="password" name="password" required />
                </label>
                <button type="submit">Войти</button>
            </form>
        </div>
    );
};

export default SignIn;
