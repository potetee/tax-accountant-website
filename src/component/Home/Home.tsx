import React from 'react';
import styles from './Home.module.css';

const Home:React.FC = () =>{

    return(
        <section>
            <h2 className={styles.description}>Home</h2>
            <p className={styles.description}>確かな知識と経験を持つ税理士事務所です。税務コンプライアンスの確保と最適化を提案し、お客様の成長をサポートします。幅広い税務サービスを提供し、個別のニーズに合わせたソリューションを提供します。経営者の負担を軽減し、効率的かつ正確な税務戦略を実現します。信頼性と実績を基に、継続的なパートナーシップを築きます。税務に関する問題や課題に対して、専門知識を活用したトップクラスのサービスを提供します。お客様の信頼に応えるため、最新の税法変更や規制に常に対応しています。ご要望やお悩みに真摯に向き合い、最適な解決策を見つけ出します。税務のプロフェッショナルとして、お客様の成功を支えるために全力を尽くします。</p>
        </section>
    );
};

export default Home;