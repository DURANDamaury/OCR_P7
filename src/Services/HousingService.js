//url of datas
const url='../datas/logements.json'


// fetchdata function response totality of data
export function fetchData()
    {

        return fetch(url)
        .then ((res) => {
            //Error when trying to load data
            if (!res) {return Promise.reject('Pas de fichier de données ou url inexistante')}
            //if no error returning json
            return res.json();
        
        })
        .then ((data) => data)
        .catch ((err) => {throw err})
    }

// getLogementById return data of one Id
export function getLogementById(params)
    {
        return fetch(url)
        .then ((res) => {
            //Error when trying to load data
            if (!res) {return Promise.reject('Pas de fichier de données ou url inexistante')}
            return res.json();
        
        })
        .then ((data) => {
            let logement = data.find((housing) => housing.id === params.id)
            //Error when id does not exist.
            if (!logement) 
                {
                    return Promise.reject('aucun logement trouvé')
                }
            return logement
        })
        .catch ((err) => {throw err})
    }
