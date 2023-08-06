import React from "react";

import ErrorBoundary from "./ErrorBoundary";
import { Prize } from "../components/Prize";

/*
  Todos os componentes dentro de ErroBoundary que derem erro irão chamar getDerivedStateFromError() do ErroBoundary
*/
export default function Prizes({ prizes }) {
  return (
    <div>
      {prizes.map((prize, index) => (
        <ErrorBoundary key={index}>
          <Prize prize={prize} />
        </ErrorBoundary>
      ))}
    </div>
  );
}
