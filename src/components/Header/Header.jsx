import logo from './assets/Logo_Orange.svg';
import "./Header.scss";
import { NavLink } from 'react-router-dom'

function Header() 
    {
        return (
            <header className="header">
                <img className="header_logo" src={logo} alt="logo" />
                <nav className="header_nav">
                    <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>Accueil</NavLink>
                    <NavLink to="/APropos" className={(nav) => (nav.isActive ? "nav-active" : "")}>A Propos</NavLink>
                </nav>
            </header>
            )   
    }

export default Header