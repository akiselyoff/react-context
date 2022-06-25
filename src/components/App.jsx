
import someContext from '../context/MyContext'
import DeepComponent from './DeepComponent';
import SomeComponent from './SomeComponent'

export const App = () => {
 
  return (

    <>
      <someContext.Provider value={10000}>
          
      
          <SomeComponent>
        
            <DeepComponent/>
             
           </SomeComponent>
        </someContext.Provider>
    </>
  );
};
