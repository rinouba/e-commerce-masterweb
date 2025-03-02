import React, { useState, useEffect } from "react";

const CountdownTimer = ({days,hours,minutes,seconds}) => {
  const [timeLeft, setTimeLeft] = useState({
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        const { days, hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          return { ...prevTime, seconds: seconds - 1 };
        } else if (minutes > 0) {
          return { ...prevTime, minutes: minutes - 1, seconds: 59 };
        } else if (hours > 0) {
          return { ...prevTime, hours: hours - 1, minutes: 59, seconds: 59 };
        } else if (days > 0) {
          return { ...prevTime, days: days - 1, hours: 23, minutes: 59, seconds: 59 };
        } else {
          clearInterval(interval);
          return prevTime;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col sm:flex-row sm:space-y-0 space-y-5 md:space-x-5 space-x-1 py-10 rounded-lg shadow-md">

      {/* Hours */}
      <div className="text-center">
        <div className="w-16 h-16 flex flex-col items-center justify-center rounded-full bg-white text-black">
          <span className="text-xl font-bold">{timeLeft.hours}</span>
          <span className="text-xs">Hours</span>
        </div>
      </div>

            {/* Days */}
      <div className="text-center">
        <div className="w-16 h-16 flex flex-col items-center justify-center rounded-full bg-white text-black">
          <span className="text-xl font-bold">{timeLeft.days}</span>
          <span className="text-xs">Days</span>
        </div>
      </div>

      {/* Minutes */}
      <div className="text-center">
        <div className="w-16 h-16 flex flex-col items-center justify-center rounded-full bg-white text-black">
          <span className="text-xl font-bold">{timeLeft.minutes}</span>
          <span className="text-xs">Minutes</span>
        </div>
      </div>

      {/* Seconds */}
      <div className="text-center">
        <div className="w-16 h-16 flex flex-col items-center justify-center rounded-full bg-white text-black">
          <span className="text-xl font-bold">{timeLeft.seconds}</span>
          <span className="text-xs">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;