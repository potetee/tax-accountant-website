import React from 'react';
import styles from './Home.module.css';

const Home:React.FC = () =>{

    return(
        <section>
            <div className={styles.underTitleSpace}>
                <div>
                    <div className={styles.title}>
                        <div>大幡周平税理士事務所 </div>
                        <div className={styles.titleSecund}>
                        </div>
                    </div>
                    <div>
                        <div className={styles.titleDescription}>税理士＋αの価値を </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;