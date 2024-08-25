import ImageCss from "./Image.module.css";

const Image = ({ data }) => {
  return (
    <div className={ImageCss.imagePage}>
      <h1>Image Gallery</h1>
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
    </div>
  );
};

export default Image;
