import React from "react";
import ReactDOM from "react-dom";
import './Module1.css';
import SignIn from "./SignIn.jsx";
import SideBar from "../components/SideBar.jsx";
import headerImg from "../assets/header.png";
import {NavLink} from "react-router-dom";

const Module1 = () => {
    return (
        <div className="container">
            <div className="sidebar">
                {/*I'm too lazy to connect and use the sidebar like that*/}
                <div>
                    <nav className="sidebar">
                        <div className="sidebar-header">
                            <img src={headerImg} alt="Header" />
                        </div>
                        <ul>
                            <li>
                                <NavLink to="/lessons" className="sidebar-link">
                                    <span className="icon">🏠</span> Укырга
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/rating" className="sidebar-link">
                                    <span className="icon">🛡️</span> Рейтинг
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/profile" className="sidebar-link">
                                    <span className="icon">👤</span> Шахси бит
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="main-content">
                <div className="header">
                    <div className="header-text">
                        <div className="header-title">Модуль 1, Буйек 1</div>
                        <div className="header-subtitle">Ин мохим сузлэрне ойрэнегез</div>
                    </div>
                    <button className="btn">Белешмә</button>
                </div>

                <div className="lesson">

                    {/* Первый персонаж: кнопки слева, картинка справа */}
                    <div className="character-wrapper">
                        <div className="button-set left">
                            <button className="btn-green" style={{ top: "0px" }}>▶</button>
                            <button className="btn-white" style={{ top: "60px" }}>▶</button>
                            <button className="btn-white" style={{ top: "120px" }}>▶</button>
                            <button className="btn-icon" style={{ top: "180px" }}>💰</button>
                            <button className="btn-icon" style={{ top: "240px" }}>🗣️</button>
                        </div>
                        <img src="./src/assets/main4.png" alt="Girl" className="lesson-image" />
                    </div>

                    <p className="description">Кайдан икэнегезне сөйләгез</p>

                    {/* Второй персонаж: картинка слева, кнопки справа */}
                    <div className="character-wrapper">
                        <img src="./src/assets/main1.png" alt="Boy" className="lesson-image" />
                        <div className="button-set right">
                            <button className="btn-green" style={{ top: "0px" }}>▶</button>
                            <button className="btn-white" style={{ top: "60px" }}>▶</button>
                            <button className="btn-white" style={{ top: "120px" }}>▶</button>
                            <button className="btn-icon" style={{ top: "180px" }}>💰</button>
                            <button className="btn-icon" style={{ top: "240px" }}>🗣️</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Module1;