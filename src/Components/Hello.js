
import React , {useContext} from "react";
import cricketContext from "../context/cricketContext";


const Hello = () => {
    // will show u 
    const {cricketer, setCricketer} = useContext(cricketContext);
    const {name, age, country, retired} = cricketer;
    // console.log(x);

    return(
        <div>
            <h1>Hello {name} </h1>
            <p>Age: {age}</p>
            <button onClick={()=>setCricketer({...cricketer, age: cricketer.age+1})}> Update my age</button>
            <p>Country: {country}</p>
            <p>Retired: {retired ? "Yes" : "No"}</p>
            <p>Hope you are doing fine!</p>

            <hr />
        </div>
    )
}

export default Hello;