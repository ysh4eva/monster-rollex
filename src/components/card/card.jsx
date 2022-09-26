import "./card.css";
import React from "react";

const Card = ({ monster }) => {
  const { name, id, email } = monster;
  return (
    <div className="card-container" key={id}>
      <img
        alt="monster"
        src={`https://robohash.org/${id}?set=set3&size=180x180`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};
export default Card;
