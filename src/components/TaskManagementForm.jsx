import React from "react";
import "./TaskManagementForm.css";
import ButtonTag from "./ButtonTag";


const TaskManagementForm = () => {
  return (
    <header className="app_header">
      <form>
        <input
          type="text"
          className="task_input"
          placeholder="Enter your task"
        />
        <div className="task_form_bottom_line">
                {/* <button className='tag'>Java</button>
                <button className='tag'>Python</button>
                <button className='tag'>React</button>
                <button className='tag'>MongoDB</button>    */}
                
          <ButtonTag button_name="Java" />
          <ButtonTag button_name="Mongo DB" />
          <ButtonTag button_name="React" />
          <ButtonTag button_name="Node Js" />

          <select className="task_status">
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
