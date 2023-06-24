import React from "react";
import styles from "./MobileSidebar.module.css";
import {Link} from "react-router-dom";

const MobileSidebar: React.FC<MobileSidebarProps> = ({setShowSidebar,showSidebar}) =>{
    const handleClick = () => {
        setShowSidebar(prevShowSidebar => !prevShowSidebar);
    };

    const renderBackScreen = () => (
        <div className={`${styles.backScreen} 
        ${showSidebar ? styles.slideIn : styles.slideOut}`}
             onClick={handleClick} />
    );

    const renderSidebar = () => (
        <div className={`${styles.sideBar}
        ${showSidebar ? styles.slideIn : styles.slideOut}`}>
            <div className={styles.sectionParent}>
                <div className={styles.eachSection}><Link className={styles.link} to='/' onClick={handleClick}>HOME</Link></div>
                <div className={styles.eachSection}><Link className={styles.link} to='/about' onClick={handleClick}>ABOUT</Link></div>
                <div className={styles.eachSection}><Link className={styles.link} to='/services' onClick={handleClick}>SERVICES</Link></div>
                <div className={styles.eachSection}><Link className={styles.link} to='/blog' onClick={handleClick}>BLOG</Link></div>
            </div>
        </div>
    );

    return(
        <>
            {renderBackScreen()}
            {renderSidebar()}
        </>
    );
}

interface MobileSidebarProps{
    setShowSidebar:React.Dispatch<React.SetStateAction<boolean>>;
    showSidebar:boolean;
}

export default MobileSidebar;