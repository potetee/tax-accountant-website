import React from "react";
import { Route,Routes } from "react-router-dom";
import About from "./component/About/About";
import Service from "./component/Services/Services";
import Contact from "./component/Contact/Contact";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
      <Route path="/services" element={<Service />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;


