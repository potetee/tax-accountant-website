import React, {useEffect} from 'react';
import styles from './Admin.module.css';
import store from "../../store/store";
import {setUsername,setPassword} from "../../features/login/loginSlice";
import {useDispatch} from "react-redux";
import {fetchData} from "../../features/data/api";
import {useSelector} from "react-redux";
import {RootState} from "../../store/RootState";
import {dummyData} from "../../utils/dummyData";


function Admin() {
    const user = useSelector((state: RootState) => state.login.username);
    const password = useSelector((state: RootState) => state.login.password);
    const inquiryData = useSelector((state: RootState) => state.data);
    const [login, setLogin] = React.useState(true);
    const [loginSucess, setLoginSucess] = React.useState(true);
    const [shake, setShake] = React.useState(false);

    const dispatch = useDispatch();
    const loginCheck = () => {
        store.dispatch(fetchData({user: user, password: password}));
    }

    useEffect(() => {
        if(inquiryData.status === 200) {
            setLogin(false);
            setLoginSucess(true);
        }else if(inquiryData.status === 401){
            setLoginSucess(false)
            setTimeout(() => {setLoginSucess(true)},3000);
            setShake(true);
            setTimeout(() => {setShake(false)},500);
        }
    }, [inquiryData]);

    const renderTableData = () => {
        return inquiryData.data.map((data, index) => {
            const {  date, mail, inquiry } = data
            return (
                <tr key={index}  className={styles.tableRow}>
                    <td className={`${styles.tableData} ${styles.dateColumn}`}>{date}</td>
                    <td className={`${styles.tableData} ${styles.mailColumn}`}>{mail}</td>
                    <td className={`${styles.tableData} ${styles.inquiryColumn}`}>{inquiry}</td>
                </tr>
            )
        })
    }

    const loginBox = () => {
        return (
            <div className={` ${styles.loginBox}  ${shake ? styles.shake : ''} `}>
                <div className={styles.loginTitle}>Login</div>
                {!loginSucess && <div><span className={styles.failedColor}>Login Failed</span></div>}
                <div className={styles.loginContent}>
                    <div className={styles.loginContentTitle}>Mail Address</div>
                    <input
                        className={styles.loginContentInput}
                        type="text"
                        onChange={(e) => dispatch(setUsername(e.target.value))}
                    />
                    <div className={styles.loginContentTitle}>Password</div>
                    <input
                        className={styles.loginContentInput}
                        type="password"
                        onChange={(e) => dispatch(setPassword(e.target.value))}
                    />
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
