const url='../datas/logements.json'



export function fetchData()
    {

        return fetch(url)
        .then ((res) => {
            //cas d'echec
            if (!res) {return Promise.reject('Pas de fichier de données ou url inexistante')}
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
            if (!res) {return Promise.reject('Pas de fichier de données ou url inexistante')}
            return res.json();
        
        })
        .then ((data) => {
            let logement = data.find((housing) => housing.id === params.id)
            //traiter le cas ou le logement est nul
            if (!logement) 
            {
                return Promise.reject('aucun logement trouvé')
            }
            return logement
        })
        .catch ((err) => {throw err})
    }
