import { Component } from "react";
import Card from "../card/card";
import "./cardlist.css";

import React from "react";

const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <Card monster={monster} />;
      })}
    </div>
  );
};

export default CardList;
