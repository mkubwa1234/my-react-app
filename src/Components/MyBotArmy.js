import React, { useState, useEffect } from "react";
import Button from "./Button";
import BotSearch from "./BotSearch";
import BotFilter from "./BotFilter";

function MyBotArmy() {
    const [bots, setBots] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4001/bots", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then(response => response.json())
        .then(data => {
            setBots([...data]);
        })
        .catch(error => {
            console.error('Error fetching bots:', error);
        });
    }, []); 

    function handleDelete(id) {
        setBots(bots.filter(bot => bot.id !== id));
    };

    const handleChange = (query) => {
        // Placeholder for handling search query
        console.log("Search query:", query);
    };

    const handleClear = () => {
        // Placeholder for clearing search query
        console.log("Clearing search query");
    };

    const filterChange = (value) => {
        // Placeholder for handling filter change
        console.log("Filter value:", value);
    };

    return (
        <div className="">
            <div className="ui card">
                <div className="row">
                    <div className="col-md-12">
                        <BotSearch handleChange={handleChange} handleClear={handleClear} />
                        <BotFilter filterChange={filterChange} />
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
    );
}

export default MyBotArmy;
