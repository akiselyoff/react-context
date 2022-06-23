import { useContext } from 'react'
import myContext from '../context/MyContext';

const DeepComponent = () => {

    const givenContextFromProvider = useContext(myContext);
    const { name } = givenContextFromProvider;

    console.log('context in deepComponent: ' + givenContextFromProvider);

    return (
        <>
            <div>DeepComponent text</div>
        {givenContextFromProvider}
        
        </>
        
            
            
              
    )

}

export default DeepComponent;