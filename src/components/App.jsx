import someContext from '../context/MyContext';
import DeepComponent from './DeepComponent';
import SomeComponent from './SomeComponent';

export const App = () => {
  const a = 5;

  const obj = {
    color: 'red',
    text: 'bold',
  };

  return (
    <>
      <someContext.Provider value={`I'm a value of context: ${a}${obj}`}>
        <SomeComponent>
          <DeepComponent />
        </SomeComponent>
      </someContext.Provider>
    </>
  );
};
