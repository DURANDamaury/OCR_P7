const url='../datas/logements.json'



export function fetchData()
    {

        return fetch(url)
        .then ((res) => {
            //cas d'echec
            return res.json();
        
        })
        .then ((data) => data)
        .catch ((err) => {throw err})
    }

export function getLogementById(params)
    {
        return fetch(url)
        .then ((res) => {
            //cas d'echec
            return res.json();
        
        })
        .then ((data) => {
            let logement = data.find((housing) => housing.id === params.id)
            //traiter le cas ou le logement est nul
            return logement
        })
        .catch ((err) => {throw err})
    }
