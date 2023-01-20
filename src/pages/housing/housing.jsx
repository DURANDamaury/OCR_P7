
import { useParams } from 'react-router-dom';
import datas from './logements.json'

import './housing.scss'
import Slideshow from '../../components/Slideshow/Slideshow';
import Tag from '../../components/Tag/Tag';
import InfoBox from '../../components/InfoBox/InfoBox';
import InfoBoxList from '../../components/InfoBox/InfoBoxList';
import Rate from '../../components/Rate/Rate';

function Housing() 
  {
    const { id } = useParams() // id recovery by url
    const housingData = datas.find((housing) => housing.id === id) // Housing recovery by id

    const title = housingData.title;
    const pictures = housingData.pictures
    const description = housingData.description
    const host = housingData.host
    const host_name = host.name
    const host_picture = host.picture
    const rate = housingData.rating
    const location = housingData.location
    const equipments = housingData.equipments
    const tags = housingData.tags

    return (
      <>
        <main>
          <Slideshow pictures={pictures} />
          <div id='housing'>
            <div id='housing_infos'>
              <section id='housing_infos_block'>
                <div id='housing_infos_block_title'>{title}</div>
                <div id='housing_infos_block_location'>{location}</div>
                <div id='housing_infos_block_tags'>
                  {tags.map( (tag,index) => (<Tag key={`${tag}-${index}`} tag={tag} />) )}
                </div>
              </section>

              <section id='housing_infos_2'>
                <div id='housing_infos_2_host'>
                  <div id='housing_infos_2_host_name'><span>{host_name}</span></div>
                  <div id='housing_infos_2_host_picture'><img src={host_picture} alt='host'/></div>
                </div>

                <div id='housing_infos_2_rate'>
                  <Rate rate={rate} />
                </div>
              </section>
            </div>

            <div id='housing_infosBox'>
              <InfoBox title='Description' txt={description} />
              <InfoBoxList title='Équipements' txt={equipments} />
            </div>

          </div>
        </main>
      </>
    )
  }

export default Housing;
