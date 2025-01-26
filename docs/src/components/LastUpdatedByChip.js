import React from "react";

const LastUpdatedByChip = ({ authorOriginal, authorLastUpdate, createdOn, updatedOn  }) => (
  // component that displays the last update
  <div style={{ width: "100%" }}>
    <div style={{
      display: "inline-block",
      textAlign: "left",
      color: "#000000",
      paddingTop: "0px",
      paddingBottom: "20px",
      paddingLeft: "0px",
      fontSize: "12px",
      fontWeight: "500",
      margin: "0px",
      width: "100%", 
    }}>
      <img src="/img/icon-edit.svg" style={{height: '12px'}}></img> { createdOn ? 'Original post on ' + createdOn + ' by ' + authorOriginal : ''}
      { createdOn && <br /> }
      { authorLastUpdate ? 'last updated on ' + updatedOn + ' by ' + authorLastUpdate : ''}
    </div>
</div>
);

export default LastUpdatedByChip;