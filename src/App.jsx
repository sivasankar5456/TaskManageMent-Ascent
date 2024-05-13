import React, { useState } from 'react'
import './App.css'
import TaskManagementForm from './components/TaskManagementForm'
import todo from "./assets/todo.png"
import inprogress from "./assets/inprogress.png"
import done from "./assets/done.png"
import TaskComponent from './components/TaskComponent'

function App() {
  
  const [tasks, setTasks] = useState([]);

  console.log("Task = ", tasks)
  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  }

  return (
    <div className='app'>
      <TaskManagementForm setTasks={setTasks} />

      <main className='app_main'>
        <TaskComponent title="To do" icon={todo} tasks={tasks} status="todo" handleDelete={handleDelete} />
        <TaskComponent title="In progress" icon={inprogress} tasks={tasks} status="inprogress" handleDelete={handleDelete} />
        <TaskComponent title="Done" icon={done} tasks={tasks} status="done" handleDelete={handleDelete} />
      </main>

    </div>
  )
}

export default App
