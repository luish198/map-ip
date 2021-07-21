import React from "react";
import "./result.css";

export default function Result(props) {
  return (
    <>
      <div classname="infoContainer1">
        <h1>{props.heading}</h1>
        <h2>Details:</h2>
        <br></br>
        <p>Your Ip is {props.searchResult}</p>
      </div>
    </>
  );
}
