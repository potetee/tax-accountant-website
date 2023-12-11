import React from "react";
import styles from "./Services.module.css";
import {
    SERVICE0,
    SERVICE0_LIST,
    SERVICE1,
    SERVICE1_DESCRIPTION,
    SERVICE1_LIST,
    SERVICE2,
    SERVICE2_DESCRIPTION,
    SERVICE2_LIST
} from "../../utils/Messages";
import servicePaper from "../../images/handsTogther.jpg";

const Services:React.FC = () =>{
    return(
        <section className={styles.sectionBackground}>
            <img className={styles.servicePicture} src={servicePaper} alt={'paper'} />
            <div className={styles.serviceTitleOutline}>
                <div className={styles.eachServiceOutline}>
                    <div className={styles.titleOutline}>
                        <div className={styles.serviceEachTitle}>{SERVICE0}</div>
                        <div className={styles.serviceBorder}/>
                    </div>
                    <div>
                        <div className={styles.serviceList}>
                            {SERVICE0_LIST.map((item, index)=>{
                                return(
                                    <li key={index}>
                                        {item}
                                    </li>
                                );})
                            }
                        </div>
                    </div>
                </div>
                <div className={styles.eachServiceOutline}>
                    <div className={styles.titleOutline}>
                        <div className={styles.serviceEachTitle}>{SERVICE1}</div>
                        <div className={styles.serviceBorder}/>
                    </div>
                    <div>
                        <div  className={styles.serviceTitle2}>{SERVICE1_DESCRIPTION}</div>
                        <div className={styles.serviceList}>
                            {SERVICE1_LIST.map((item, index)=>{
                                return(
                                    <li key={index}>
                                        {item}
                                    </li>
                                );})
                            }
                        </div>
                    </div>
                </div>
                <div className={styles.eachServiceOutline}>
                    <div className={styles.titleOutline}>
                        <div className={styles.serviceEachTitle}>{SERVICE2}</div>
                        <div className={styles.serviceBorder}/>
                    </div>
                    <div>
                        <div>{SERVICE2_DESCRIPTION}</div>
                        <div className={styles.serviceList}>
                            {SERVICE2_LIST.map((item, index)=>{
                                return(
                                    <li key={index}>
                                        {item}
                                    </li>
                                );})
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;