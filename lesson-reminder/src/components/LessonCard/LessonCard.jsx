import React from "react";
import Lesson from "./lesson.module.css";
import { data } from "../../helper/data.js";

const LessonCard = () => {
  return (
    <div className={Lesson.lessonCard}>
      {data.map(({ id, name, hour, image }) => {
        return (
          <div id={id} className={Lesson.lesson}>
            <img src={image} alt={name} />
            <p>Lesson Name: {name}</p>
            <p>Lesson Hour: {hour}</p>
          </div>
        );
      })}
    </div>
  );
};

export default LessonCard;
