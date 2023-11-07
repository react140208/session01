import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

/*  JSX
      js, ts -> html
      single root
        <> = fragment
      elements -> close
        <input type="text"></input>
        <input type="text" />
      class -> className 
        <div id="root" class="xyz"></div> -> <div id="root" className="xyz"></div>
      all properties use camelCase
        styles: font-size -> fontSize
        events: onclick -> onClick
*/
// win + . -> emoji selector

function App() {
  // let b = { color: "red" }

  //lambda expression , arrow function
  // function xyz(){

  // }

  // const state = useState(1);
  // const cnt = state[0];
  // const setCnt = state[1];
  //destructure js
  // const [cnt, setCnt] = useState(1);

  // const inc = () => {
  //   setCnt(cnt + 1);
  //   // counter++;
  //   // console.log(counter);
  // };
  // const reset = () => {
  //   setCnt(0);
  // };
  // const dec = () => {
  //   setCnt(cnt - 1);
  // };

  // let a = 10;
  return (
    <>
      {/* <div>
        <img src={reactLogo} alt="React" className="logo react" />
        <h1>Salam Donya</h1>
      </div> */}
      {/* {logo()} */}
      <Logo />

      {/* <h1 style={{ color: "red" }}>Salam Donya {a}</h1> */}
      {/* <input type="text" className={"xyz"} /> */}
      {/* <h1>Counter = {cnt}</h1>
      <button onClick={inc}>➕</button>
      <button onClick={reset}>🧹</button>
      <button onClick={dec}>➖</button> */}
      <Counter />
    </>
  );
}

export default App;

// function logo() {
//   return (
//     <div>
//       <img src={reactLogo} alt="React" className="logo react" />
//       <h1>Salam Donya</h1>
//     </div>
//   );
// }

//component -> function return jsx
//             name PascalCase
function Logo() {
  return (
    <div>
      <img src={reactLogo} alt="React" className="logo react" />
      <h1>Salam Donya</h1>
    </div>
  );
}

function Counter() {
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
