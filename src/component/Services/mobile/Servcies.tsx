import React from "react";
import styles from "./Services.module.css";
import {
    SERVICE1,
    SERVICE1_DESCRIPTION,
    SERVICE1_LIST,
    SERVICE2,
    SERVICE2_DESCRIPTION,
    SERVICE2_LIST
} from "../../../utils/Messages";


const Services:React.FC = () =>{
    return(
        <section>
            <div className={styles.serviceTitle}>
                <div className={styles.serviceTitleFirstCharacter}>業</div><div>務内容</div>
            </div>

            <div className={styles.serviceTitleOutline}>
                <div>
                    <div className={styles.eachServiceOutline}>
                        <div>
                            <div className={styles.serviceEachTitle}>{SERVICE1}</div>
                            <div className={styles.serviceBorder}/>
                        </div>
                        <div>
                            <div className={styles.centerImage}>
                                <img src={process.env.PUBLIC_URL + '/taxAdvice.jpg'} alt="dummy" className={styles.eachPicture}/>
                            </div>
                            <div>{SERVICE1_DESCRIPTION}</div>
                            <div className={styles.serviceList}>
                                {SERVICE1_LIST.map((item, index) => {
                                    return <li key={index}>
                                        {item}
                                    </li>
                                })}
                            </div>
                        </div>
                    </div>
                    <div className={styles.eachServiceOutline}>
                        <div>
                            <div className={styles.serviceEachTitle}>{SERVICE2}</div>
                            <div className={styles.serviceBorder}/>
                        </div>
                        <div>
                            <div className={styles.centerImage}>
                                <img src={process.env.PUBLIC_URL + '/inheritance.jpg'} alt="dummy" className={styles.eachPicture}/>
                            </div>
                            <div>{SERVICE2_DESCRIPTION}</div>
                            <div className={styles.serviceList}>
                                {SERVICE2_LIST.map((item, index) => {
                                    return <li key={index}>
                                        {item}
                                    </li>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;