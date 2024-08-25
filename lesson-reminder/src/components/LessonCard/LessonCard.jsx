import Lesson from "./lesson.module.css";

const LessonCard = ({ data }) => {
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
