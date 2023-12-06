import React from "react";
import {Link} from "react-router-dom";
import styles from "./Header.module.css";

const Header: React.FC = () =>{
    return(
        <header className={styles.header}>
            <div className={styles.logoAndNav}>
                <div className={styles.headerTitle}>
                    <div className={styles.headerMainTitle}>Ohata Shuhei</div>
                    <div className={styles.headerSubTitle}>Tax Accountant Office</div>
                </div>
                <nav className={styles.nav}>
                    <ul className={styles.ul}>
                        <li className={styles.li}><Link className={styles.link} to='/'>Home</Link></li>
                        <li className={styles.li}><Link className={styles.link} to='/about'>About</Link></li>
                        <li className={styles.li}><Link className={styles.link} to='/services'>Service</Link></li>
                        <li className={styles.li}><Link className={styles.link} to='/fee'>Fee</Link></li>
                        {/*TODO Blogの実装は後ほど*/}
                        {/*<li className={styles.li}><Link className={styles.link} to='/blog'>Blog</Link></li>*/}
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default Header;