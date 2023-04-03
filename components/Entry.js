import React from "react";

export default function Entry(props) {
  return (
    <div className="entry">
      <img src={props.item.imageUrl} className="entry--image" />
      <div className="entry--info">
        <img src={require("../images/Fill_219.png")} className="entry--pin" />
        <span className="entry--location">{props.item.location}</span>
        <a href="{props.googleMapsUrl}" className="gray">
          View on Google Maps{" "}
        </a>
        <p className="entry--title">{props.item.title}</p>
        <p className="entry--dates">
          {props.item.startDate} - {props.item.endDate}
        </p>
        <div className="entry--decription--contain">
          <p className="entry--description">{props.item.description}</p>
          <hr></hr>
        </div>
      </div>
    </div>
  );
}
