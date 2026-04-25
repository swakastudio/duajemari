import { useEffect, useState } from "react";

export function useLiveCountdown() {
  const [time, setTime] = useState({
    months: 0,
    hours: 7,
    minutes: 14,
    seconds: 21,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { months, hours, minutes, seconds } = prev;

        seconds++;

        if (seconds >= 60) {
          seconds = 0;
          minutes++;
        }

        if (minutes >= 60) {
          minutes = 0;
          hours++;
        }

        if (hours >= 24) {
          hours = 0;
          months++;
        }

        return { months, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return time;
}
