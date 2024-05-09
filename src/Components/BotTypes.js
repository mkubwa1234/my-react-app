import React from "react";

function BotTypes({ bot, addBot, removeBot }) {
  if (!bot) {
    return null;
  }

  let botType;
  switch (bot.bot_class) {
    case "Assault":
      botType = <i className="icon large circular military" />;
      break;
    case "Defender":
      botType = <i className="icon large circular shield" />;
      break;
    case "Support":
      botType = <i className="icon large circular ambulance" />;
      break;
    default:
      botType = <i className="icon large circular question" />;
  }

  const handleEnlistClick = () => {
    addBot(bot);
  };

  const handleRemoveClick = () => {
    removeBot(bot);
  };

  return (
    <div className="col-sm-3 mb-4">
      <div className="card">
        <img
          alt="Avatar"
          className="card-image"
          src={bot.avatar_url || ""}
          onClick={bot.owned ? handleRemoveClick : handleEnlistClick}
        />
        <div className="card-body">
          <h5 className="card-title">{bot.name}</h5>
          <p className="card-text">{bot.catchphrase}</p>
          <p className="card-text">Health: {bot.health}</p>
          <p className="card-text">Armor: {bot.armor}</p>
          <p className="card-text">Damage: {bot.damage}</p>
          {/* Display botType here */}
          <div className="bot-type">{botType}</div>

          <div className="extra content">
            <button
              className={`ui button fluid ${bot.owned ? "red" : "green"}`}
              onClick={bot.owned ? handleRemoveClick : handleEnlistClick}
            >
              {bot.owned ? "Remove" : "Enlist"}
            </button>
            {bot.owned && (
              <button
                className="ui button fluid red"
                onClick={handleRemoveClick}
              >
                Remove from Army
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BotTypes;
