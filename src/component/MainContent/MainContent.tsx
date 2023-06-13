import React, {useEffect} from "react";
import store from "../../store/store";
import {fetchData} from "../../features/data/api";
import {setIsMobile} from "../../features/user/userSlice";
import {RootState} from "../../store/RootState";
import {useSelector} from "react-redux";
import DesktopComponent from "../DesktopComponent/DesktopComponent";

const MainContent: React.FC = () => {
    useEffect(()=>{
        store.dispatch(fetchData());
    },[])
    useEffect(()=>{
        const isMobile = window.innerWidth < 768;
        store.dispatch(setIsMobile(isMobile));
    },[])
    const user = ((state:RootState) => state.user);
    const userState = useSelector(user);

    return (
        <>
            {userState.isMobile ? <DesktopComponent/>:<DesktopComponent/>}
        </>
    )
}

export default MainContent;