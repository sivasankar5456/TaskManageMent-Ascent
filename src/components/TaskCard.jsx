import React from "react";
import "./TaskCard.css";
import ButtonTag from "./ButtonTag";
import delete_img from "../assets/delete.png"

const TaskCard = () => {
  return (
    <article className="task_card">
      <p className="task_text">This is sample Task</p>

      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          <ButtonTag button_name="Python" />
          <ButtonTag button_name="Java" />
        </div>
        <div className="task_delete">
          <img src={delete_img} className="delete_icon" alt="" />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
