import './Footer.scss';
import logo from '../../assets/Logo_White.svg'

function Footer()
    {
        return (
            <footer>
                <img src={logo} alt="logo"/>
                <div id="footer_txt"><p>© 2020 Kasa. All rights reserved</p></div>
            </footer>
        )
    }

export default Footer;