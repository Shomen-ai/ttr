import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Здесь будет логика регистрации
        console.log('Регистрация прошла успешно');
        navigate('/sign-in'); // Перенаправление на вход после регистрации
    };

    return (
        <div className="sign-up-page">
            <h2>Регистрация</h2>
            <form onSubmit={handleSubmit} className="sign-up-form">
                <label>
                    Имя:
                    <input type="text" name="name" required />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" required />
                </label>
                <label>
                    Пароль:
                    <input type="password" name="password" required />
                </label>
                <button type="submit">Зарегистрироваться</button>
            </form>
        </div>
    );
};

export default SignUp;
