import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  let [data1, setData1] = useState([]);
  let [data2, setData2] = useState([]);
  useEffect(function () {
    //console.log("called APIS");
    //for perform multiple api
    Promise.allSettled([
      axios.get("https://fakestoreapi.com/products"),
      axios.get("https://fakestoreapi.com/products/categories"),
    ])
      .then(function (res) {
        console.log(res);
        if (res[0].status === "fulfilled") setData1(res[0].value.data);
        if (res[1].status === "fulfilled") setData2(res[1].value.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);
  return (
    <div className="w-full max-w-6xl mx-auto pt-2 pb-2 grid grid-cols-1 lg:grid-cols-[25%_75%]">
      <aside className="p-3">
        <section>
          <h2 className="uppercase text-center text-2xl pt-3 pb-3">
            Categories
          </h2>
          <ul className="border border-black p-2 rounded-lg">
            {data2 && data2.map((value) => <li key={value}>{value}</li>)}
          </ul>
        </section>

        <section>
          <h2 className="uppercase text-center text-2xl pt-3 pb-3">Brands</h2>
          <ul className="border border-black p-2 rounded-lg">
            <li>
              <a href="#">HP</a>
            </li>
            <li>
              <a href="#">Samsung</a>
            </li>
            <li>
              <a href="#">LG</a>
            </li>
            <li>
              <a href="#">Lenovo</a>
            </li>
            <li>
              <a href="#">Dell</a>
            </li>
            <li>
              <a href="#">Apple</a>
            </li>
          </ul>
        </section>

        <figure className="mt-2 mb-2">
          <img
            className="w-full"
            src="/images/shipping.jpg"
            alt="Shipping information"
          />
        </figure>
      </aside>

      <div className="p-2">
        <section>
          <h2 className="uppercase text-center text-2xl pt-3 pb-3">
            Upcoming Products
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {data1 &&
              data1.map((product) => (
                <figure key={product.id} className="text-center mt-2">
                  <img
                    className="w-full"
                    src={product.image}
                    alt={product.title}
                  />

                  <figcaption>
                    <h4 className="pt-2">${product.price}</h4>
                    <p className="pt-2 pb-2">{product.title}</p>

                    <button
                      className="bg-orange-500 p-2 rounded-lg text-white"
                      type="button"
                    >
                      Add to Cart
                    </button>
                  </figcaption>
                </figure>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
}
