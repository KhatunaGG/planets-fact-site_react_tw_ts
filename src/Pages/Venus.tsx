
import { useContext } from 'react';
import { GlobalState } from '../App';
import Planet from '../components/Planet'
import { useNavigate, useParams } from 'react-router-dom';




const Venus = () => {

    const context = useContext(GlobalState);
    if (!context) return null;
    const { data  } = context;
    // const newData = data.filter((item) => item.name === palnetName)

    // console.log(newData)









    return (
        <div>
            <Planet />
        </div>
    )
}

export default Venus

