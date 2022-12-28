import logo from '../../assets/Logo_Orange.svg';
import "./Header.scss";

function Header() 
    {
        return (
            <header className="header">
                <img className="header_logo" src={logo} alt="logo" />
                <div className="header_nav">
                    <a href="index.html">Acceuil</a>
                    <a href="A-Propos.html">A Propos</a>
                </div>
            </header>
            )   
    }

export default Header