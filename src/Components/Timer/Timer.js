import "./Timer.css";
import CountdownTimer from "react-component-countdown-timer";


const Timer = () => {
  return(
    <>
    <div className="times">
    <CountdownTimer count={7200} size={30} responsive hideDay className="time"/>
    </div>
    </>
  )
}

export default Timer;