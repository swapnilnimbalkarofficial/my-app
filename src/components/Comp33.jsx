import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Comp33(props) {
  let [apidata, setApidata] = useState([]);
  useEffect(
    function () {
      let apipath = "";
      if (props.p2 == "") {
        apipath = "https://fakestoreapi.com/products";
      } else {
        apipath = `https://fakestoreapi.com/products/category/${props.p2}`;
      }
      axios
        .get(apipath)
        .then(function (res) {
          console.log(res);
          setApidata(res.data);
        })
        .catch(function (err) {
          console.log(err);
        });
    },
    [props.p2],
  );
  return (
    <div>
      Comp24
      {props.p2}
      <hr />
      <div className="grid gap-4 grid-cols-4">
        {apidata &&
          apidata.map((value) => (
            <figure key={value.id}>
              <img src={value.image} alt="" />
              <figcaption>
                <h2>{value.price}</h2>
                <p>{value.title}</p>
              </figcaption>
            </figure>
          ))}
      </div>
    </div>
  );
}
