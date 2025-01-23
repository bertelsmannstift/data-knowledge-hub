import React from "react";

const IconListItem = ({ text, title, icon, blob }) => (
  // a card that has a background blob
  <div style={{
    display: "inline-block",
    backgroundImage: `url(${blob})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    minHeight: "250px",
    maxWidth: "280px",
    alignContent: "top",
    textAlign: "center",
    justifyContent: "center",
  }}>
    <img src={icon} height="40%" width="40%"></img> <br />
    <span style={{
      fontWeight: "bold",
      fontSize: "1.5em",
      color: "black",
      borderBottom: "2px solid transparent",
	    borderImage: "linear-gradient(90deg, #1EB4FF 0%, #90E5FC 100%)",
	    borderImageSlice: 1,
      borderRadius: "50px"
    }}>{title}</span> 
    <br />
    <span style={{
      fontSize: "1em",
      color: "black",
    }}>{text}</span>
  </div>

);

export default IconListItem;