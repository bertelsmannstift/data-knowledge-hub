import React from "react";

const IconList = ({ children }) => (
  <div>
    <style>
      {`
        .icon-list {
          display: grid;
          grid-template-columns: 1fr; /* Default: Single column */
          gap: 20px;
          justify-content: center;
          align-items: center;
          justify-items: center;
          margin-top: 30px;
          margin-bottom: 30px;
        }

        @media (min-width: 768px) {
          .icon-list {
            grid-template-columns: repeat(2, 1fr); /* Two columns for larger screens */
          }
        }
      `}
    </style>
    <div className="icon-list">{children}</div>
  </div>
);

export default IconList;
