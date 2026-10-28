import React, { useState } from "react";
/*
props values are not chnaged
props values are only purpose and use them 
so when we want chnageble data in component we will go for state varibale 
state vrariable are 100% mutable
*/
//create state varbale by using useState()
export default function Comp2(props) {
  let [count, setCount] = useState(100);
  console.log(setCount);

  let [brands, setBrands] = useState(["LG", "Samsung"]);
  let [name, setName] = useState(["Swapnil"]);
  let [info, setInfo] = useState({ place: "nsk" });
  let [status] = useState(true);

  let userName = "root";
  function myFunction() {
    props.p1 = 200;
  }
  function myFunction1() {
    userName = "swapnil";
  }
  function myFunction2() {
    setCount(count + 1);
  }
  function myFunction3() {
    setBrands(["Lenovo", "Asus"]);
    setName("Shivam");
    setInfo({ place: "Mumbai" });
  }
  return (
    <div className="w-6xl mx-auto p-4">
      <h1 className="text-center uppercase text-2xl">Props vs state</h1>
      <p>
        Props Values={props.p1}
        {props.p2}
      </p>
      <button onClick={myFunction} className="border p-3">
        Update
      </button>
      <p>stateVariable:{count}</p>
      <button onClick={myFunction2} className="border p-3">
        Update
      </button>
      <button onClick={myFunction3} className="border p-3">
        Update
      </button>
      <p>
        Brands:{brands[0]}
        {brands[1]}
      </p>
      <p>UserName:{name}</p>
      <p>UserPlace:{info.place}</p>
    </div>
  );
}
