import { useEffect, useState } from 'react'
import React from 'react';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown';


export default function CountdownSection({ children }) {
  const wedDate = new Date(process.env.WEDDING_DATE);
  const [counter, setCounter] = useState(60);

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return (<div>0 Days left. We made it!</div>);
    } else {
      let months = Math.floor(days / 30)
      let daysLeft = days - (months * 30)
      if (months == 0) {
        return (<> <span className="countdown-number">{days}</span> days <span className="countdown-number">{hours}</span>Hours <span className="countdown-number">{minutes}</span> mins and <span className="countdown-number">{seconds}</span> seconds To Go!</>);
      } else {
        return (<> <span className="countdown-number">{months}</span> Months <span className="countdown-number">{daysLeft}</span> days <span className="countdown-number">{hours}</span>:<span className="countdown-number">{minutes}</span>:<span className="countdown-number">{seconds}</span> To Go!</>);
      }
    }
  };

  return (
    <>
      <div className="countdown-div">
        <Countdown date={wedDate} renderer={renderer} />
      </div>
    </>
  )
}

