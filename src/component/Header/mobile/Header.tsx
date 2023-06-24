import React from "react";
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import styles from './Header.module.css';

const MobileComponent:React.FC<MobileComponentProps> = ({setSidebar})=>{

    return (
        <>
            <div className={styles.headerBack}>
                <HomeTwoToneIcon  fontSize={'inherit'}/>
                <MenuSharpIcon  onClick={setSidebar}  fontSize={'inherit'}/>
            </div>
        </>
    );
}

interface MobileComponentProps{
    setSidebar:()=>void;
}

export default MobileComponent;