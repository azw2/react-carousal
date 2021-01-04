import React from "react";

// styles
import "../styles/Item.css";

const Item = ({ title }) => {
  return <div className="item">{title}</div>;
};

export default Item;
