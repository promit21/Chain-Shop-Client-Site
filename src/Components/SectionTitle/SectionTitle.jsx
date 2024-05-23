/* eslint-disable react/prop-types */

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="w-4/12 mx-auto my-5">
      <h3 className="text-lg text-center text-yellow-500">
        --- {subHeading} ---
      </h3>
      <h3 className="text-4xl text-center border-y-4 p-2">{heading}</h3>
    </div>
  );
};

export default SectionTitle;
