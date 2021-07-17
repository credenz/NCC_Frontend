import './css/team.css';
import {Button} from 'react-bootstrap'
import { useHistory } from "react-router-dom";

const OurTeam = () => {
  let history = useHistory();
  const goBack = () => {
      history.goBack()
  }

    return(



      <div className="container">
      <Button onClick={goBack} className="close-button" variant="light">
      X
      </Button>
        <div className="row mar">
        
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team">
              <div className="picture">
                <img
                  className="img-fluid"
                  src="./img/ab1.png.jpeg"
                />
              </div>
              <div className="team-content">
                <h3 className="name">Aneesh Berde</h3>
                <h5 className="pos">Web Developer</h5>
              </div>
              <ul className="social">
                <li>
                  <a
                    href="https://github.com/Frankenstein25"
                    className="fa fa-github"
                    aria-hidden="true"
                  />
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/aneesh-berde/"
                    className="fa fa-linkedin"
                    aria-hidden="true"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team">
              <div className="picture">
                <img
                  className="img-fluid"
                  src="./img/atharva.jpeg"
                />
              </div>
              <div className="team-content">
                <h3 className="name">Atharva Naphade</h3>
                <h5 className="pos">Web Developer</h5>
              </div>
              <ul className="social">
              <li>
                  <a
                    href="https://github.com/atharvanaphade"
                    className="fa fa-github"
                    aria-hidden="true"
                  />
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/atharva-naphade-540236148/"
                    className="fa fa-linkedin"
                    aria-hidden="true"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team">
              <div className="picture">
                <img
                  className="img-fluid"
                  src="./img/anm.jpeg"
                />
              </div>
              <div className="team-content">
                <h3 className="name">Anupam Patil</h3>
                <h5 className="pos">Web Developer</h5>
              </div>
              <ul className="social">
              <li>
                  <a
                    href="https://github.com/anupampatil44"
                    className="fa fa-github"
                    aria-hidden="true"
                  />
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/anupam-patil-114b841b0"
                    className="fa fa-linkedin"
                    aria-hidden="true"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team">
              <div className="picture">
                <img
                  className="img-fluid"
                  src="./img/vz.png.jpeg"
                />
              </div>
              <div className="team-content">
                <h3 className="name">Vaidehi Zade</h3>
                <h5 className="pos">Web Developer</h5>
              </div>
              <ul className="social">
              <li>
                  <a
                    href="http://github.com/Vaidehizade"
                    className="fa fa-github"
                    aria-hidden="true"
                  />
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/vaidehi-zade-173450191/"
                    className="fa fa-linkedin"
                    aria-hidden="true"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
    );
}

export default OurTeam;