import { Timer } from '../timer/Timer'
import { TextBox } from '../textbox/TextBox'
import { Button }  from '../button/Button'
import { useState } from 'react'
import './TaskCount.css'
export const TaskCount = () => {
  const [start, setStart] = useState(false)
  const [taskDescription, setTaskDescription] = useState("")
  const [time, setTime] = useState("")
  const handleStartTimer = () => {
    setStart(!start)
  }
  const handleChangeDescription = (e) => {
    setTaskDescription(e.target.value)
  }
  const handleStop = (time) => {
    setTime(time)
  }
  return (
    <div className='task-box-container'>
      <Timer handleStop={handleStop} startState={start}/>
      <div>
        <TextBox disable={start} value={taskDescription} handleChange={handleChangeDescription} placeholder={"Describe your task"}/>
      </div>
      <div className='task-box-button-container'>
        <Button text={ !start ? "Start Task" : "Stop Task" } value={start} onClick={ handleStartTimer } />
      </div>
    </div>
  )
}
