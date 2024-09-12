import React from "react";

const LastUpdatedByChip = ({ author, updatedOn  }) => (
  // make a chip that displays the level of knowledge needed
  <div style={{
    display: "inline-block",
    color: "#2C60AD",
    borderRadius: "25px",
    paddingTop: "5px",
    paddingBottom: "5px",
    paddingLeft: "0px",
    paddingRight: "15px",
    fontSize: "14px",
    fontWeight: "600",
    margin: "0px",
    marginBottom: "10px",
  }}>
    last updated by {author} on {updatedOn}
  </div>

);

export default LastUpdatedByChip;