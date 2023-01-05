import Banner from '../components/Banner/Banner'
import BannerImg from '../components/Banner/Assets/Banner_APropos.jpg'
import InfoBox from '../components/InfoBox/InfoBox'
import AboutData from '../components/InfoBox/Datas/AboutData.json'

function About() 
  {
    return (
      <>
        <main>
            <Banner img={BannerImg} txt="" />
            <section className="AboutBoxs">
              {AboutData.map((InfoBoxData) => (<InfoBox key={InfoBoxData.title} title={`${InfoBoxData.title}`} txt={`${InfoBoxData.txt}`} />))}
            </section>
        </main>
      </>
    )
  }

export default About;