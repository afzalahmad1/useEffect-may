
import  React, { useEffect, useState } from "react";


let data = [
    'Carolyn',   'Chloe',    'Claire',
    'Deirdre',   'Diana',    'Diane',
    'Donna',     'Dorothy',  'Elizabeth',
    'Ella',      'Emily',    'Emma',
    'Faith',     'Felicity', 'Fiona',
    'Gabrielle', 'Grace',    'Hannah',
    'Heather',   'Irene',    'Jan',
    'Jane',      'Jasmine',  'Jennifer',
    'Jessica',   'Joan',     'Joanne',
    'Julia',     'Karen',    'Katherine',
    'Kimberly',  'Kylie'
  ]

const LiveSearch = () => {
    let [search, setSearch] = useState(""); // 1
    let [filteredData, setFilteredData] = useState(data); // 2

    // console.log("Component is reloading")

    //   useState()  // 3

    //   if(search.length>=8){
    //     useState()  // 4
    //   }

    //   useState() // 5

     
    useEffect(
        () => {
            setFilteredData(data.filter((value) => value.includes(search)))  
        }, [search]
    )
    

    return(
        <div>
              <input 
               type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              
              />

              {
                filteredData.map((value) => (
                     <p>{value}</p>
                ))
              }

        </div>
    )
} 


export default LiveSearch;