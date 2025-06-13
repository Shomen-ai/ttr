import React from 'react';
import './Profile.css';
import SideBar from "../components/SideBar";

const ProfilePage = () => {
    return (
        <div className="profile-page">
            <SideBar/>
            <main className="main-content">
                <div className="profile-section">
                    <div className="profile-avatar">
                        <img src="https://picsum.photos/200/200" alt="Profile" />
                    </div>
                    <div className="profile-details">
                        <h2>Алиса</h2>
                        <p>Термин: быйналты 2025</p>
                        <p>0 языу | 0 язылучы</p>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Uzbekistan.svg" alt="Flag" className="flag" />
                    </div>
                </div>
                <div className="achievements-section">
                    <h3>Натижалар</h3>
                    <div className="achievements-grid">
                        <div className="achievement"><span>🔥</span> 0</div>
                        <div className="achievement"><span>⚡</span> 0</div>
                        <div className="achievement"><span>🛡️</span> 0</div>
                        <div className="achievement"><span>🏆</span> 0</div>
                    </div>
                </div>
                <div className="diplomas-section">
                    <h3>Диплом</h3>
                    <div className="diploma-item">
                        <img src="https://picsum.photos/100/100" alt="Diploma" />
                        <p>Дипломия тафу</p>
                    </div>
                    <div className="diploma-item">
                        <img src="https://picsum.photos/100/100" alt="Diploma" />
                        <p>Дипломия нәтиҗе</p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ProfilePage;