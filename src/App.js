import "./App.css";
import { BrowserRouter, Routes, Route,Redirect, HashRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


import React, { Fragment } from "react";



import Home from "./Home";
import Companydetail from "./component/Companydetail";
import Company from "./Company";
import GetbyCompanyname from "./component/Getbycompany";



function App(props) {
  return (
    <Fragment>
      <HashRouter>
        <Routes >
        <Route exact  path="/" element={<Home />} />
        <Route   path="/Companydetails" element={<Companydetail />} />
        <Route   path="/Company" element={<Company />} />
        <Route   path="/Company1" element={<GetbyCompanyname />} />

        </Routes>
      </HashRouter>
    </Fragment>
  );
}

export default App;

