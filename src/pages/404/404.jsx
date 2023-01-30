import { Link } from 'react-router-dom';
import './P404.scss'

function P404() 
  {
    return (
    <>
      
      <main>
        <section className='Section404'>
          <div className='Section404_bloc'>
            <div className='Section404_bloc_Logo'>404</div>
            <div className='Section404_bloc_Msg'>Oups! La page que vous demandez n'existe pas.</div>
            <Link to="/" className='Section404_bloc_Link'>Retourner sur la page d'accueil</Link>
          </div>
        </section>
      </main>
    </>
    )
  }

export default P404;