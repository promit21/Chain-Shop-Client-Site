import { Parallax } from "react-parallax";

/* eslint-disable react/prop-types */
const PageCover = ({ coverImg, title, details }) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={coverImg}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div className="hero h-[500px]">
        <div className=""></div>
        <div className="hero-content bg-black bg-opacity-60 w-3/4 text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
            <p className="mb-5">{details}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default PageCover;
