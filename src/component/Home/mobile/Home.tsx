import React from "react";
import styles from "./Home.module.css";

const Home: React.FC = () =>{
    return(
      <>
          <div className={styles.homeContent}>
              <div className={styles.homeContentBackground}>
                  <div className={styles.homeContentTitle}>
                      <div>ACCOUNTING & </div>
                      <div className={styles.homeContentTitleSecond}>FINANCIAL SERVICES</div>
                  </div>
                  <div className={styles.homeContentDescription}>Your financial future matters - Let us help you navigate the path to success. </div>
              </div>
          </div>
      </>
    );
}

export default Home;