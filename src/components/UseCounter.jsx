import { useState } from "react";

export const useCounter = (value = 0) => {
  const [count, setCount] = useState(value);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);

  return { count, increment, decrement };
};
