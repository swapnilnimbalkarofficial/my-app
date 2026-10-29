import React, { useRef, useState } from "react";
import Comp12 from "./Comp12";

export default function Comp11() {
  const x1 = useRef();
  const [name, setName] = useState("");

  function myFunction() {
    setName(x1.current.value);
  }

  return (
    <div className="w-7xl mx-auto border p-4">
      <h1 className="text-2xl">Props Drilling</h1>
      <input ref={x1} type="text" className="border" />
      <button onClick={myFunction} className="border">
        Data
      </button>
      {name}
      <hr />
      <Comp12 p1={name} />
    </div>
  );
}
