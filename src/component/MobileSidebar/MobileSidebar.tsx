import React from "react";
import styles from "./MobileSidebar.module.css";

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
                <div className={styles.eachSection}>HOME</div>
                <div className={styles.eachSection}>ABOUT</div>
                <div className={styles.eachSection}>SERVICES</div>
                <div className={styles.eachSection}>BLOG</div>
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