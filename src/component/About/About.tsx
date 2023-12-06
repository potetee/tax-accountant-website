import React from "react";
import styles from "./About.module.css";
import {titleAndContent,mailAddress} from "../../utils/Messages";
import presidentPicture from "../../images/president.jpg";

const About:React.FC = ()=>{
    return (
        <>
            <section>
                <div className={styles.aboutScrollBase}>
                    {
                        titleAndContent.map((item,index)=>{
                            return (
                                <div className={styles.aboutScroll} key={index}>
                                    <div className={styles.titleWrap}>
                                        <div className={styles.scrollTitleBack}>
                                            <h3 className={styles.scrollTitle}>{item.title}</h3>
                                        </div>
                                    </div>
                                    <div className={styles.content}>
                                        <div className={styles.contentWrap}>
                                            <div className={styles.aboutScrollContent}>{item.content}</div>
                                        </div>
                                        <div className={styles.pictureContent}>
                                            {index === 0 && <img className={styles.picturePresident} src={presidentPicture}
                                                                 alt={'president'}/>}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <a href={`mailto:${mailAddress}`} className={styles.aboutScrollLeft} target="_blank" rel="noreferrer">
                        メールでのお問い合わせはこちら
                    </a>
                </div>

            </section>

        </>

    );
};

export default About;