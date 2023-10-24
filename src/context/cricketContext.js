
// Purpose of this file is to create a context

// create a context it means => It means we are creating an empty global object 

import React,{createContext} from "react";

const cricketContext = createContext(); 


export default cricketContext;


// cricketContext = {} // special kind of obj 

// cricketContext = {
//     Provider: () => {}, 
//     Consumer:  () => {}
    
// }