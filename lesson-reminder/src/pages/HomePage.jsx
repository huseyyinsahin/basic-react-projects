import Header from "../components/Header/Header";
import LessonCard from "../components/LessonCard/LessonCard";
import { data } from "../helper/data.js";

function HomePage() {
  return (
    <div>
      <Header />
      <LessonCard data={data} />
    </div>
  );
}

export default HomePage;
