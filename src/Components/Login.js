import React , {Component, useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import './css/login.css';
import axiosInstance from '../axios';

const Login = () => {
    const history = useHistory();
    const [login, setLogin] = useState({
        username: '',
        password: '',
    });

    const handleUsernameChange = (event) => {
        setLogin({
            ...login,
            username : event.target.value
        
        })
        
    }

    const handlePasswordChange = (event) => {
        setLogin({
            ...login, 
            password : event.target.value
        })
        
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(login);
        axiosInstance.post('login/', {
            username: login.username,
            password: login.password
        })
        .then((res) => {
            console.log(res.data);
            localStorage.setItem('access_token', res.data.token);
            axiosInstance.defaults.headers['Authorization'] = 
                        'Token ' + localStorage.getItem('access_token');
            history.push('/instructions');
            console.log(res.status);
            if (res.status !== 200) {
                alert('Wrong Credentials')
            }

        })
        .catch((err) => {
            if (err.status !== 200) {
                alert('Wrong Credentials')
            }
        })
    }   

        


        return ( 
            
    <div className="container">
        <div className='row'>
            <div className="col-12 col-sm-2 combined d-flex">
            <img src="./img/logo.png" className="ctdlogo mb-4 bounce"></img>
            <p className="present">Presents</p>
            <svg viewBox="0 0 960 300" className="animate">
                <symbol id="s-text">
                    <text textAnchor="middle" x="50%" y="80%">NCC  </text>
                    <text textAnchor="middle" x="52%" y="80%">NCC </text>
                </symbol>
                <g className="g-ants">
                    <use xlinkHref="#s-text" className="text-copy" />
                    <use xlinkHref="#s-text" className="text-copy" />
                    <use xlinkHref="#s-text" className="text-copy" />
                    <use xlinkHref="#s-text" className="text-copy" />
                    <use xlinkHref="#s-text" className="text-copy" />
                </g>
            </svg>
            </div>
            <div className="col-md-4"></div>
            <div className='col-12 col-sm-2'>
                <div className="form-box">
                    <div className="head-form text-center">
                    <h4 data-text="Login">Login</h4> 
                    </div>
                    <div className="body-form">
                            <form onSubmit={handleSubmit}>
                                <div className="input-group mb-4">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i class="fa fa-user"></i></span>
                                    </div>
                                    <input type="text" className="form-control txt" placeholder="Username" value={login.username} onChange={handleUsernameChange} />
                                </div>
                                <div className="input-group mb-4">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i class="fa fa-lock"></i></span>
                                    </div>
                                    <input type="password" className="form-control txt" placeholder="Password" value={login.password} onChange={handlePasswordChange}/>
                                </div>
                                    <button type="submit" className="btn btn-info btn-block bts">Login</button>
                            </form>
                    </div>
                
                </div>
            </div>
            
        </div>
        </div>
    
        
   
         );

    }



   

 
export default Login;