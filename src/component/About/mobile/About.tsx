import React from "react";
import styles from "./About.module.css";
import {mailAddress, titleAndContent} from "../../../utils/Messages";

const About:React.FC = ()=>{
    return (
        <section className={styles.section}>
            <div className={styles.aboutScrollBase}>
                {
                    titleAndContent.map((item,index)=>{
                        return (
                            <div className={styles.aboutScroll} key={index}>
                                <div >
                                    <div className={styles.scrollTitleBack}>
                                        <div className={styles.scrollTitle}>{item.title}</div>
                                    </div>
                                </div>
                                <div className={`${styles.aboutScrollContent} ${index % 2 === 0 ? styles.aboutScrollLeft : styles.aboutScrollRight}`}>{item.content}</div>
                                {/*<div className={styles.aboutScrollContent}>{item.content}</div>*/}
                            </div>
                        )
                    })
                }
                <a href={`mailto:${mailAddress}`} className={styles.aboutScrollLeft}  target="_blank" rel="noreferrer">
                    メールでのお問い合わせはこちら
                </a>
            </div>
        </section>
    );
};

export default About;