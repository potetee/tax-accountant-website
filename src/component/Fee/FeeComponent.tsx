import React from "react";
import {corporateFees, individualFees,inheritFees} from "./FeeContent";
import styles from "./FeeComponent.module.css";
import pricePicture from "../../images/pricePicture.jpg"

const Fee:React.FC = ()=>{
    return(
        <section className={styles.feeSection}>
            <img src={pricePicture} alt="pricePicture" className={styles.pricePicture}/>
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
                    <article>
                        <h3 className={styles.title}>{inheritFees.title}</h3>
                        {
                            inheritFees.items.map((item,index)=>{
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