import {RootState} from "../../store/RootState";
import {useSelector} from "react-redux";

const Home:React.FC = () =>{
    const data = ((state:RootState) => state.data);
    const dataState = useSelector(data);

    return(
        <section>
            <h2>Home {dataState.data.name}</h2>
        </section>
    );
};

export default Home;