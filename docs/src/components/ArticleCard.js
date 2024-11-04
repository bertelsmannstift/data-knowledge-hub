import React from "react";

const ArticleCard = ({ heading, author, organization, teaser, link }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      color: "#000",
      backgroundColor: "#fff",
      borderRadius: "5px",
      padding: "15px",
      marginBottom: "10px",
      border: "1px solid #e0e0e0",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    }}
  >
    {/* Heading */}
    <div style={{ fontWeight: "bold", fontSize: "18px", marginBottom: "5px" }}>
      {heading}
    </div>

    {/* Author and Organization */}
    <div style={{ fontSize: "14px", color: "#555", marginBottom: "10px" }}>
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
          color: "#2C60AD",
          fontWeight: "bold",
          textDecoration: "none",
        }}
      >
        Read more
      </a>
    )}
  </div>
);

export default ArticleCard;
