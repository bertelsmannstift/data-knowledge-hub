import React from "react";

const LastUpdatedByChip = ({ author, updatedOn  }) => (
  // make a chip that displays the level of knowledge needed
  <div style={{ width: "100%" }}>
    <div style={{
      display: "inline-block",
      textAlign: "right",
      color: "#2C60AD",
      paddingTop: "0px",
      paddingBottom: "0px",
      paddingLeft: "0px",
      fontSize: "14px",
      fontWeight: "600",
      margin: "0px",
      width: "100%", // Ensure the inner div takes up full width
    }}>
      last updated by {author} on {updatedOn}
    </div>
</div>
);

export default LastUpdatedByChip;