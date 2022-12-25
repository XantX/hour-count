import './App.css'
import { Clock } from './components/clock/Clock'
import { TaskCount } from './components/taskCount/TaskCount'

function App() {

  return (
    <div className="App">
      <header className='header'>
        <div>
          <h1 className='header-title'>Count hours</h1>
        </div>
        <div className='header-timer-container'>
            <p className='color-text'>Local hour</p>
            <Clock />
        </div>
      </header>
      <section className='main-section'>
        <div className='row'>
          <div className='left-side-bar'>
            <TaskCount/>
          </div>
          <div className='right-side-bar'>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
