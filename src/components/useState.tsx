import { useReducer } from "react";

type Action = "DECREMENT" | "INCREMENT" | "DOUBLE" | "RESET";

const reducer = (currentCount: number, action: Action) => {
  switch (action) {
    case "DECREMENT":
      return currentCount - 1;
    case "INCREMENT":
      return currentCount + 1;
    case "DOUBLE":
      return currentCount * 2;
    case "RESET":
      return 0;
  }
};

type CounterProps = {
  initialValue: number;
};

export const Counter = (props: CounterProps) => {
  const [count, dispatch] = useReducer(reducer, props.initialValue);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch("DECREMENT")}>-</button>
      <button onClick={() => dispatch("INCREMENT")}>+</button>
      <button onClick={() => dispatch("DOUBLE")}>x2</button>
      <button onClick={() => dispatch("RESET")}>Reset</button>
    </div>
  );
};
