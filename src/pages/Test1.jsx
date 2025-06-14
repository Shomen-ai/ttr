import React, { useEffect, useState } from 'react';
import './Test1.css';

const questionSteps = [
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
    },
];

const matchPairs = [
    { tatar: 'Әти', russian: 'Папа' },
    { tatar: 'Әби', russian: 'Бабушка' },
    { tatar: 'Абый', russian: 'Старший брат' },
    { tatar: 'Сеңел', russian: 'Младшая сестра' },
];

const shuffledRussian = ['Бабушка', 'Старший брат', 'Младшая сестра', 'Папа'];

const clockStep = {
    icon: '🕰️',
    question: 'Назови время',
    word: 'Посмотри на часы и выбери правильный вариант',
    options: ['Сәгать ун', 'Сәгать биш', 'Сәгать өч', 'Сәгать алты'],
    correct: 'Сәгать өч',
};

const sentenceStep = {
    icon: '🐱',
    question: 'Из предложенных слов составьте правильное предложение',
    words: ['Булат', 'Сәлам!', 'Минем', 'исемем'],
    correctSentence: ['Сәлам!', 'Минем', 'исемем', 'Булат'],
};

const dishStep = {
    icon: '🍩',
    question: 'Угадай блюдо',
    word: '',
    options: ['Кыстыбый', 'Бәлеш', 'Өчпочмак', 'Пәрәмәч'],
    correct: 'Өчпочмак',
};

const totalSteps = questionSteps.length + 2;

const Test1 = () => {
    const [step, setStep] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [answeredCorrectly, setAnsweredCorrectly] = useState(false);

    const [selectedLeft, setSelectedLeft] = useState(null);
    const [matchedPairs, setMatchedPairs] = useState([]);
    const [incorrectRight, setIncorrectRight] = useState([]);
    const [disabledLeft, setDisabledLeft] = useState([]);

    const [sentenceSelection, setSentenceSelection] = useState([]);
    const [sentenceResult, setSentenceResult] = useState(null);

    const progress = (() => {
        if (step === 2) {
            const matchDone = matchedPairs.length === matchPairs.length;
            return matchDone ? (step + 1) / totalSteps * 100 : step / totalSteps * 100;
        } else if (step === 3 || step === 5) {
            return (step + (answeredCorrectly ? 1 : 0)) / totalSteps * 100;
        } else if (step === 4) {
            return (step + (sentenceResult === 'correct' ? 1 : 0)) / totalSteps * 100;
        } else {
            return (step + (answeredCorrectly ? 1 : 0)) / totalSteps * 100;
        }
    })();

    useEffect(() => {
        if ((step === 0 || step === 1 || step === 3 || step === 5) && answeredCorrectly) {
            const timeout = setTimeout(() => {
                setStep(step + 1);
                setAnsweredCorrectly(false);
                setSelectedOptions([]);
            }, 750);
            return () => clearTimeout(timeout);
        }
    }, [answeredCorrectly]);

    useEffect(() => {
        if (step === 2 && matchedPairs.length === matchPairs.length) {
            const timeout = setTimeout(() => {
                setStep(step + 1);
                setSelectedLeft(null);
                setIncorrectRight([]);
            }, 750);
            return () => clearTimeout(timeout);
        }
    }, [matchedPairs]);

    useEffect(() => {
        if (step === 4 && sentenceResult === 'correct') {
            const timeout = setTimeout(() => {
                setStep(step + 1);
                setSentenceSelection([]);
                setSentenceResult(null);
            }, 1000);
            return () => clearTimeout(timeout);
        }
        if (step === 4 && sentenceResult === 'incorrect') {
            const timeout = setTimeout(() => {
                setSentenceSelection([]);
                setSentenceResult(null);
            }, 1000);
            return () => clearTimeout(timeout);
        }
    }, [sentenceResult]);

    const handleQuestionClick = (text, correctAnswer) => {
        if (answeredCorrectly || selectedOptions.includes(text)) return;
        if (text === correctAnswer) {
            setAnsweredCorrectly(true);
        } else {
            setSelectedOptions([...selectedOptions, text]);
        }
    };

    const handleMatchClick = (right) => {
        if (!selectedLeft) return;
        const correct = matchPairs.find(p => p.tatar === selectedLeft && p.russian === right);
        if (correct) {
            setMatchedPairs([...matchedPairs, { left: selectedLeft, right }]);
            setDisabledLeft([...disabledLeft, selectedLeft]);
            setIncorrectRight([]);
        } else {
            setIncorrectRight([...incorrectRight, right]);
        }
        setSelectedLeft(null);
    };

    const handleWordClick = (word) => {
        if (sentenceResult || sentenceSelection.includes(word)) return;
        const updated = [...sentenceSelection, word];
        setSentenceSelection(updated);
        if (updated.length === sentenceStep.correctSentence.length) {
            const isCorrect = updated.join(' ') === sentenceStep.correctSentence.join(' ');
            setSentenceResult(isCorrect ? 'correct' : 'incorrect');
        }
    };

    return (
        <div className="survey-container">
            <div className="progress-bar">
                <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
            </div>

            {/* Вопросы */}
            {step < 2 && (
                <div className="content">
                    <h2>{questionSteps[step].question}</h2>
                    <div className="lion-row">
                        <div className="lion-icon">{questionSteps[step].icon}</div>
                        <div className="thank-you-text">{questionSteps[step].word}</div>
                    </div>
                    <div className="options">
                        {questionSteps[step].options.map((text, i) => {
                            let className = 'option-button';
                            let disabled = false;
                            if (answeredCorrectly) {
                                className += text === questionSteps[step].correct ? ' correct' : ' incorrect';
                                disabled = true;
                            } else if (selectedOptions.includes(text)) {
                                className += ' incorrect';
                                disabled = true;
                            }
                            return (
                                <button key={i} className={className} onClick={() => handleQuestionClick(text, questionSteps[step].correct)} disabled={disabled}>
                                    <span className="option-number">{i + 1}</span>
                                    {text}
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}

            {/* Мэтчинг */}
            {step === 2 && (
                <div className="content">
                    <h2>Соедини фразы на татарском и их перевод</h2>
                    <div className="match-columns">
                        <div className="column left">
                            {matchPairs.map((item, i) => {
                                const matched = matchedPairs.find(p => p.left === item.tatar);
                                const isSelected = selectedLeft === item.tatar;
                                return (
                                    <button
                                        key={i}
                                        className={`match-btn left-btn ${matched ? 'matched' : isSelected ? 'selected' : ''}`}
                                        onClick={() => !matched && setSelectedLeft(item.tatar)}
                                        disabled={matched}
                                    >
                                        <span className="option-number">{i + 1}</span>
                                        {item.tatar}
                                    </button>
                                );
                            })}
                        </div>
                        <div className="column right">
                            {shuffledRussian.map((text, i) => {
                                const matched = matchedPairs.find(p => p.right === text);
                                const isIncorrect = incorrectRight.includes(text);
                                const matchedCorrect = matchedPairs.some(p => p.right === text);
                                return (
                                    <button
                                        key={i}
                                        className={`match-btn right-btn ${matchedCorrect ? 'matched' : isIncorrect ? 'incorrect' : ''}`}
                                        onClick={() => !matchedCorrect && !isIncorrect && handleMatchClick(text)}
                                        disabled={matchedCorrect || isIncorrect}
                                    >
                                        <span className="option-number">{i + 5}</span>
                                        {text}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}

            {/* Часы */}
            {step === 3 && (
                <div className="content">
                    <h2>{clockStep.question}</h2>
                    <div className="lion-row">
                        <div className="lion-icon">{clockStep.icon}</div>
                        <div className="thank-you-text">{clockStep.word}</div>
                    </div>
                    <div className="options">
                        {clockStep.options.map((text, i) => {
                            let className = 'option-button';
                            let disabled = false;
                            if (answeredCorrectly) {
                                className += text === clockStep.correct ? ' correct' : ' incorrect';
                                disabled = true;
                            } else if (selectedOptions.includes(text)) {
                                className += ' incorrect';
                                disabled = true;
                            }
                            return (
                                <button key={i} className={className} onClick={() => handleQuestionClick(text, clockStep.correct)} disabled={disabled}>
                                    <span className="option-number">{i + 1}</span>
                                    {text}
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}

            {/* Предложение */}
            {step === 4 && (
                <div className="content">
                    <h2>{sentenceStep.question}</h2>
                    <div className="lion-row">
                        <div className="lion-icon">{sentenceStep.icon}</div>
                    </div>
                    <div className={`sentence-preview ${sentenceResult}`}>
                        {sentenceSelection.map((word, i) => (
                            <span key={i} className="sentence-word">{word}</span>
                        ))}
                    </div>
                    <div className="sentence-options">
                        {sentenceStep.words.map((word, i) => (
                            <button
                                key={i}
                                className="sentence-btn"
                                onClick={() => handleWordClick(word)}
                                disabled={sentenceSelection.includes(word) || sentenceResult}
                            >
                                {word}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Угадай блюдо */}
            {step === 5 && (
                <div className="content">
                    <h2>{dishStep.question}</h2>
                    <div className="lion-row">
                        <div className="lion-icon">{dishStep.icon}</div>
                    </div>
                    <div className="options">
                        {dishStep.options.map((text, i) => {
                            let className = 'option-button';
                            let disabled = false;
                            if (answeredCorrectly) {
                                className += text === dishStep.correct ? ' correct' : ' incorrect';
                                disabled = true;
                            } else if (selectedOptions.includes(text)) {
                                className += ' incorrect';
                                disabled = true;
                            }
                            return (
                                <button key={i} className={className} onClick={() => handleQuestionClick(text, dishStep.correct)} disabled={disabled}>
                                    <span className="option-number">{i + 1}</span>
                                    {text}
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Test1;
