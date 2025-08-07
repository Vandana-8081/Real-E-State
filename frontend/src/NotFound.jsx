
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import react from react;
const NotFound=()=>{
    const navigate=useNavigate();
    useEffect(()=>{
    //   navigate('/login')
    },[])
    return(<>
    <h1>404 Not Found</h1>

    <div className="row">
        <div className="col-sm-3"></div>
        <div className="col-sm-7">
            <img src="img/a.png" />
        </div>
        <div className="col-sm-2"></div>
    </div>
    </>)
}

export default NotFound;