import React from "react";

import "./Prize.css";

export function Prize({ prize }) {
  const { year, category, laureates } = prize;
  return (
    <div className="">
      <h2>
        Ano: {year} - {category}
      </h2>
      <div className="laureates">
        {laureates.map(laureate => (
          <div className="laureate">
            <div className="laureate-name">
              {laureate.firstname} {laureate.surname}
            </div>
            <div className="laureate-motivation">{laureate.motivation}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
