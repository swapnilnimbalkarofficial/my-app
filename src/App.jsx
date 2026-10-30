import { useState } from "react";
import "./App.css";
import { Provider } from "react-redux";
import mystore from "./redux/myStore";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router";

export default function App() {
  return (
    <>
      <Provider store={mystore}>
        <Header />
        <Outlet />
        <Footer />
      </Provider>
    </>
  );
}
