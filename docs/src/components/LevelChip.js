import React from "react";

const LevelChip = ({ level  }) => (
  // make a chip that displays the level of knowledge needed
  <div style={{
    display: "inline-block",
    backgroundColor: "black",
    color: "#fff",
    borderRadius: "25px",
    paddingTop: "5px",
    paddingBottom: "5px",
    paddingLeft: "15px",
    paddingRight: "15px",
    fontSize: "14px",
    fontWeight: "600",
    margin: "10px",
  }}>
    Level required: {level}
  </div>

);

export default LevelChip;