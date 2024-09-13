import React from "react";

const LanguageChip = ({ lang  }) => (
  // make a chip that displays the programming language
  <div style={{
    display: "inline-block",
    backgroundColor: "#6EC2F9",
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
    Language: {lang}
  </div>

);

export default LanguageChip;