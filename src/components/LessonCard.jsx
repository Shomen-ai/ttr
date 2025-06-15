import React from 'react';
import './LessonCard.css';
import { useNavigate } from 'react-router-dom';

import tiger from '../assets/tiger.png';

const LessonCard = ({
                        moduleNumber,
                        progress,
                        total,
                        isLocked,
                        buttonText,
                        speechImage,
                    }) => {
    const progressPercent = (progress / total) * 100;
    const navigate = useNavigate();

    return (
        <div className={`lesson-card ${isLocked ? 'locked' : 'unlocked'}`}>
            <div className="card-left">
                <h3>Модуль {moduleNumber}</h3>
                {!isLocked && (
                    <div className="progress-bar">
                        <div className="progress" style={{ width: `${progressPercent}%` }}></div>
                    </div>
                )}
                <p className="progress-text">
                    {isLocked ? `🔒 ${total} Раздел` : `${progress}/${total}`}
                </p>
                <button
                    className={`card-button ${isLocked ? 'outline' : 'filled'}`}
                    onClick={() => {
                        if (!isLocked) {
                            navigate(`/module-${moduleNumber}`);
                        }
                    }}
                >
                    {buttonText}
                </button>
            </div>
            <div className="card-right">
                <img src={speechImage} alt="Speech Bubble" className="speech-image" />
                <img src={tiger} alt="Mascot" className="mascot" />
            </div>
        </div>
    );
};

export default LessonCard;