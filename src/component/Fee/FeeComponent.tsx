import React from "react";
import {corporateFees, individualFees} from "./FeeContent";
import styles from "./FeeComponent.module.css";

const Fee:React.FC = ()=>{
    return(
        <section>
            <header className={styles.feeTitle}>
                <h2>当事務所の<span className={styles.feeTitleColor}>料金について</span></h2>
            </header>
            <div className={styles.feeBackgroundPosition}>
                <div className={styles.feeBackground} >
                    <article>
                        <h3 className={styles.title}>{corporateFees.title}</h3>
                        {
                            corporateFees.items.map((item,index)=>{
                                return (
                                    <div key={index}>
                                        <ul className={styles.itemTitle}>{item.name}</ul>
                                        {item.details.map((detail,i)=>{
                                            return (
                                                <li key={i}>{detail}</li>
                                            );
                                        })}
                                    </div>
                                )
                            })
                        }
                    </article>
                    <article>
                        <h3 className={styles.title}>{individualFees.title}</h3>
                        {
                            individualFees.items.map((item,index)=>{
                                return (
                                    <div key={index}>
                                        <ul className={styles.itemTitle}>{item.name}</ul>
                                        {item.details.map((detail,i)=>{
                                            return (
                                                <li className={styles.eachFee} key={i}>{detail}</li>
                                            );
                                        })}
                                    </div>
                                )
                            })
                        }
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Fee;