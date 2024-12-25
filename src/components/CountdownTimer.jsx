import React, { useState, useRef } from "react";

const CountdownTimer = ({ seconds, setSeconds}) => {

  const timerRef = useRef(null);

  const startCountdown = () => {
    if (timerRef.current === null) {
      timerRef.current = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds > 1) {
            return prevSeconds - 1;
          } else {
            clearInterval(timerRef.current);
            timerRef.current = null;
            return 0;
          }
        });
      }, 1000);
    }
  };

  if (timerRef.current === null && seconds === 120) {
    startCountdown();
  }

  const formatedTwoDigits=(number)=>{
      const zero=0;
      //console.log(zero);
      return(number<10? zero.toLocaleString("fa-IR")+number.toLocaleString("fa-IR") : number.toLocaleString("fa-IR"))
  }

  const formatedTimes = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const remainingSeconds = totalSeconds % 60;

    const formattedMinutes = formatedTwoDigits(minutes); 
    const formattedSeconds = formatedTwoDigits(remainingSeconds);

    return formattedMinutes + ":" + formattedSeconds; 
  };


  return (

 <span>{formatedTimes(seconds)}</span>

  );
};

export default CountdownTimer;
