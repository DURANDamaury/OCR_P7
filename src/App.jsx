import {Routes, Route} from "react-router-dom";
//
import Home from './pages/Home';
import Logement from './pages/Logement';
import About from './pages/About';
//
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App()
    {
    return(
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/APropos" element={<About/>} />
                <Route path="/logement/:id" element={<Logement/>} />
                <Route path="/" element={<Home/>} />
                <Route path="*" element={<Home/>} />        
            </Routes>
            <Footer/>
        </div>
    )
    }

    export default App;