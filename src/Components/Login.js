import React , {Component} from 'react';

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
    
            <div className="form-box">
                <div className="background">
                <ul className="bg-bubbles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
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
         );

    }
}


   

 
export default login;