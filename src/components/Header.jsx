import React from "react";
import { Link } from "react-router";

function Header() {
  return (
    <header className="w-full max-w-6xl mx-auto pt-2 pb-2 flex flex-col lg:flex-row">
      <figure className="w-full lg:w-1/3">
        <img
          className="animate__animated animate__bounce"
          src="/images/logo.png"
          alt="Logo"
        />
      </figure>

      <nav className="w-full lg:w-2/3">
        <ul className="flex flex-wrap justify-center lg:justify-end">
          <li class="px-2">
            <Link to="/">Home</Link>
          </li>
          <li class="px-2">
            <Link to="/comp1">Label1</Link>
          </li>
          <li class="px-2">
            <Link to="/comp2">Label2</Link>
          </li>
          <li class="px-2">
            <Link to="/comp3">Label3</Link>
          </li>
          <li class="px-2">
            <Link to="/comp4">Label4</Link>
          </li>
          <li class="px-2">
            <Link to="/comp5">Label5</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
