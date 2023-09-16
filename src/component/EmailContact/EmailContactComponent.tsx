import React from "react";
import styles from "../Contact/Contact.module.css";
import emailImage from '../../images/l69a8.png';

const EmailContactComponent: React.FC = () => {

    const renderInquiryInput = ()=>{
        return (
            <section className={styles.container}>
                <h2 className={styles.header}>Contact Us</h2>
                <img src={emailImage} alt="contact email address"/>
                {/*{*/}
                {/*    <form  className={styles.form}>*/}
                {/*        <label className={styles.label}>Email</label>*/}
                {/*        <input type="email" name="email"  className={styles.input} />*/}
                {/*        <label className={styles.label}>Message</label>*/}
                {/*        <textarea name="inquiry" className={styles.textarea} />*/}
                {/*        <button type="submit" className={styles.button}>Submit</button>*/}
                {/*    </form>*/}
                {/*}*/}

            </section>
        )
    }

    return (
        <>
            {renderInquiryInput()}
        </>
    )
}

export default EmailContactComponent;