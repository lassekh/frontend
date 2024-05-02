import React, {useState, useEffect} from "react";

export default () => {
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [time, setTime] = useState(0)
    const [timerActive, setTimerActive] = useState(false)
    const [isPaused, setPaused] = useState(true)

    function startTimer() {
      if(!timerActive) {
        setTime(minutes * 60 + seconds)
        formatTime(time)
        setTimerActive(true)
      } else {
        changePause()
      }
      
      setPaused(!isPaused)
    }
    
    function resetTimer() {
      clearInterval(interval)
      setTime(0)
      setMinutes(0)
      setSeconds(0)
      setTimerActive(false)
      setPaused(true)
    }

    function changePause() {
      setPaused(paused => !paused)
    }
    
    function formatTime(time) {
      let mins = null
      let secs = null
      if (!timerActive) {
        mins = 0
        secs = 0
      } else {
        mins = Math.floor(time / 60)
        secs = time % 60
      }
      return (
        `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`
      )
    }

    function setStartTimer(min) {
      setTime(min * 60)
      setTimerActive(true)
      setPaused(false)
    }
    
    useEffect(() => {
      let interval = null;

      if (timerActive && !isPaused && time > 0) {
          interval = setInterval(() => {
              setTime(t => t - 1);
          }, 1000);
      } else {
        clearInterval(interval);
    }

      return () => clearInterval(interval);
    }, [timerActive, isPaused, time]);

    return (
        <div>
          <h2>Set timer</h2>
          <div>
            <input
              type="number"
              placeholder="Minutes"
              value={minutes}
              onChange={(e) => setMinutes(parseInt(e.target.value))}
            />
            <input
              type="number"
              placeholder="Seconds"
              value={seconds}
              onChange={(e) => setSeconds(parseInt(e.target.value))}
            /><br />
            <button onClick={startTimer}>
              {isPaused ? "Start" : "Pause"}
            </button>
            <button onClick={resetTimer}>Reset</button><br />
            <button onClick={() => setStartTimer(5)}>5 min.</button>
            <button onClick={() => setStartTimer(10)}>10 min.</button>
            <button onClick={() => setStartTimer(15)}>15 min.</button>
          </div>
          <div>
            <h3>Time Remaining:</h3>
            <p class="time-display">{formatTime(time)}</p>
          </div>
        </div>
      );
}