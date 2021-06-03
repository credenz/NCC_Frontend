import React , { Component, useState } from 'react';
import axiosInstance from '../axios';
import { useHistory } from 'react-router-dom';
import { login } from './utils/index';



const Login = () => {

    const history = useHistory();

    const [login, setLogin] = useState({
        username: '',
        password: '',
    });
    

    const handleUsernameChange = (event) => {
        setLogin({ 
            ...login,
            username: event.target.value 
        });
    }

    const handlePasswordChange = (event) => {
        setLogin({
            ...login,
            password: event.target.value
        })
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(login);
        axiosInstance
                .post('login/', {
                    username: login.username,
                    password: login.password,
                })
                .then((res) => {
                    console.log(res.data);
                    localStorage.setItem('access_token', res.data.token);
                    axiosInstance.defaults.headers['Authorization'] = 
                        'Token ' + localStorage.getItem('access_token');
                    history.push('/instructions');
                    console.log(res.status);
                    console.log(localStorage.getItem('access_token'))
                })
    }

        
        return ( 
    <div class="container">
        <div class='row'>
            <div class="col-md-4"></div>
            <div class='col-md-4'>
                <div className="form-box">
                    
                    <div className="head-form">
                        <img src="./img/logo.png" className="ctdlogo mb-4 bounce"></img>
                    </div>
                    <div className="body-form">
                            <form onSubmit={handleSubmit}>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i class="fa fa-user"></i></span>
                                    </div>
                                    <input type="text" className="form-control txt" placeholder="Username" value={login.username} onChange={handleUsernameChange} />
                                </div>
                                <div className="input-group mb-3">
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
            <div class="col-md-4">
            
            </div>
        </div>
    </div>
         );

}

   

 
export default Login;