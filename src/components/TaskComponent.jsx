import React from 'react'
import todo from '../assets/todo.png'
import './TaskComponent.css'
import TaskCard from './TaskCard'

const TaskComponent = ({title, icon}) => {
  // const {title, icon} = props;
  return (
    <section className='task_column'>
        <h2 className='task_column_heading'>
            <img src={icon} className='task_column_icon' />
            {title}
        </h2>

        <TaskCard />
    </section>
  );
}
export default TaskComponent;