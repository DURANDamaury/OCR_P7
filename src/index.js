import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
//
import './styles/index.css';
//
import Home from './pages/Home';
import Logement from './pages/Logement';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <React.Fragment>
      <Routes>
        <Route path="/logement/:id" element={<Logement/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<Home/>}/>
        
      </Routes>
      </React.Fragment>
    </BrowserRouter>
);


