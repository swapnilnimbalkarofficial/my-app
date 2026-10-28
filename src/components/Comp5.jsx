import axios from "axios";
import React, { useRef } from "react";
import { Navigate, useNavigate } from "react-router";

export default function Comp5() {
  let x1 = useRef();
  let x2 = useRef();
  let x3 = useRef();
  let naviget = useNavigate();

  function myFunction() {
    let record = {
      name: x1.current.value,
      age: x2.current.value,
      place: x3.current.value,
    };
    axios
      .post("http://localhost:4003/users/", record)
      .then(function (res) {
        console.log(res);
        naviget("/comp4");
      })
      .catch(function (err) {
        console.log(err);
      });
  }
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-center uppercase text-2xl mb-4">
        Add record in MongoDB
      </h1>
      <input ref={x1} type="text" placeholder="Enter Name" className="border" />
      <br />
      <input ref={x2} type="text" placeholder="Enter Age" className="border" />
      <br />
      <input
        ref={x3}
        type="text"
        placeholder="Enter Place"
        className="border"
      />
      <br />
      <button onClick={myFunction} className="border p-3">
        Add
      </button>
    </div>
  );
}
