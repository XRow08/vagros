import { useState, useEffect } from "react";

export function useCountDown(timestamp: number) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    const timer = setInterval(() => {
      const newTime = timestamp - new Date().getTime();
      setTime(newTime);
      if (newTime <= 0) {
        clearInterval(timer);
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [timestamp]);

  return time;
}
