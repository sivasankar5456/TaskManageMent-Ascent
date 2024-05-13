import React from "react";
import "./TaskCard.css";
import ButtonTag from "./ButtonTag";
import delete_img from "../assets/delete.png";

const TaskCard = ({ title, tags, handleDelete, index }) => {
  return (
    <article className="task_card">
      <p className="task_text">{title}</p>

      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          {/* <ButtonTag button_name="Python" />
          <ButtonTag button_name="Java" /> */}
          {tags.map((tag, index) => (
            <ButtonTag key={index} button_name={tag}  selected />
          ))}
        </div>
        <div className="task_delete" onClick={() => handleDelete(index)} >
          <img src={delete_img} className="delete_icon" alt="" />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
