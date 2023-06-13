import React from 'react';
import styles from './Home.module.css';

const Home:React.FC = () =>{

    return(
        <section>
            <div className={styles.underTitleSpace}>
                <div>
                    <div className={styles.title}>
                        <div>ACCOUNTING </div>
                        <div className={styles.titleSecund}>
                            <div>& </div>
                            <div className={styles.titleSecundColor}>
                                FINANCIAL SERVICES
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;