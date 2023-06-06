
import React, {useState, useEffect} from "react";



const Display1 = () => {
    let [gold, setGold] = useState(0);
    let [silver, setSilver] = useState(0);
    

    useEffect(()=>{
        console.log("Display1 rendered")
        document.title = `Gold: ${gold} , Silver: ${silver}`
    }, [])
    
    return(
        <div>
            <h1>Gold: {gold}</h1>
            <button onClick={() => setGold(gold + 1)}>Gold</button>
            <h1>Silver:  {silver}</h1>
            <button onClick={() => setSilver(silver + 1)}>Silver</button>
        </div>
    )
}

export default Display1;