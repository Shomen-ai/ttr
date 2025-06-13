import React from 'react';
import { NavLink } from 'react-router-dom';
import headerImg from "../assets/header.png";
import './SideBar.css';

export default function SideBar() {
    return (
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
    )
}