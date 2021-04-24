import './App.css';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Footer from './Components/Footer';
import Instructions from './Components/Instructions';
import Questions from './Components/Question';
import Submissions from './Components/Submission';
import Leaderboard from './Components/Leaderboard';
import Coding from './Components/Coding';
import Code from './Components/CodeEditor';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
        <div className="container-fluid">
         
            <div className="Header">
              <Navbar />
            </div>

            <div className="main-content">
              <Switch>
                  <Route exact path="/"><Login /></Route>
                  <Route path="/Instructions"><Instructions /></Route>
                  <Route path="/Questions"><Questions /></Route>
                  <Route path='/Submissions'><Submissions /></Route>
                  <Route path='/Coding'><Coding /></Route>
                  <Route path='/Code'><Code /></Route>
                  <Route path='/Leaderboard'><Leaderboard /></Route>
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
