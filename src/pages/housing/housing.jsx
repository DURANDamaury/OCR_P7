
import { useParams } from 'react-router-dom';

import './housing.scss'
import Tag from '../../components/Tag/Tag';
import InfoBox from '../../components/InfoBox/InfoBox';
import Rate from '../../components/Rate/Rate';
import { getLogementById } from '../../Services/HousingService';
import { useEffect, useState } from 'react';
import Loader from '../../components/Loader/Loader';
import Slideshow from '../../components/Slideshow/Slideshow';
import P404 from '../404/404'

function Housing() 
  {
    const { id } = useParams(); // id recovery by url

    const [data, setData] = useState() ;              //internal state to stock data    
    const [isLoading, setLoading] = useState(true);   //internal state for loading status(true for start)
    const [error, setError] = useState("");           //internal state for error when trying to read data

    //data recuperation service
    useEffect(() => {
      getLogementById({id})
            .then((house) => {
                //timeout is set only for testing. You have to delete it for the final version
                setTimeout(() => {
                  setData(house);
                  setLoading(false);
                  }, 2000);
                })
            .catch((err) => {
                setError(err);
                console.log(err)
                });
        }, [id]);



        //if eror state is set
        if (error) {
          console.log(error);
          return <P404 />}

    //all is ok, datas are loaded, generate housing page
    return (
      <>
        <main>
          {
          //loading bar is display if loading state is true else housing infos are display
          isLoading ? 
            (<Loader/>) : (
              <>
              <Slideshow pictures={data.pictures} />
              <div id='housing'>
                <div id='housing_infos'>
                  <section id='housing_infos_block'>
                    <div id='housing_infos_block_title'>{data.title}</div>
                    <div id='housing_infos_block_location'>{data.location}</div>
                    <div id='housing_infos_block_tags'>
                      {data.tags.map( (tag,index) => (<Tag key={`${tag}-${index}`} tag={tag} />) )}
                    </div>
                  </section>

                  <section id='housing_infos_2'>
                    <div id='housing_infos_2_host'>
                      <div id='housing_infos_2_host_name'><span>{data.host.name}</span></div>
                      <div id='housing_infos_2_host_picture'><img src={data.host.picture} alt='host'/></div>
                    </div>

                    <div id='housing_infos_2_rate'>
                      <Rate rate={data.rating} />
                    </div>
                  </section>
                </div>

                <div id='housing_infosBox'>
                  <InfoBox page='housing' boxType='txt' title='Description' txt={data.description} />
                  <InfoBox page='housing' boxType='elementList' title='Équipements' txt={data.equipments} />
                </div>
              </div>
              </>
            )
          }
        </main>
      </>
    )
  }

export default Housing;
