import React from "react";
import { Route,Routes } from "react-router-dom";
import About from "./component/About/About";
import Service from "./component/Services/Services";
import Contact from "./component/Contact/Contact";
import Home from "./component/Home/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      <Route path="/services" element={<Service />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;


