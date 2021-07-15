import React from "react";
import "./Link.css";

function Link(props) {
  return (
    <a href={props.link}>
      <div className="linkBox">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </a>
  );
}

export default Link;
