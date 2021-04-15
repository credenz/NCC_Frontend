import { scryRenderedComponentsWithType } from "react-dom/test-utils";

const login = () => {

    return ( 
    
        <div className="form-box">
            <div className="head-form">
                <img src="./img/Logo.png" className="ctdlogo mb-4 bounce"></img>
            </div>
            <div className="body-form">
                    <form>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i class="fa fa-user"></i></span>
                            </div>
                            <input type="text" className="form-control txt" placeholder="Username" />
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i class="fa fa-lock"></i></span>
                            </div>
                            <input type="password" className="form-control txt" placeholder="Password" />
                        </div>
                            <button type="submit" className="btn btn-info btn-block bts">Login</button>
                    </form>
            </div>
    
        
    </div>
     );
}
 
export default login;