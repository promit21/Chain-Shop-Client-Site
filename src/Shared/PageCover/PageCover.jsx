/* eslint-disable react/prop-types */
const PageCover = ({ coverImg, title, details }) => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${coverImg})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{title}</h1>
          <p className="mb-5">
            {details}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageCover;
