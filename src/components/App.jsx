import React from "react";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import { Outlet } from "react-router";
import { Provider } from "react-redux";
import mystore from "../redux/myStore";

export default function App() {
  return (
    <>
      <Provider store={mystore}>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </Provider>
    </>
  );
}
