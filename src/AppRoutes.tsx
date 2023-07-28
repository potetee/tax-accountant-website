import React, {useEffect} from "react";
import store from "./store/store";
import {fetchData} from "./features/data/api";
import {setIsMobile} from "./features/user/userSlice";
import {RootState} from "./store/RootState";
import {useSelector} from "react-redux";

const AppRoutes = () => {
    useEffect(()=>{
        const isMobile = window.innerWidth < 768;
        store.dispatch(setIsMobile(isMobile));
    },[])
    const user = ((state:RootState) => state.user);
    const userState = useSelector(user);
    console.log(userState.isMobile);


  return (
      <>
          {userState.isMobile ? <div>mobile</div>:<div>pc</div>}
      </>
  );
};

export default AppRoutes;


