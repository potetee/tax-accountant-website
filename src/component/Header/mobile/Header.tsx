import React from "react";
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import styles from './Header.module.css';
import {Link} from "react-router-dom";

const MobileComponent:React.FC<MobileComponentProps> = ({setSidebar})=>{

    return (
        <>
            <div className={styles.headerBack}>
                <Link className={styles.link} to='/'><HomeTwoToneIcon  fontSize={'inherit'}/></Link>
                <MenuSharpIcon  onClick={setSidebar}  fontSize={'inherit'}/>
            </div>
        </>
    );
}

interface MobileComponentProps{
    setSidebar:()=>void;
}

export default MobileComponent;