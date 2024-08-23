import data from "../data.js";
import ImageCss from "./Image.module.css";

const Image = () => {
  return (
    <div className={ImageCss.app}>
      {data.map(({ photographer, src: { large } }) => {
        return (
          <div className={ImageCss.cont}>
            <img src={large} alt={photographer} />
            <p>{photographer}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Image;
