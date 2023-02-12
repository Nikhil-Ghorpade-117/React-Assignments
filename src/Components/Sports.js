import React, {useEffect, useState} from 'react';
import axios from "axios";


function Sports(props) {

    const [type, setType] = useState(`all_leagues`);
    const [leagues, setLeagues] = useState();
    const [Countries, setCountries] = useState();
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{

        async function getData(){
            const response = await axios.get(`https://www.thesportsdb.com/api/v1/json/3/all_leagues.php`);
            setLeagues(response.data.leagues);
            setIsLoading(false);
            setData(leagues);
        }
        getData();

    }, []);

  return (
    <div>
        
        <button onClick={()=> { setData(Countries); }}> Sports </button>
        <button onClick={()=> { setData(leagues);  }}> Leagues </button>

        { isLoading && <p>Loading...</p> }

        { !isLoading && data && data.map((ele,i) =>{

            return( <p key={`${ele}, ${i}`}>
                {ele.strLeague}
            </p>)
        })}

       {
        console.log(type)
       }

    </div>
  ) 
}

export default Sports