import React from "react";
import styles from "./About.module.css";
import {titleAndContent} from "../../../utils/Messages";


type TitleAndContent = {
    title: string;
    content: string;
};
const About:React.FC = ()=>{
    // const titleAndContent:TitleAndContent[] = [
    //     {
    //         title: '私たちについて',
    //         content:'私たちは新設の税理士法人として、\nあなたとあなたのビジネスの成功を目指しています。専門的な知識と豊富な経験をもとに、開業サポートから税務顧問、相続対策まで幅広い業務を提供します。私たちの使命は、信頼と透明性をもとに、クライアントの財務と税務を最適化し、ビジネスの成長を支えることです。\n' +
    //             'また、私たちは常に最新の税法情報を追求し、それをクライアントのための戦略に反映させます。私たちはあなたのパートナーとして、あなたのビジネスが法規制を遵守しつつ最大の経済的成功を達成できるよう支援します。\n' +
    //             '私たちのプロフェッショナルなチームは、各々の業界と専門分野での深い知識と理解を持っています。これにより、私たちはあなたのビジネスに最適なソリューションを提供できると確信しています。 ',
    //     },
    //     {
    //         title: 'ビジョン',
    //         content:'私たちのビジョンは、優れた会計サービスを提供し、テクノロジーと専門知識を活用して、クライアントの財務的成功を後押しする、信頼されるリーダーになることです。' +
    //             'お客様一人ひとりに寄り添い、誠実に対応し、業界のトレンドを先取りすることで、企業や個人のお客様に良い影響を与え、選ばれる会計事務所となることを目指しています。',
    //     },
    //     {
    //         title: '私ちの使命について',
    //         content:'会計事務所名]の使命は、誠実さと顧客中心のアプローチで優れた会計サービスを提供することです。私たちは、クライアント固有のニーズと目標を理解することに努め、信頼とオープンなコミュニケーションに基づく強い関係を構築します。正確性とコンプライアンスを確保し、革新的なテクノロジーを活用することで、クライアントの成功につながる効率的なソリューションを提供します。私たちは、継続的な学習と成長に専念し、最新の専門知識を提供するために、チームの専門的な開発に投資しています。最終的には、お客様の財務の健全性にプラスの影響を与え、お客様の長期的な繁栄に貢献することを目指します。',
    //     }
    // ]

    return (
        <section className={styles.section}>
            <div className={styles.aboutTitle}>
                <div>ABOUT ACCOUNTANT</div>
                <div className={styles.aboutTitleSecond}>COMPANY</div>
            </div>
            <div className={styles.aboutScrollBase}>
                {
                    titleAndContent.map((item,index)=>{
                        return (
                            <div className={styles.aboutScroll} key={index}>
                                <div className={styles['scrollTitleBackgroundPicture' + index]}>
                                    <div className={styles.scrollTitleBack}>
                                        <div className={styles.scrollTitle}>{item.title}</div>
                                    </div>
                                </div>
                                <div className={`${styles.aboutScrollContent} ${index % 2 === 0 ? styles.aboutScrollLeft : styles.aboutScrollRight}`}>{item.content}</div>
                                {/*<div className={styles.aboutScrollContent}>{item.content}</div>*/}
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
};

export default About;