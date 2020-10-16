import React from "react";
import useSessionStorage from "./useSessionStorage";

const useDarkMode = () => {
  const [someValue, setSomeValue] = useSessionStorage(false);
  React.useEffect(() => {
    someValue === true
      ? document.body.classList.add("dark-mode")
      : document.body.classList.remove("dark-mode");
  }, [someValue]);

  return [someValue, setSomeValue];
};

export default useDarkMode;