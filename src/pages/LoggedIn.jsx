import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MyContext from "../utils/MyContext";
const LoggedIn = () => {
    const { cookies, setCookies } = useContext(MyContext);
    const navigate = useNavigate();
    useEffect(() => {
        console.log(cookies.name);
        if (!cookies.name) {
            navigate('/');
        }
    }, [cookies.name])
    return (
        <>
            <div>loggedin</div>
        </>
    )

}


export default LoggedIn