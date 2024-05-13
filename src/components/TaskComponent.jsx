import React from "react";
import todo from "../assets/todo.png";
import "./TaskComponent.css";
import TaskCard from "./TaskCard";

const TaskComponent = ({ title, icon, tasks, status, handleDelete }) => {
  // const {title, icon} = props;
  return (
    <section className="task_column">
      <h2 className="task_column_heading">
        <img src={icon} className="task_column_icon" />
        {title}
      </h2>

      {/* <TaskCard /> */}
      {tasks.map(
        (task, index) => task.status === status && <TaskCard key={index} title={task.task} tags={task.tags} handleDelete={handleDelete} index={index} />
      )}
    </section>
  );
};
export default TaskComponent;
