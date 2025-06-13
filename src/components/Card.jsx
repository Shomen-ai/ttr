import React from 'react';
import './Card.css';

const Card = ({ image, title, subtitle, text, reversed }) => {
    return (
        <div className={`card ${reversed ? 'reversed' : ''}`}>
            <img src={image} alt="card" className="card-image" />
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                {subtitle && <h4 className="card-subtitle">{subtitle}</h4>}
                <p className="card-text">{text}</p>
            </div>
        </div>
    );
};

export default Card;
