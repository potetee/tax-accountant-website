import React from "react";
import styles from "./Services.module.css";


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
                            <div className={styles.serviceEachTitle}>開業サポート</div>
                            <div className={styles.serviceBorder}/>
                        </div>
                        <div>
                            <div className={styles.centerImage}>
                                <img src={process.env.PUBLIC_URL + '/openup.jpg'} alt="dummy" className={styles.eachPicture}/>
                            </div>
                            <div>あなたのビジネスをスムーズにスタートさせるための包括的なサポートを提供します。これにはビジネスプランの作成、設立手続きの支援、財務管理の助言などが含まれます。</div>
                        </div>

                    </div>
                    <div className={styles.eachServiceOutline}>
                        <div>
                            <div className={styles.serviceEachTitle}>税務顧問</div>
                            <div className={styles.serviceBorder}/>
                        </div>
                        <div>
                            <div className={styles.centerImage}>
                                <img src={process.env.PUBLIC_URL + '/taxAdvice.jpg'} alt="dummy" className={styles.eachPicture}/>
                            </div>
                            <div>法規制を遵守しつつ、最適な税務戦略を形成するために必要なアドバイスとガイダンスを提供します。これには、税務申告の準備や税務監査のサポートなどが含まれます。</div>
                        </div>
                    </div>
                    <div className={styles.eachServiceOutline}>
                        <div>
                            <div className={styles.serviceEachTitle}>相続対策</div>
                            <div className={styles.serviceBorder}/>
                        </div>
                        <div>
                            <div className={styles.centerImage}>
                                <img src={process.env.PUBLIC_URL + '/inheritance.jpg'} alt="dummy" className={styles.eachPicture}/>
                            </div>
                            <div>遺産分割、遺贈税、その他の相続問題に関する専門的なアドバイスを提供します。あなたとあなたの家族が将来を安心して計画できるよう支援します。</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;