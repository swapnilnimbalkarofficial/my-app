import React, { useState, useEffect } from "react";

export default function Comp3() {
  let [count, setCount] = useState(100);
  let [name, setName] = useState(["Swapnil"]);
  let [age, setAge] = useState(24);
  //This will be called on component mount as well as whenever change in state variable

  // useEffect(function () {
  //   console.log("Use effect hook called", count, name, age);
  // });

  //this effect will be activated on component mount once and as well as component
  
  // useEffect(function () {
  //   console.log("Use effect hook called", count, name, age);
  //   return () => {
  //     console.log("componnent unmounted");
  //   };
  // }, []);
  // }, []); //interview and ccee what role of it
  //if you want to perform only once use useEffect()

  useEffect(
    function () {
      console.log("Use effect hook called", count, name, age);
    },
    [name, age], //get user square bracket called
  );

  function myFunction() {
    setCount(count + 1);
  }
  function myFunction1() {
    setAge(age + 1);
  }
  function myFunction2() {
    setName("Abhishek");
  }
  return (
    <div className="w-6xl mx-auto p-4">
      <h1 className="text-center uppercase text-2xl">Use Effect Hook</h1>
      <p>count:{count}</p>
      <button onClick={myFunction} className="border p-3">
        Update
      </button>
      <p>age:{age}</p>
      <button onClick={myFunction1} className="border p-3">
        Update
      </button>
      <p>name:{name}</p>
      <button onClick={myFunction2} className="border p-3">
        Update
      </button>
    </div>
  );
}
