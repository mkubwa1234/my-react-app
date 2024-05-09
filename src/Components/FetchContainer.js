import React from "react";
import MyBotArmy from "./MyBotArmy";
import Button from "./Button";
import BotSearch from "./BotSearch";


function fetchContainer() {
   
    return(
        <div className='ui card bg-warning'>
        <h1>BOTS COLLECTION</h1>
       <MyBotArmy />
       <Button />
       <BotSearch />
       
       
       </div>
    )
}
export default fetchContainer;