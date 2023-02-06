import {Route, Routes} from "react-router-dom";

import Home from './pages/home/home';
import Housing from './pages/housing/housing';
import About from './pages/about/about';
import P404 from './pages/404/404';

function RoutesList()
    {
        return(
            <Routes>
                <Route path="/Housing/:id" element={<Housing/>} />
                <Route path="/APropos" element={<About/>} />
                <Route path="/Home" element={<Home/>} />
                <Route path="/" element={<Home/>} />
                <Route path="*" element={<P404/>} />        
            </Routes>
        )
    }

export default RoutesList