import { useEffect, useState } from "react";

const useTimer = (limit: number) => {
  const [timer, setTimer] = useState(limit);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (timer !== 0) {
      timeout = setTimeout(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [timer]);
  console.log(timer);

  return { timer, timerCompleted: timer === 0 };
};

export default useTimer;
