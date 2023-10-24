import { useState } from "react";
import cricketContext from "./cricketContext";

const CricketProvider = (props)=>{

    const [cricketer, setCricketer] = useState({
        name: "Sachin Tendulkar",
        age: 47,
        country: "India",
        retired: true
    });
    
    

    return(
          <cricketContext.Provider value={
            {
                cricketer : cricketer,
                setCricketer: setCricketer
            }
          }>
          {props.children}
          </cricketContext.Provider>
    )

}


export default CricketProvider;


// const Provider = ({value}){

// }


// cricketContext.Provider

// cricketContext = {
//     Provider: () => {}, 
//     Consumer:  () => {},
//     value:  "Sachin Tendulkar"
// }