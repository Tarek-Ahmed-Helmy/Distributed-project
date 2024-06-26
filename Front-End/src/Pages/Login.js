import Envelop from '../Components/images/envelope.png';
import Lock from '../Components/images/lock.png';
import { Link, useNavigate } from 'react-router-dom';
import '../Components/CSS/Login.css'
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { setCredentials } from '../Components/rtk/slices/authSlice';
import { ShowErrorMessage } from './AddProduct';

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [data, setData] = useState({
        username: "",
        password: "",
    })
    const [reserror, setResError] = useState("")
    function HandleChange(e) {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const AddData = () => {
        fetch(`http://localhost:4500/clients/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "username": data.username,
                "password": data.password,
            }),
        }).then(res => res.json()).then((res) => {
            if (res.status === "success") {
                setResError("")
                dispatch(setCredentials({user:data.username, token: res.data.token , usertype:"client"}))
                navigate("/")
            } else if (res.status === "error") {
                setResError(res.message)
            } else if (res.status === "fail") {
                setResError("oops, something wrong went on !")
            }
        }).catch(error =>setResError("Unfortunately there was a server error"))
    }
    function HandleClick(e) {
        e.preventDefault();
        AddData();
    }
    return (
            <div className="Login-container shadow-md">
                <div className="header-holder">
                    <p className='text-[#2a5ba4]'>LOGIN</p>
                </div>
                <form className="Login-Form" onSubmit={HandleClick}>
                    <label>Username</label>
                    <div className="input">
                        <input
                            name="username"
                            type="text"
                            placeholder="john123"
                            required
                            onChange={HandleChange}
                        />
                        <img
                            src={Envelop}
                            alt="Envelope"
                            className="icon"
                        />
                    </div>
                    <label>Password</label>
                    <div className='input'>
                        <input
                            name="password"
                            type="password"
                            required
                            placeholder="Enter your password"
                            onChange={HandleChange}
                        />
                        <img
                            src={Lock}
                            alt="Lock"
                            className="icon"
                        />
                    </div>
                    <ShowErrorMessage condition={reserror !== ""} value={reserror} />
                    <div className='mt-4 login-buttons-holder'>
                        <button className='login-button client' type="submit">Login</button>
                        <div className='line-holder'>
                            <hr className="horizontal-line" />
                            <p className='or-text'>OR</p>
                            <hr className="horizontal-line" />
                        </div>
                        <Link to="/sign-up"><button className='signup-button-login-form mt-4 client' >Sign up</button></Link>
                    </div>
                </form>
            </div>
    )
} 