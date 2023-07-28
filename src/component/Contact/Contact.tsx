import React,{useState} from "react";
import styles from "./Contact.module.css";
import {postInquiry} from "../../features/inquiry/inquiryApi";
import store from "../../store/store";

interface FormData {
    email:string;
    inquiry:string;
}

const Contact:React.FC =()=>{
    const [formData,setFormData] = useState<FormData>({email:'',inquiry:''});

    const handleChange = (e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        store.dispatch(postInquiry(formData));
        console.log(formData);
    }

    return(
        <section className={styles.container}>
            <h2 className={styles.header}>Contact</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <label className={styles.label}>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className={styles.input} />
                <label className={styles.label}>Message</label>
                <textarea name="message" value={formData.inquiry} onChange={handleChange} className={styles.textarea} />
                <button type="submit" className={styles.button}>Submit</button>
            </form>
        </section>
    );
};

export default Contact;