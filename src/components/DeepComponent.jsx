import { useContext } from 'react';
import myContext from '../context/MyContext';

const DeepComponent = () => {
  const contextValue = useContext(myContext);

  return (
    <>
      <div>DeepComponent text</div>
      {contextValue}
    </>
  );
};

export default DeepComponent;
