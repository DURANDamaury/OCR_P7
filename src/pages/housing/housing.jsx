
import { useParams } from 'react-router-dom';

function Housing() 
  {
    const { id } = useParams()
    return (
        <div>{id}</div>
    )
  }

export default Housing;
