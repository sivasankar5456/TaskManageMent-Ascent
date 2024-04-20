import React from 'react'
import todo from '../assets/todo.png'
import './TaskComponent.css'

const TaskComponent = (props) => {
  return (
    <section className='task_column'>
        <h2 className='task_column_heading'>
            <img src={props.icon} className='task_column_icon' />
            {props.title}
        </h2>
    </section>
  )
}
export default TaskComponent