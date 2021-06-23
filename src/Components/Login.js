import React , {Component} from 'react';
import './css/login.css';

class login extends Component{
    constructor(props){
        super(props)

        this.state = {
            username : '',
            password : ''
        
        }
    }
    

    handleUsernameChange = (event) => {
        this.setState({
            username : event.target.value
        
        })
        
    }

    handlePasswordChange = (event) => {
        this.setState({
            password : event.target.value
        })
        
    }


    handleSubmit = (event) => {
        event.preventDefault();
        }

        

    render(){
        return ( 
            
    <div className="container">
        <div className='row'>
            <div className="col-12 col-sm-2">
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
                    <div className="head-form">
                        <img src="./img/logo.png" className="ctdlogo mb-4 bounce"></img>
                    </div>
                    <div className="body-form">
                            <form onSubmit={this.handleSubmit}>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i class="fa fa-user"></i></span>
                                    </div>
                                    <input type="text" className="form-control txt" placeholder="Username" value={this.state.username} onChange={this.handleUsernameChange} />
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i class="fa fa-lock"></i></span>
                                    </div>
                                    <input type="password" className="form-control txt" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange}/>
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

}

   

 
export default login;