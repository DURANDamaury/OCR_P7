import logo from '../../assets/Logo_Orange.svg';
import "./Header.scss";
import { Link } from 'react-router-dom'

function Header() 
    {
        return (
            <header className="header">
                <img className="header_logo" src={logo} alt="logo" />
                <nav className="header_nav">
                    <Link to="/">Acceuil</Link>
                    <Link to="/APropos">A Propos</Link>
                </nav>
            </header>
            )   
    }

export default Header