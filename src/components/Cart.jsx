import React from "react";
import { useSelector } from "react-redux";

export default function Cart() {
  let info = useSelector((state) => state.cart.cartvalue);
  return (
    <div className="w-6xl mx-auto">
      Cart
      <div className="grid grid-cols-4 gap-3">
        {info &&
          info.map((value) => (
            <div className="text-center">
              <img src={value.img} alt="" />
              <h2>{value.price}</h2>
              <p>{value.title}</p>
              <button className="cursor-pointer border">Delete</button>
            </div>
          ))}
      </div>
    </div>
  );
}
