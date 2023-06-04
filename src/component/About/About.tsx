import React from "react";
import styles from "./About.module.css";

const About:React.FC = ()=>{
    return (
        <section>
            <h2 className={styles.color}>私たちについて</h2>
            <p className={styles.color}>私たちは新設の税理士法人として、あなたとあなたのビジネスの成功を目指しています。専門的な知識と豊富な経験をもとに、開業サポートから税務顧問、相続対策まで幅広い業務を提供します。私たちの使命は、信頼と透明性をもとに、クライアントの財務と税務を最適化し、ビジネスの成長を支えることです。</p>

            <p className={styles.color}>また、私たちは常に最新の税法情報を追求し、それをクライアントのための戦略に反映させます。私たちはあなたのパートナーとして、あなたのビジネスが法規制を遵守しつつ最大の経済的成功を達成できるよう支援します。</p>

            <p className={styles.color}>私たちのプロフェッショナルなチームは、各々の業界と専門分野での深い知識と理解を持っています。これにより、私たちはあなたのビジネスに最適なソリューションを提供できると確信しています。</p>
        </section>
    );
};

export default About;