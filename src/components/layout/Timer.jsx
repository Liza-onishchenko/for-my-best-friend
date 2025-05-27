import React, { useState, useEffect, useRef } from "react";
import css from "../../css/Timer.module.css";

const Timer = () => {
  const startDate = new Date("2010-09-01T00:00:00Z");
  const [timeElapsed, setTimeElapsed] = useState(
    Date.now() - startDate.getTime()
  );
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimeElapsed(Date.now() - startDate.getTime());
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);

  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);

    const years = Math.floor(totalSeconds / (365.25 * 24 * 3600));
    const remainingSecondsAfterYears = totalSeconds % (365.25 * 24 * 3600);
    const days = Math.floor(remainingSecondsAfterYears / (24 * 3600));
    const hours = Math.floor((remainingSecondsAfterYears % (24 * 3600)) / 3600);
    const minutes = Math.floor((remainingSecondsAfterYears % 3600) / 60); // Використовуємо remainingSecondsAfterYears
    const seconds = remainingSecondsAfterYears % 60; // Використовуємо remainingSecondsAfterYears

    return {
      years,
      days,
      hours: hours.toString().padStart(2, "0"),
      minutes: minutes.toString().padStart(2, "0"),
      seconds: seconds.toString().padStart(2, "0"),
    };
  };

  const timeParts = formatTime(timeElapsed);

  return (
    <div>
      <div className={css.timerTitle}>Таймер часу скільки ми знайомі</div>
      <div className={css.timerContainer}>
        {timeParts.years > 0 && (
          <div className={css.timeUnit}>
            <div className={css.timeValue}>{timeParts.years}</div>
            <div className={css.timeLabel}>років</div>
          </div>
        )}
        {timeParts.days > 0 && (
          <div className={css.timeUnit}>
            <div className={css.timeValue}>{timeParts.days}</div>
            <div className={css.timeLabel}>днів</div>
          </div>
        )}
        <div className={css.timeUnit}>
          <div className={css.timeValue}>{timeParts.hours}</div>
          <div className={css.timeLabel}>годин</div>
        </div>
        <div className={css.timeUnit}>
          <div className={css.timeValue}>{timeParts.minutes}</div>
          <div className={css.timeLabel}>хвилин</div>
        </div>
        <div className={css.timeUnit}>
          <div className={css.timeValue}>{timeParts.seconds}</div>
          <div className={css.timeLabel}>секунд</div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
