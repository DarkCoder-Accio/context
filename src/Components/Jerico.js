import { useContext } from "react";
import cricketContext from "../context/cricketContext";

const Jerico = () => {
  const name = useContext(cricketContext);

    return (
        <div>
            <h1> I will beat Navneet, have a look dear {name}</h1>
        </div>
    )
}

export default Jerico;