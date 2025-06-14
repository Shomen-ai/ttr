import React, { useEffect, useState } from 'react';
import './Test1.css';

const steps = [
    {
        icon: '🦁',
        question: 'Переведите слов на татарский',
        word: 'Спасибо',
        options: ['Исәнмесез', 'Хәерле кич', 'Рәхмәт', 'Хушыгыз'],
        correct: 'Рәхмәт',
    },
    {
        icon: '🐰',
        question: 'Напишите на русском',
        word: 'Хушыгыз',
        options: ['Спасибо', 'До свидания', 'Доброе утро', 'Привет'],
        correct: 'До свидания',
    }
];

const Test1 = () => {
    const [stepIndex, setStepIndex] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [answeredCorrectly, setAnsweredCorrectly] = useState(false);

    const current = steps[stepIndex];

    const handleClick = (text) => {
        if (answeredCorrectly || selectedOptions.includes(text)) return;

        if (text === current.correct) {
            setAnsweredCorrectly(true);
        } else {
            setSelectedOptions([...selectedOptions, text]);
        }
    };

    useEffect(() => {
        if (answeredCorrectly) {
            const timeout = setTimeout(() => {
                // если есть ещё шаг — перейти
                if (stepIndex + 1 < steps.length) {
                    setStepIndex(stepIndex + 1);
                    setAnsweredCorrectly(false);
                    setSelectedOptions([]);
                }
            }, 1000);
            return () => clearTimeout(timeout);
        }
    }, [answeredCorrectly, stepIndex]);

    return (
        <div className="survey-container">
            <div className="header">
                <span className="close-btn">×</span>
            </div>
            <div className="content">
                <h2>{current.question}</h2>
                <div className="lion-row">
                    <div className="lion-icon">{current.icon}</div>
                    <div className="thank-you-text">{current.word}</div>
                </div>
                <div className="options">
                    {current.options.map((text, index) => {
                        let className = "option-button";
                        let disabled = false;

                        if (answeredCorrectly) {
                            className += text === current.correct ? " correct" : " incorrect";
                            disabled = true;
                        } else if (selectedOptions.includes(text)) {
                            className += " incorrect";
                            disabled = true;
                        }

                        return (
                            <button
                                key={index}
                                className={className}
                                onClick={() => handleClick(text)}
                                disabled={disabled}
                            >
                                <span className="option-number">{index + 1}</span>
                                {text}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Test1;
