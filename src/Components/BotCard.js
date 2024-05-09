import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import BotTypes from './BotTypes';


function Card({ enlistBot }) {
  const { id } = useParams();
  const [bot, setBot] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4001/bots/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then(response => response.json())
      .then(data => {
        setBot(data);
      })
      .catch(error => {
        console.error('Error fetching bot:', error);
      });
  }, [id]);

  if (!bot) {
    return <div>Loading...</div>;
  }
  const handleEnlistClick = () => {
    enlistBot(bot);
  };


  return (
    <div>
    <div className="col-sm-3 mb-4">
      <div className="card">
        <BotTypes handleEnlistClick={handleEnlistClick} />
        <img src={bot.avatar_url} className="card-image" alt="Avatar" />
        <div className="card-body">
          <h5 className="card-title">{bot.name}</h5>
          <p className="card-text">{bot.catchphrase}</p>
          <p className="card-text">{bot.class}</p>
        </div>
        <div className="extra content">
          <button className=''>
            Enlist
          </button>
          <Link to="/">
            <button className='btn btn-primary btn-sm m-4'>Go Back</button>
             </Link>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Card;
