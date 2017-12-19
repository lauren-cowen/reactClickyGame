import React from "react";
import "./MemoryCard.css";

const FriendCard = props => (
  <div className="card">
    <div className="img-container">
      <img onClick={() => props.clickCard(props.id)} alt={props.name} src={props.image} />
    </div>
  </div>
);

export default FriendCard;