import React from "react";
import styles from "./Home.module.css";

const Home: React.FC = () =>{
    return(
      <>
          <div className={styles.homeContent}>
              <div className={styles.homeContentBackground}>
                  <div className={styles.homeContentTitle}>
                      <div>大幡周平税理士事務所 </div>
                  </div>
                  <div className={styles.homeContentDescription}>税理士＋αの価値を </div>
              </div>
          </div>
      </>
    );
}

export default Home;