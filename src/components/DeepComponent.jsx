
import {  useContext } from "react";
import someContext from "../context/MyContext";



const DeepComponent = () => {
const contextValue = useContext(someContext);

    return (
        <>
            <div>DeepComponent text</div>
            {contextValue && 1111111111}
        </>
            
              
    )

}

export default DeepComponent;