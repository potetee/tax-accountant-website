import React from "react";
import styles from "./About.module.css";
import {titleAndContent} from "../../utils/Messages";

const About:React.FC = ()=>{
    return (
        <section>
            <div className={styles.aboutTitle}>
                <div>ABOUT ACCOUNTANT</div>
                <div className={styles.aboutTitleSecond}>COMPANY</div>
            </div>
            <div className={styles.aboutScrollBase}>
                {
                    titleAndContent.map((item,index)=>{
                        return (
                            <div className={`${styles.aboutScroll} ${index % 2 === 0 ? styles.aboutScrollLeft : styles.aboutScrollRight}`} key={index}>
                                <div className={styles['scrollTitleBackgroundPicture' + index]}>
                                    <div className={styles.scrollTitleBack}>
                                        <div className={styles.scrollTitle}>{item.title}</div>
                                    </div>
                                </div>
                                <div className={styles.aboutScrollContent}>{item.content}</div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
};

export default About;