import React from "react";

export function Button({ name, onClick }) {
  return (
    <button onClick={onClick} className="btn">
      {name}
    </button>
  );
}
