import { useState } from "react";

type CounterProps = {
  initialValue: number;
};

export const Counter = (props: CounterProps) => {
  const [value, setValue] = useState<number>(props.initialValue);
  const increment = () => {
    setValue((prevState) => prevState + 1);
  };
  const decrement = () => {
    setValue((prevState) => prevState - 1);
  };
  return (
    <div>
      <div>value: {value}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </div>
  );
};
