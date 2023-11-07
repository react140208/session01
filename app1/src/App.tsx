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

function App() {
  // let b = { color: "red" }
  let a = 10;
  return (
    <>
      <h1>Salam Donya</h1>
      <h1 style={{ color: "red" }}>Salam Donya {a}</h1>
      <input type="text" className={"xyz"} />
    </>
  );
}

export default App;
