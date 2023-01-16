import { useState, useEffect } from 'react'

//parameter api url to call
export function useFetch(url) {            

    const [data, setData] = useState({})            //internal state to stock data     
    const [isLoading, setLoading] = useState(true)  //internal state for loading status(true for start)

    useEffect(() => {
        if (!url) return                            //if url is empty, return free

        async function fetchData() {
            const response = await fetch(url)       //fetch from url
            const data = await response.json()      //response
            setData(data)                           //data is set on state data
            setLoading(false)                       //end of loading, status false
            }

        setLoading(true)                            //loading state is true before response is ended
        fetchData()                                 //start fetchdata
        }, [url])                                   //call when url change

    return { isLoading, data }                      //return state isLoading and data
}