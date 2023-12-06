import React from "react";
import styles from "./About.module.css";
import {mailAddress, titleAndContent} from "../../../utils/Messages";
import presidentPicture from "../../../images/president.jpg";

const About:React.FC = ()=>{
    return (
        <section className={styles.section}>
            <div className={styles.aboutScrollBase}>
                <div className={styles.pictureWrap}>
                    <img className={styles.picturePresident} src={presidentPicture} alt={'president'}/>
                </div>
                {
                    titleAndContent.map((item,index)=>{
                        return (
                            <div className={styles.aboutScroll} key={index}>
                                <div className={styles.titleWrap}>
                                    <div className={styles.scrollTitleBack}>
                                        <h3 className={styles.scrollTitle}>{item.title}</h3>
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