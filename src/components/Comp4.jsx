import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Comp4() {
  const [data, setData] = useState([]);

  useEffect(function () {
    axios
      .get("http://localhost:4003/users")
      .then(function (res) {
        console.log(res.data);
        setData(res.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-center uppercase text-2xl mb-4">Data from MongoDB</h1>

      <table className="w-full border-collapse border border-black">
        <thead>
          <tr>
            <th className="border border-black p-2">Name</th>
            <th className="border border-black p-2">Age</th>
            <th className="border border-black p-2">Place</th>
          </tr>
        </thead>

        <tbody>
          {data.map((value, index) => (
            <tr key={value._id || index}>
              <td className="border border-black p-2">{value.name}</td>
              <td className="border border-black p-2">{value.age}</td>
              <td className="border border-black p-2">{value.place}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
