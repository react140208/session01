import { useState } from "react";

export default function Counter() {
  const [cnt, setCnt] = useState(1);

  const inc = () => {
    setCnt(cnt + 1);
    // counter++;
    // console.log(counter);
  };
  const reset = () => {
    setCnt(0);
  };
  const dec = () => {
    setCnt(cnt - 1);
  };

  return (
    <>
      <h1>Counter = {cnt}</h1>
      <button onClick={inc}>➕</button>
      <button onClick={reset}>🧹</button>
      <button onClick={dec}>➖</button>
    </>
  );
}
