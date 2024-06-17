import React, { useState ,useEffect } from "react";
import {useNavigate} from 'react-router-dom';


const Login = () => {

    const navigate = useNavigate();

    // const [login_details, setLogin_Details] = useState({
    //     name: "",
    //     password: ""
    // })

    const check_login = () =>{
        var login_cred = true;
        if (login_cred){
            navigate('/Chat');
        }else{
            window.alert('enter valid credentials')
        }
    }

    return (
        <>
            <div className="container">
                <h2>WYSA</h2>
                <form>
                    <input className='inp' name='username' required placeholder='Username'></input>
                    <input className='inp' type='password' name='password' required placeholder='Password'></input>
                    <button className='login' onClick={check_login()}>Login</button>
                </form>
            </div>
        </>
    )
};

export default Login;