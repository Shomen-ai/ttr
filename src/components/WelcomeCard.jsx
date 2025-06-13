import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WelcomeCard.css';

const WelcomeCard = ({ image }) => {
    const navigate = useNavigate();

    const handleSignIn = () => {
        navigate('/sign-in');
    };

    const handleSignUp = () => {
        navigate('/sign-up');
    };

    return (
        <div className="welcome-card">
            <div className="welcome-content">
                <h2 className="welcome-title">“Тел дигән дәрья бар”</h2>
                <p className="welcome-subtitle">Татар телен өйрәнер өчен онлайн чыганак</p>
                <div className="welcome-buttons">
                    <button className="btn primary" onClick={handleSignIn}>Башларга</button>
                    <button className="btn secondary" onClick={handleSignUp}>Аккаунтка керү</button>
                </div>
            </div>
            <div className="welcome-image">
                <img src={image} alt="Welcome" />
            </div>
        </div>
    );
};

export default WelcomeCard;