import React from "react";
import styles from "./Services.module.css";


const Services:React.FC = () =>{
    return(
        <section>
            <h2 className={styles.color}>業務内容</h2>
            <ul>
                <li>
                    <h3 className={styles.color}>開業サポート</h3>
                    <p className={styles.color}>あなたのビジネスをスムーズにスタートさせるための包括的なサポートを提供します。これにはビジネスプランの作成、設立手続きの支援、財務管理の助言などが含まれます。</p>
                </li>
                <li>
                    <h3 className={styles.color}>税務顧問</h3>
                    <p className={styles.color}>法規制を遵守しつつ、最適な税務戦略を形成するために必要なアドバイスとガイダンスを提供します。これには、税務申告の準備や税務監査のサポートなどが含まれます。</p>
                </li>
                <li>
                    <h3 className={styles.color}>相続対策</h3>
                    <p className={styles.color}>遺産分割、遺贈税、その他の相続問題に関する専門的なアドバイスを提供します。あなたとあなたの家族が将来を安心して計画できるよう支援します。</p>
                </li>
            </ul>
        </section>
    );
};

export default Services;