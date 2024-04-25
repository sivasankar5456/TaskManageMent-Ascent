import React, { useState } from "react";
import "./TaskManagementForm.css";
import ButtonTag from "./ButtonTag";


const TaskManagementForm = () => {
  
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: []
  })

  const selectTag = (button_name) => {
    // console.log(button_name);
    if(taskData.tags.some(item => item === button_name)) {
      const filterTags = taskData.tags.filter(item => item !== button_name);
      setTaskData(prev => {
        return {...prev, tags: filterTags};
      })
    } else {
      setTaskData(prev => {
        return {...prev, tags: [...prev.tags, button_name]}
      })
    }
  };
  const checkTag = (name) => {
    return taskData.tags.some(item => item === name);
  };

  const handleChange = (e) => {
    // const name = e.target.name;
    // const value = e.target.value;
   
    const {name, value} = e.target
    setTaskData (prev => {
      return {...prev, [name]: value}
    })
  }
  console.log(taskData.tags);
  const handleTaskChange = e => {
    setTask(e.target.value)
  };
  const handleStatusChange = e => {
    setStatus(e.target.value)
  };

  return (
    <header className="app_header">
      <form>
        <input
          type="text"
          className="task_input"
          placeholder="Enter your task"
          onChange={handleChange}
        />
        <div className="task_form_bottom_line">
                
          <ButtonTag button_name="Java" selectTag={selectTag} selected={checkTag("Java")} />
          <ButtonTag button_name="MongoDB" selectTag={selectTag} selected={checkTag("MongoDB")} />
          <ButtonTag button_name="React" selectTag={selectTag} selected={checkTag("React")} />
          <ButtonTag button_name="NodeJs" selectTag={selectTag} selected={checkTag("NodeJs")} />

          <select className="task_status" onChange={handleChange} >
            <option value="todo">To do</option>
            <option value="inprogress">In progress</option>
            <option value="done">Done</option>
          </select>

          <button type="submit" className="task_submit">
            + Add Task
          </button>
        </div>
      </form>
    </header>
  );
};
export default TaskManagementForm;
