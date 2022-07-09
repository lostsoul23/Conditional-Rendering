import React from "react";
import Login from "./Login";

var isLoggedIn = 1; // true

// const currTime = new Date().getHours();
const currTime = new Date(2022, 7, 10, 20).getHours();

console.log(currTime);

// Way 1 (too many lines of code !)
// function renderConditionally() {
//   if (isLoggedIn) {
//     return <h1>Hello</h1>;
//   } else {
//     return (
//       // Way A
//       // <form className="form">
//       //   <input type="text" placeholder="Username" />
//       //   <input type="password" placeholder="Password" />
//       //   <button type="submit">Login</button>
//       // </form>

//       // Way B
//       <Login />
//     );
//   }
// }

function App() {
  return (
    <div className="container">
      {/* {currTime > 12 ? <h1>Why are you still working ?</h1> : null}; Way 1 */}
      {currTime > 12 && <h1>Why are you still working ?</h1>}
      {/* The ternary way ! */}
      {isLoggedIn ? <h1>Hello</h1> : <Login />}
      {/* The otheer way ! */}
      {/* {renderConditionally()} */}
      {/* <h1>Hello</h1> */}
      {/* <form className="form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form> */}
    </div>
  );
}

export default App;
