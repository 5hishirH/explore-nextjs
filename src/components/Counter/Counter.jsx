"use client";

import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);

  return (
    <div className="border-2 border-primary">
      <div>Count = {count}</div>
      <div className="join">
        <button
          onClick={increase}
          className="btn btn-success text-white join-item"
        >
          Increase
        </button>
        <button
          onClick={decrease}
          className="btn btn-warning join-item"
        >
          Decrease
        </button>
      </div>
    </div>
  );
};

export default Counter;
