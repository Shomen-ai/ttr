import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import WelcomeCard from './components/WelcomeCard';
import SignIn from './pages/SignIn.jsx';
import SignUp from './pages/SignUp.jsx';
import ProfilePage from './pages/Profile.jsx';
import Lessons from "./pages/Lessons.jsx";
import Module1 from "./pages/Module1.jsx";
import Test1 from './pages/Test1.jsx';
import HelpModule1 from './pages/HelpModule1.jsx';

// Импортируем картинки как модули
import headerImg from './assets/header.png';
import main1 from './assets/main1.png';
import main2 from './assets/main2.png';
import main3 from './assets/main3.png';
import main4 from './assets/main4.png';

function App() {
    return (
        <div>
            <Routes>
                <Route
                    path="/"
                    element={
                        <div>
                            <Header imageSrc={headerImg} />
                            <WelcomeCard image={main1} />
                            <Card
                                image={main2}
                                title="“Гадиерез. Күңелле. Нәтиҗәле”"
                                text="““Сабантуй” белән уку күңелле һәм кызыклы. Дөрес җаваплар өчен очколар эшләгез, яңа материаллар ачыгыз һәм сөйләм күнекмәләрен үстерегез. Безнең кыска дәресләр чыннан да эшли, һәм без моны исбатлый алабыз."
                            />
                            <Card
                                image={main3}
                                title="“Түләүсез. Күңелле. Нәтиҗәле”"
                                text="Укытуның уникаль методы һәм мавыктыргыч материаллар: тикшеренүләр күрсәткәнчә, безнең курслар уку, язу, ишетеп аңлау һәм сөйләм күнекмәләрен нәтиҗәле үстерәләр!"
                                reversed
                            />
                            <Card
                                image={main4}
                                title="“Укуга этәргеч”"
                                text="Кызыклы биремнәр һәм безнең талисманнардан - Сабантуйда катнашучылар - искә төшерүләр белән уен алымы көндәлек дәресләрне тиз арада гадәткә әйләндерергә ярдәм итә."
                                reversed
                            />
                        </div>
                    }
                />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/lessons" element={<Lessons />} />
                <Route path="/module-1" element={<Module1 />} />
                <Route path="/test-1" element={<Test1 />} />
                <Route path="/help-module-1" element={<HelpModule1 />} />
                {/*<Route path="/rating" element={<RatingPage />} />*/}

            </Routes>
        </div>
    );
}

export default App;
