import React from "react";
import styles from "./Footer.module.css";
import HomeIcon from '@material-ui/icons/Home';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';

const Footer :React.FC= () =>{
    return (
        <footer className={styles.footer}>
            <div　className={styles.parentDiv}>
                <div className={styles.reservedRight}>
                    <p>© {new Date().getFullYear()} Tax Accountant. All Rights Reserved.</p>
                </div>

                <div className={styles.infoList}>
                    <div>Get IN Touch</div>
                    <div className={styles.iconAndText}>
                        <HomeIcon/>
                        <div>Address of the company</div>
                    </div>
                    <div className={styles.iconAndText}>
                        <PhoneIcon/>
                        <div>Company phone number</div>
                    </div>
                    <div className={styles.iconAndText}>
                        <EmailIcon/>
                        <div>Company email</div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;