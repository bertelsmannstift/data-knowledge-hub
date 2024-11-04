import React from "react";

const LastUpdatedByChip = ({ authorOriginal, authorLastUpdate, createdOn, updatedOn  }) => (
  // component that displays the last update
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
      Original post on {createdOn} by { authorOriginal } { authorLastUpdate ? 'last updated on ' + updatedOn + ' by ' + authorLastUpdate : ''}
    </div>
</div>
);

export default LastUpdatedByChip;