// import "./Timer.css";
// import CountdownTimer from "react-component-countdown-timer";


// const Timer = () => {
//   return(
//     <>
//     <div className="times">
//     <CountdownTimer count={7200} size={30} responsive hideDay className="time"/>
//     </div>
//     </>
//   )
// }

// export default Timer;

import { useState, useEffect, useRef } from "react";
import { Redirect } from 'react-router-dom'
import './Timer.css'

  const Timer = ({ finalTime }) => {
    const [sec, setSec] = useState('');
    const [min, setMin] = useState('');
    const [hrs, setHrs] = useState('');

    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    

    let interval = useRef;
    const startTimer = () => {
      interval = setInterval(() => {
      const now = new Date().getTime();
      const gap = finalTime - now; 
      var hour = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minute = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
      var second = Math.floor((gap % (1000 * 60)) / 1000);
      setHours(hour);
      setMinutes(minute);
      setSeconds(second);

        if (gap < 0) {
          clearInterval(interval.current);
        } else {
          minute>=10 ? setMin(minute) : setMin(`0`+minute)
          second >= 10 ? setSec(second) : setSec(`0` + second)
          // hours >= 10 ? setSec(hours) : setSec(`0` + hours)
          setHrs(hours);
        }
      }, 1000);
    };

    useEffect(() => {

      startTimer();
      return () => {
        clearInterval(interval.current);
      };
    }, [startTimer]);


    // console.log("hours:",hours," minutes:",minutes,"seconds:",seconds);

  if(hours<0 && minutes<0 && seconds<0) return (<Redirect push to="/result"/>)
      


    return (
      <div className="time">
      {hrs} : {min} : {sec}
  </div>
    );
  };

  export default Timer;