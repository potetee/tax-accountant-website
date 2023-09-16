import React from "react";
import {Routes, Route} from "react-router-dom";
import About from "../About/About";
import Service from "../Services/Services";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Blog from "../Blog/Blog";
import styles from "./DesktopComponent.module.css";
import Admin from "../Admin/Admin";
import EmailContactComponent from "../EmailContact/EmailContactComponent";

const DesktopComponent:React.FC = ()=>{
    return (
        <>
            <div className={styles.backgroundImage}>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Service />} />
                <Route path="/contact" element={<EmailContactComponent />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/admin" element={<Admin />} />
            </Routes>
            {/*<Footer/>*/}
            </div>
        </>

    );
}

export default DesktopComponent;