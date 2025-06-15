import React from 'react';
import './Lessons.css';
import SideBar from "../components/SideBar";
import LessonCard from "../components/LessonCard";

import thought_ballon_1 from '../assets/thought_balloon_1.png';
import thought_ballon_2 from '../assets/thought_balloon_2.png';
import thought_ballon_3 from '../assets/thought_balloon_3.png';

const Lessons = () => {
    return (
        <div className="profile-page">
            <SideBar/>
            <main className="main-content">
                <LessonCard
                    moduleNumber={1}
                    title="Модуль 1"
                    progress={0}
                    total={9}
                    isLocked={false}
                    speechImage={thought_ballon_1}
                    buttonText="Башларга"
                />
                <LessonCard
                    moduleNumber={2}
                    title="Модуль 2"
                    progress={0}
                    total={26}
                    isLocked={true}
                    speechImage={thought_ballon_2}
                    buttonText="2 Модульга кучу"
                />
                <LessonCard
                    moduleNumber={3}
                    title="Модуль 3"
                    progress={0}
                    total={18}
                    isLocked={true}
                    speechImage={thought_ballon_3}
                    buttonText="3 Модульга кучу"
                />
            </main>
        </div>
    );
};

export default Lessons;