import { useCounter } from "./UseCounter";

export const Counter = () => {
  const { count, increment, decrement } = useCounter(0);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
};
