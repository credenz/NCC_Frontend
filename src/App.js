import './App.css';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Footer from './Components/Footer';
import Instructions from './Components/Instructions';
import Questions from './Components/Question';
import Submissions from './Components/Submission';
import Leaderboard from './Components/Leaderboard/Leaderboard';
import Coding from './Components/Coding';
import Result from './Components/Result/Result';
import Testcase from './Components/Testcase/Testcase';
import Error from './Components/Error/error';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PrivateRoute from './Components/utils/PrivateRoute';
import PublicRoute from './Components/utils/PublicRoute';

function App() {
  return (
    <Router>
        <div className="container-fluid">
         
            <div className="Header">
              <Navbar />
            </div>

            <div className="main-content">
              <Switch>
                  <PublicRoute exact path="/" component={ Login } />
                  <PrivateRoute exact path="/instructions" component={ Instructions } />
                  <PrivateRoute exact path="/questions" component={ Questions } />
                  <PrivateRoute exact path='/submissions' component={ Submissions } />
                  <PrivateRoute exact path='/coding/:id' component={ Coding } />
                  <PublicRoute exact path='/result' component={ Result } />
                  <PrivateRoute exact path='/testcase' component={ Testcase } />
                  <PrivateRoute exact path='/leaderboard' component={ Leaderboard } />
                  <Route component={ Error } />
                  
              </Switch>
            </div>

            <div className="foot">
              <Footer />
            </div>

        </div>
          
    </Router>
  );
}

export default App;
