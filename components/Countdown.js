import styled from 'styled-components'
import { useEffect, useState } from 'react'
import React from 'react';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown';

const CountdownDiv = styled.div`
  color: #c7a298;
  font-size: 1.5em;
  text-align: center;
`

const CountdownNumber = styled.span`
  color: #cba135;
  font-size: 1.2em;
  font-weight: bold;
  margin: 0 0.2em;
`

export default function CountdownSection({ children }) {
  const wedDate = new Date(process.env.WEDDING_DATE);
  const [counter, setCounter] = useState(60);

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return (<span>Days left. We made it!</span>);
    } else {
      let months = Math.floor(days/30)
      let daysLeft = days - (months  * 30)
      return (<span> <CountdownNumber>{months}</CountdownNumber> Months <CountdownNumber>{daysLeft}</CountdownNumber> days <CountdownNumber>{hours}</CountdownNumber>:<CountdownNumber>{minutes}</CountdownNumber>:<CountdownNumber>{seconds}</CountdownNumber> To Go!</span>);
    }
  };

  const renderer2 = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return (<span>Days left. We made it!</span>);
    } else {
      return (<span> <CountdownNumber>{days}</CountdownNumber> days <CountdownNumber>{hours}</CountdownNumber>Hours <CountdownNumber>{minutes}</CountdownNumber> mins and <CountdownNumber>{seconds}</CountdownNumber> seconds To Go!</span>);
    }
  };

  return (
    <>
      <CountdownDiv>
        <Countdown date={wedDate} renderer={renderer} />
        <br />
        OR
        <br />
        <Countdown date={wedDate} renderer={renderer2} />
      </CountdownDiv>
    </>
  )
}

