//http://localhost:5173/
//App=> Header from Home footer

//http://localhost:5173/comp1
//App=> Header from Comp1 footer

//http://localhost:5173/login
//App=> Header from login footer

//http://localhost:5173/JHGFFHHDFD
//App=> Header page not found
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import Home from "./Home";
import Comp1 from "./Comp1";
import Comp2 from "./Comp2";
import Comp3 from "./Comp3";
import Comp4 from "./Comp4";
import Comp5 from "./Comp5";
import Pagenotfound from "./Pagenotfound";
import { NavLink, Link } from "react-router";
import Comp11 from "./Comp11";
import Comp12 from "./Comp12";
import Comp13 from "./Comp13";
import Comp14 from "./Comp14";
import Comp21 from "./Comp21";
import Comp31 from "./Comp31";
import Comp41 from "./Comp41";

const PROJECTROUTE = (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="" element={<Home />} />
        <Route path="comp1" element={<Comp1 />} />
        <Route path="comp2" element={<Comp2 p1="100" p2="200" />} />
        <Route path="comp3" element={<Comp3 />} />
        <Route path="comp4" element={<Comp4 />} />
        <Route path="comp5" element={<Comp5 />} />
        <Route path="*" element={<Pagenotfound />} />
        <Route path="comp11" element={<Comp11 />} />
        <Route path="comp21" element={<Comp21 />} />
        <Route path="comp31" element={<Comp31 />} />
        <Route path="comp41" element={<Comp41 />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default PROJECTROUTE;
