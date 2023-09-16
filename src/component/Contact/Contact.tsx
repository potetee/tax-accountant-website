import React, {useEffect, useState} from "react";
import styles from "./Contact.module.css";
import {postInquiry} from "../../features/inquiry/inquiryApi";
import store from "../../store/store";
import {useSelector} from "react-redux";
import {RootState} from "../../store/RootState";
import {resetStatus} from "../../features/inquiry/inquirySlice";

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
    }



    const postProcess = useSelector((state:RootState)=>state.inquiry);

    useEffect(() => {
        if(postProcess.status === 'failed'){
            setTimeout(()=>{
                store.dispatch(resetStatus());
            },5000);
        }

    }, [postProcess.status]);

    const renderInquiryInput = ()=>{
        return (
            <section className={styles.container}>
                <h2 className={styles.header}>Contact</h2>
                {
                    postProcess.status === 'idle'
                    &&
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <label className={styles.label}>Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} className={styles.input} />
                        <label className={styles.label}>Message</label>
                        <textarea name="inquiry" value={formData.inquiry} onChange={handleChange} className={styles.textarea} />
                        <button type="submit" className={styles.button}>Submit</button>
                    </form>
                }
                {
                    postProcess.status === 'succeeded'
                    &&
                    <div className={styles.sendSuccess}>お問合せありがとうございました</div>
                }
                {
                    postProcess.status === 'failed'
                    &&
                    <div>送信に失敗しました。時間をおいて、もう一度送信してください</div>
                }

            </section>
        )
    }


    return(
        <>
            {renderInquiryInput()}
            {/*{postProcess.status === 'idle' && renderInquiryInput()}*/}
            {/*{postProcess.status === 'succeeded' && <div className={styles.sendSuccess}>Thank you for your inquiry</div>}*/}
            {/*{postProcess.status === 'failed' && <div>Failed to send inquiry</div>}*/}
        </>

    );
};

export default Contact;