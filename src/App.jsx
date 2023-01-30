import {Routes, Route} from "react-router-dom";

//
import Home from './pages/home/home';
import Housing from './pages/housing/housing';
import About from './pages/about/about';
import P404 from './pages/404/404';
//
import Footer from './components/Footer/Footer';
import Header from "./components/Header/Header";


function App()
    {
    return(
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/Housing/:id" element={<Housing/>} />
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