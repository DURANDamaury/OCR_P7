
import { useParams } from 'react-router-dom';

function Logement() 
  {
    const { id } = useParams()
    return (
        <div>{id}</div>
    )
  }

export default Logement;
