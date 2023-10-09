import React from "react";
import {Link} from "react-router-dom";
import styles from "./Header.module.css";

const Header: React.FC = () =>{
    return(
        <header className={styles.header}>
            <div className={styles.logoAndNav}>
                <div className={styles.headerTitle}>
                    <div className={styles.headerMainTitle}>ACCOUNTANT</div>
                    <div className={styles.headerSubTitle}>Accounting and other services</div>
                </div>
                <nav className={styles.nav}>
                    <ul className={styles.ul}>
                        <li className={styles.li}><Link className={styles.link} to='/'>Home</Link></li>
                        <li className={styles.li}><Link className={styles.link} to='/about'>About</Link></li>
                        <li className={styles.li}><Link className={styles.link} to='/services'>Service</Link></li>
                        <li className={styles.li}><Link className={styles.link} to='/fee'>Fee</Link></li>
                        <li className={styles.li}><Link className={styles.link} to='/blog'>Blog</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default Header;