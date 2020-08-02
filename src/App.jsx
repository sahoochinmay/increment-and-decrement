import React from "react";
import { useState } from "react";

const App = () => {
  const [num, setnum] = useState(0);
  const inc = () => {
    setnum(num + 1);
  };
  const dec = () => {
    if (num > 0) {
      setnum(num - 1);
    } else {
      alert("You reach Zero position.");
    }
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1>{num}</h1>
          <div className="btn_div">
            <button onClick={inc}>Increment</button>
            <button onClick={dec}>Decrem</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
