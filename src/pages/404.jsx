import { Link } from 'react-router-dom';
import '../styles/P404.scss'

function P404() 
  {
    return (
    <>
      <main>
        <div className='Logo404'>404</div>
        <div className='WarningMsg'>Oups! La page que vous demandez n'existe pas.</div>
        <Link to="/" className='LinkFrom404'>Retourner sur la page d'accueil</Link>
      </main>
    </>
    )
  }

export default P404;