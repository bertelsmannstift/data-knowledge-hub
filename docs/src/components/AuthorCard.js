import React from "react";

const AuthorCard = ({ name, avatar, avatarSrc, position, website, twitter, scholar, mastodon, linkedin, bluesky  }) => (
  // make card with author information
  <div
    style={{
      display: "flex",
      alignItems: "center",
      color: "#000",
      backgroundColor: "#fff",
      borderRadius: "5px",
      padding: "10px",
      marginBottom: "10px",
    }}
  >
    <div
      style={{
        width: "2px",
        height: "50px",
        backgroundColor: "#000",
        marginRight: "10px",
      }}
    />
    <div style={{
      color: "#fff",
      padding: "2px",
      display: avatarSrc ? "none":  "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#2C60AD",
      borderRadius:"100%",
      width:"50px",
      height: "50px",
      fontWeight: "600",
    }}> {avatar}</div>
    <img style={{verticalAlign: "middle",
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  display: avatarSrc ? '' : 'none'}} 
        src={avatarSrc} />
    <div style= {{
      paddingLeft: "10px",
    }}>
      <div style={{ fontWeight: "bold" }}>{name}</div>
      <div style={{ fontSize: "14px" }}>{position ? position : 'Author'}</div>
      <div style={{ fontSize: "14px" }}>
        <a style={{display: website ? 'inline' : 'none', marginLeft: '2px'}} href={website} target="_blank">Website </a> 
        <a style={{display: twitter ? 'inline' : 'none', marginLeft: '2px'}} href={twitter} target="_blank">Twitter / X </a> 
        <a style={{display: mastodon ? 'inline' : 'none', marginLeft: '2px'}} href={mastodon} target="_blank">Mastodon </a> 
        <a style={{display: scholar ? 'inline' : 'none', marginLeft: '2px'}} href={scholar} target="_blank">Google Scholar </a>
        <a style={{display: linkedin ? 'inline' : 'none', marginLeft: '2px'}} href={linkedin} target="_blank">LinkedIn </a>
        <a style={{display: bluesky ? 'inline' : 'none', marginLeft:'2px'}} href={bluesky} target="_blank">Bluesky </a>
      </div>
    </div>
  </div>
);

export default AuthorCard;