import { useState, useEffect } from 'react'
import './Clock.css'

export const Clock = () => {
  const time = {
    hour: 0,
    min: 0,
    sec: 0 
  }
  const updateTimerWithCurrentTime = (time) => {
    const date = new Date()
    time.hour = date.getHours()
    time.min = date.getMinutes()
    time.sec = date.getSeconds()
    return time
  }
  const [timer, setTimer] = useState(time);
  const updateTime = () => {
    setTimer(prev => {
      return {
        hour: prev.hour > 12? prev.hour = prev.hour - 12 : prev.min == 59 ? prev.hour + 1 : prev.hour,
        min: prev.min == 59? 0 : prev.sec == 59 ? prev.min + 1 : prev.min,
        sec: prev.sec < 59 ? prev.sec + 1 : 0
      }
    })
  }
  useEffect(() => {
    updateTimerWithCurrentTime(time)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      updateTime()
    }, 1000);
    return () => {
      clearInterval(interval);
    }
  }, [])

  return (
    <div className="clock-container">
      <div className="number">{timer.hour < 10? '0' + timer.hour: timer.hour}</div> :
      <div className="number">{timer.min < 10? '0' + timer.min: timer.min}</div> :
      <div className="number">{timer.sec < 10? '0' + timer.sec: timer.sec}</div>
    </div>
  )
}
