import React from "react";

const ArticleCard = ({ heading, author, organization, teaser, link }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      color: "#000",
      backgroundColor: "#fff",
      borderRadius: "5px",
      padding: "40px",
      marginBottom: "10px",
      border: "2px solid #73F19C",
      boxShadow: "0 2px 5px #73F19C",
    }}
  >
    {/* Heading */}
    <div style={{ fontWeight: "bold", fontSize: "18px", marginBottom: "0px", paddingBottom:"0px" }}>
      {heading}
    </div>

    {/* Author and Organization */}
    <div style={{ fontSize: "14px", color: "black", marginBottom: "10px" }}>
      <span style={{ fontStyle: "italic" }}>
        by {author} | {organization}
      </span>
    </div>

    {/* Teaser */}
    <div style={{ fontSize: "14px", color: "#333", marginBottom: "15px" }}>
      {teaser}
    </div>

    {/* Link */}
    {link && (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontSize: "14px",
          color: "black",
          fontWeight: "bold",
          textDecoration: "none",
        }}
      >
        Read more <img src="/img/icons/chevron-right.svg" alt="arrow right" style={{marginLeft: '4px'}} />
      </a>
    )}
  </div>
);

export default ArticleCard;
