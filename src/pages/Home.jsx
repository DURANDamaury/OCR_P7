import Banner from '../components/Banner/Banner'
import BannerImg from '../components/Banner/Assets/Banner_Home.jpg'
import Gallery from '../components/Gallery/Gallery'
import '../styles/Home.css'

function Home() 
  {
    const BannerTxt = "Chez vous, partout et ailleurs"
    return (
    <>
      <main>
        <Banner img={BannerImg} txt={BannerTxt} />
        <Gallery/>
      </main>
    </>
    )
  }

export default Home;
