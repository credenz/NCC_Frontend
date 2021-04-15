import './App.css';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Footer from './Components/Footer';
import Background from './Components/Background';

function App() {
  return (
    <div className="container-fluid">
      <Background />
      <div className="Header">
        <Navbar />
      </div>
      <div className="main-content">
        <Login />
      </div>
      <div className="foot">
        <Footer />
      </div>
    </div>
  );
}

export default App;
