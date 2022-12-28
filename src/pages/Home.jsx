
import Header from '../components/Header/Header'
import Banner from '../components/Banner/Banner'
import Footer from '../components/Footer/Footer'
import Gallery from '../components/Gallery/Gallery'
import '../styles/Home.css'

function Home() 
  {
    return (
    <>
    <Header/>
      <main>
        <Banner/>
        <Gallery/>
      </main>
    <Footer/>
    </>
    )
  }

export default Home;
