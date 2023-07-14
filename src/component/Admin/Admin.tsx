import React from 'react';
import styles from './Admin.module.css';
import store from "../../store/store";
import login from "../../features/login/loginSlice";
import {setUsername,setPassword} from "../../features/login/loginSlice";
import {useDispatch} from "react-redux";




function Admin() {

    const [login, setLogin] = React.useState(true);

    const dispatch = useDispatch();
    const loginCheck = () => {
        setLogin(true);
        tryLogin();
    }

    const tryLogin = () => {
        dispatch(setUsername("user"));
        dispatch(setPassword("password"));
    }

    const dummyData = [
        {
            id: 1,
            date: "2021-01-01 17:15:19",
            mailAddress: "test@mail.com",
            message: "初めまして、こんにちは。私の名前は名前です。"
        },
        {
            id: 2,
            date: "2021-01-02 17:15:19",
            mailAddress: "tess@mail.com",
            message: "質問します。"
        },
        {
            id: 3,
            date: "2021-01-03 17:15:19",
            mailAddress: "ee@mail.com",
            message: "お世話になっております。"
        }
    ]

    const renderTableData = () => {
        return dummyData.map((data, index) => {
            const { id, date, mailAddress, message } = data
            return (
                <tr key={id}  className={styles.tableRow}>
                    <td className={styles.tableData}>{date}</td>
                    <td className={styles.tableData}>{mailAddress}</td>
                    <td className={styles.tableData}>{message}</td>
                </tr>
            )
        })
    }

    const loginBox = () => {
        return (
            <div className={styles.loginBox}>
                <div className={styles.loginTitle}>Login</div>
                <div className={styles.loginContent}>
                    <div className={styles.loginContentTitle}>Mail Address</div>
                    <input className={styles.loginContentInput} type="text" />
                    <div className={styles.loginContentTitle}>Password</div>
                    <input className={styles.loginContentInput} type="password" />
                    <button onClick={loginCheck} className={styles.loginContentButton}>Login</button>
                </div>
            </div>
        )
    }


    return (
        <>
            {login && loginBox()}
            <table className={`${styles.table} ${login ? styles.tableBlur:''}`}>
                <thead className={styles.tableHead}>
                    <tr className={styles.tableRowHead}>
                        <th className={styles.tableHeader}>Date</th>
                        <th className={styles.tableHeader}>Mail</th>
                        <th className={styles.tableHeader}>Inquiry</th>
                    </tr>
                </thead>
                <tbody className={styles.tableBody}>
                    {renderTableData()}
                </tbody>
            </table>
        </>
    );
}

export default Admin;
