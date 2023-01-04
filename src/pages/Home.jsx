import Banner from '../components/Banner/Banner'
import BannerImg from '../components/Banner/Assets/Banner_Home.jpg'
import Gallery from '../components/Gallery/Gallery'
import '../styles/Home.css'

function Home() 
  {
    return (
    <>
      <main>
        <Banner img={BannerImg}/>
        <Gallery/>
      </main>
    </>
    )
  }

export default Home;
