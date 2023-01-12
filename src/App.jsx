import {Routes, Route} from "react-router-dom";

//
import Home from './pages/home/home';
import Logement from './pages/logements/Logement';
import About from './pages/about/about';
import P404 from './pages/404/404';
//
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


function App()
    {
    return(
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/logement/:id" element={<Logement/>} />
                <Route path="/APropos" element={<About/>} />
                <Route path="/Home" element={<Home/>} />
                <Route path="/" element={<Home/>} />
                <Route path="*" element={<P404/>} />        
            </Routes>
            <Footer/>
        </div>
    )
    }

    export default App;