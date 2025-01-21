import React from "react";

const PlatformChip = ({ platform  }) => (
  // make a chip that displays the level of knowledge needed
  <div style={{
    display: "inline-block",
    backgroundColor: "#1EB4FF",
    color: "black",
    borderRadius: "25px",
    paddingTop: "5px",
    paddingBottom: "5px",
    paddingLeft: "15px",
    paddingRight: "15px",
    fontSize: "14px",
    fontWeight: "600",
    margin: "5px",
  }}>
    Platform: {platform}
  </div>

);

export default PlatformChip;