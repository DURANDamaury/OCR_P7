import { useState, useEffect } from 'react'

// export async function getAllData()
//     {
//         const response = await fetch(`./datas/logements.json`)       //fetch from url
//         const data = await response.json()      //response
//         return data
//     }

// export async function getDataById (id)
//     {
//         const response = await fetch(`./datas/logements.json`)       //fetch from url
//         const data = await response.json()      //response
//         const dataId = data.find(id)
//         return dataId
//     }






//parameter api url to call
export function useFetch(url) {            

    const [data, setData] = useState([])            //internal state to stock data     
    const [isLoading, setLoading] = useState(true)  //internal state for loading status(true for start)
    const [error, setError] = useState(false)       //state for api error

    useEffect(() => {
        if (!url) return                            //if url is empty, return free

        setLoading(true)                            //loading state is true before response is ended

        async function fetchData() 
            {
            try {
                const response = await fetch(url)       //fetch from url
                const data = await response.json()      //response
                setData(data)                           //data is set on state data
                }
            catch (err) 
                {
                console.log(err)
                setError(true)
                }
            finally
                {
                    setLoading(false)               //end of loading, status false
                }
            }


        fetchData()                                 //start fetchdata
        }, [url])                                   //call when url change

        return { isLoading, data, error }                      //return state isLoading and data
}


