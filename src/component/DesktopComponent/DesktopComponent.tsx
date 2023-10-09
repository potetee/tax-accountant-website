import React from "react";
import {Routes, Route} from "react-router-dom";
import About from "../About/About";
import Service from "../Services/Services";
import Home from "../Home/Home";
import Header from "../Header/Header";
import Blog from "../Blog/Blog";
import styles from "./DesktopComponent.module.css";
import Fee from "../Fee/FeeComponent";

const DesktopComponent:React.FC = ()=>{
    return (
        <>
            <div className={styles.backgroundImage}>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Service />} />
                <Route path="/fee" element={<Fee />} />
                <Route path="/blog" element={<Blog />} />
            </Routes>
            </div>
        </>

    );
}

export default DesktopComponent;