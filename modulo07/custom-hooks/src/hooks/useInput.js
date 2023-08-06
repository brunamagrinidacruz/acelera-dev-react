import { useState } from "react";

export function useInput(initialState) {
  const [value, setValue] = useState(initialState);

  function handleChangeValue(event) {
    setValue(event.target.value);
  }

  return [value, handleChangeValue];
}
