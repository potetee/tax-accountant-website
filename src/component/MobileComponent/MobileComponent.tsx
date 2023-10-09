import React from "react";
import styles from "./MobileComponent.module.css";
import Header from "../Header/mobile/Header";
import {Routes,Route} from "react-router-dom";
import Home from "../Home/mobile/Home";
import About from "../About/mobile/About";
import Services from "../Services/mobile/Servcies";
import Blog from "../Blog/mobile/Blog";
import MobileSidebar from "../MobileSidebar/MobileSidebar";
import Fee from "../Fee/mobile/FeeComponent";

const MobileComponent:React.FC = ()=>{

    const [showSidebar,setShowSidebar] = React.useState<boolean>(false);

    const setSidebar = ()=>{
        setShowSidebar(!showSidebar);
    }
    return (
        <>
            <div className={styles.backgroundImage}>
                <MobileSidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
                <Header  setSidebar={setSidebar}/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/fee" element={<Fee />} />
                    <Route path="/blog" element={<Blog />} />
                </Routes>

            </div>
        </>
    );
}

export default MobileComponent;