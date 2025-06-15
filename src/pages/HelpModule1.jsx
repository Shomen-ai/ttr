import React from 'react';
import './HelpModule1.css';
import SideBar from '../components/SideBar';
import tiger from '../assets/tiger.png';
import theoryImage from '../assets/help_module_1.png'; // илюстрация из блока "Теория"
import { useNavigate } from 'react-router-dom';

const HelpModule1 = () => {
    const navigate = useNavigate();

    return (
        <div className="lesson-overview-container">
            <SideBar />
            <div className="lesson-content">
                <div className="top-bar">
                    <button className="back-button" onClick={() => navigate('/lessons')}>
                        ← Артка
                    </button>
                </div>

                <div className="lesson-header">
                    <img src={tiger} alt="Mascot" className="lesson-mascot" />
                    <div>
                        <h2>1 бүлекнең белешмәсе</h2>
                        <p>Бүлекнең грамматикасы һәм төп әйтемнәр белән танышыгыз</p>
                    </div>
                </div>

                <h4 className="section-title green">Төп әйтемнәр</h4>
                <h3 className="section-subtitle">Кирәкле сүзләрне өйрәнегез</h3>

                <div className="audio-buttons">
                    <div className="audio-card">🔊 Исәнмесез<br /><span>Здравствуйте</span></div>
                    <div className="audio-card">🔊 Сау булыгыз<br /><span>До свидания</span></div>
                    <div className="audio-card">🔊 Юк, рәхмәт<br /><span>Нет, спасибо</span></div>
                </div>

                <div className="theory-block">
                    <p className="theory-label">Теория</p>
                    <h3>Ничек хәлләрең?</h3>
                    <p className="theory-text">
                        Рус телендә без Как дела? яки Как ты? дип сорыйбыз. Татар телендә Ничек хәлләрең дигән сүз кулланыла...
                    </p>
                    <img src={theoryImage} alt="Theory example" className="theory-image" />
                    <div className="example-text">
                        <p>Сәлам, ничек хәлләрең?<br /><span>Привет, как ты?</span></p>
                        <p>Яхшы, синеке ничек?<br /><span>Я в порядке, а ты?</span></p>
                        <p>Миннеке дә яхшы, рәхмәт!<br /><span>Я в порядке, а ты?</span></p>
                    </div>
                </div>
            </div>

            <div className="lesson-stats">
                <h4>Кон биремнәре</h4>
                <div className="task-card">⚡ 10 очко опыт алыгыз<br /><progress value="0" max="10"></progress></div>
                <div className="task-card">🎯 1 дәресне ялгышсыз үтегез<br /><progress value="0" max="1"></progress></div>
                <div className="task-card">⭐ 3 дәрестә рәттән 10 тапкыр дөрес җавап бирегез<br /><progress value="0" max="10"></progress></div>
            </div>
        </div>
    );
};

export default HelpModule1;
