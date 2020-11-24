import { useState } from "react";

export const useToggleState = (initValue = false) => {
  const [state, setState] = useState(initValue);
  const toggle = () => {
    setState(!state);
  };

  return [state, toggle];
};
