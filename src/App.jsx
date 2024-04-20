import React from 'react'
import './App.css'
import TaskManagementForm from './components/TaskManagementForm'
import todo from "./assets/todo.png"
import inprogress from "./assets/inprogress.png"
import done from "./assets/done.png"
import TaskComponent from './components/TaskComponent'

function App() {
  

  return (
    <div className='app'>
      <TaskManagementForm />

      <main className='app_main'>
                   {/* <option value='todo'>To do</option>
                    <option value='inprogress'>In progress</option>
                    <option value='done'>Done</option> */}
        <TaskComponent title="To do" icon={todo} />
        <TaskComponent title="In progress" icon={inprogress} />
        <TaskComponent title="Done" icon={done} />
      </main>

    </div>
  )
}

export default App
