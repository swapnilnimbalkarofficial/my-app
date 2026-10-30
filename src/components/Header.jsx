import React, { useRef } from "react";
import { Link, useNavigate } from "react-router";
import { searchMovie } from "../redux/slices/searchSlice";
import { useDispatch, useSelector } from "react-redux";

function Header() {
  //let record = useSelector((state) => state.cart.cartvalue);
  let record = useSelector((state) => state.cart?.cartValue ?? []);
  let x1 = useRef();
  let navigate = useNavigate();
  let dispatch = useDispatch();
  function myFunction() {
    if (x1.current.value != "") {
      dispatch(searchMovie(x1.current.value));
      navigate("/search");
    }
  }
  return (
    <header className="w-full max-w-6xl mx-auto pt-2 pb-2 flex flex-col lg:flex-row">
      <figure className="logo w-full lg:w-1/3">
        <img
          className="animate__animated animate__bounce"
          src="/images/logo.png"
          alt="Logo"
        />
      </figure>

      <nav className="w-full lg:w-2/3">
        <ul className="flex flex-wrap justify-center lg:justify-end">
          <li class="px-2 pr-2">
            <Link to="/">Home</Link>
          </li>
          <li class="px-2 pr-2">
            <Link to="/comp1">Label1</Link>
          </li>
          <li class="px-2 pr-2">
            <Link to="/comp2">Label2</Link>
          </li>
          <li class="px-2 pr-2">
            <Link to="/comp3">Label3</Link>
          </li>
          <li class="px-2 pr-2">
            <Link to="/comp4">Label4</Link>
          </li>
          <li class="px-2 pr-2">
            <Link to="/comp5">Label5</Link>
          </li>
          <li class="px-2 pr-2">
            <Link to="/comp11">Props Drilling</Link>
          </li>
          <li class="px-2 pr-2">
            <Link to="/comp21">Context API</Link>
          </li>
          <li class="px-2 pr-2">
            <Link to="/comp31">State List</Link>
          </li>
          <li class="px-2 pr-2">
            <Link to="/comp41">Error Boundary</Link>
          </li>
          <li class="px-2 pr-2">
            <Link to="cart">Cart ({record.length})</Link>
          </li>
          <li class="px-2 pr-2">
            <input ref={x1} className="border" type="text" />
            <button onClick={myFunction} className="border cursor-pointer">
              Search
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
