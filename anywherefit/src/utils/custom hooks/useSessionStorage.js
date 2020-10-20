import React from "react";

const useSessionStorage = (key, initalValue) => {
  const [storedValue, setStoredValue] = React.useState(() => {
    const item = window.sessionStorage.getItem(key);
    return item ? JSON.parse(item) : initalValue;
  });
  const setValue = (value) => {
    setStoredValue(value);
    window.sessionStorage.setItem(key, JSON.stringify(value));
  };
  return [storedValue, setValue];
};

export default useSessionStorage;