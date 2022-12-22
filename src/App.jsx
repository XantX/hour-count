import { useState } from 'react'
import './App.css'
import { Button } from './components/button/Button'
import { Clock } from './components/clock/Clock'
import { TextBox } from './components/textbox/TextBox'

function App() {
  const [start, setStart] = useState(false);
  console.log("App start", start)
  return (
    <div className="App">
      <Clock type={'clock'}/>
      <Clock type={'timer'} startState={start} />
      <TextBox/>
      <Button text={"Iniciar tarea"} onClick={()=>{setStart(!start)}} />
    </div>
  )
}

export default App
