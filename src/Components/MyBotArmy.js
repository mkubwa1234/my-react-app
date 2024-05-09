import React, { useState,useEffect } from "react";
import Button from "./Button";
import BotSearch from "./BotSearch";
import FilterBots from "./BotFilter";


function MyBotArmy() {
    const Arr = []
    const [bots, setBots] = useState(Arr)
    const [query, setQuery] = useState(''); 
    const [filter, setFilter] = useState('All');

    useEffect(() => {
      fetch ("http://localhost:4001/bots",{
        method: "GET",
        headers: {
         "Content-Type": "application/json",
      }
    }).then(response => response.json())
    .then(data => {
      setBots([...data])
    })
    }, [bots]) 

    function handleDelete(id) {
        setBots(bots.filter(bot => bot.id !== id))
    
    };


   const handleChange = (query) => {
    setQuery(query);
   };

   const handleClear = () => {
    setQuery('');
   };
   const filterChange = (value) => {
    setFilter(value);
  };

  
    
    return(
        <div className="">
        <div className="ui card">
            <div className="row">
                <div className="col-md-12">
                <BotSearch handleChange={handleChange} handleClear={handleClear} />
                <FilterBots filterChange={filterChange} />
                </div>
                {bots.map(bot => (
                    <div key={bot.id} className="col-sm-3 mb-4">
                        <div className="card">
                            <a href={`/MyBotArmy/${bot.id}`} >
                            <img src={bot.avatar_url} className="card-image" alt="Avatar" />
                            </a>
                            <div className="card-body">
                                <h5 className="card-title">{bot.name}</h5>
                                <p className="card-text">{bot.catchphrase}</p>
                                <p className="card-text">{bot.updated_at}</p>
                                 <Button id={bot.id} onDelete={handleDelete} className="btn btn-danger" />  
                                 </div> 
                        </div>
                    </div>
                ))}

            </div>
        </div>
        </div>
    )
}
export default MyBotArmy;