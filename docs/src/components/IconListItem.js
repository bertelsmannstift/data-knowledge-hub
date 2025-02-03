import React from "react";

const IconListItem = ({ text, title, icon, blob, link }) => {
  const content = (
    <div
      style={{
        display: "inline-block",
        backgroundImage: `url(${blob})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        minHeight: "250px",
        maxWidth: "280px",
        alignContent: "top",
        textAlign: "center",
        justifyContent: "center",
        padding: "20px",
        cursor: link ? "pointer" : "default",
      }}
    >
      <img src={icon} height="40%" width="40%" alt={title} /> <br />
      <span
        style={{
          fontWeight: "bold",
          fontSize: "1.5em",
          color: "black",
          borderBottom: "2px solid transparent",
          borderImage: "linear-gradient(90deg, #1EB4FF 0%, #90E5FC 100%)",
          borderImageSlice: 1,
          borderRadius: "50px",
        }}
      >
        {title}
      </span>
      <br />
      <span
        style={{
          fontSize: "1em",
          color: "black",
        }}
      >
        {text}
      </span>
    </div>
  );

  return link ? (
    <a href={link} style={{ textDecoration: "none", display: "inline-block" }}>
      {content}
    </a>
  ) : (
    content
  );
};

export default IconListItem;
