// import React from "react"; // 17.2  

import Hello from "./Components/Hello"
import Jerico from "./Components/Jerico"



const OldApp = () => {


  return(
    <div>
      <Hello name="John" >
         <h1> I am missing my children too</h1>
        </Hello>
      

      <Hello name="Abhishek" />

      <Hello name="Navneet">  
         <div >
            <p> Hey I found out the way</p>
            <button>Click Me</button>
         </div>
      </Hello>

      <Hello name="Jerrico">

        <Jerico />

      </Hello>

      <Hello name="Lakshita" />

      <Hello name="Shaik" />
    </div>
  )
  
}

export default OldApp;