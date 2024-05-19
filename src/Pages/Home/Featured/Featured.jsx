import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg"
import './Featured.css';
const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-7 my-12">
      <SectionTitle
        heading={"Featured Items"}
        subHeading={"Check it Out"}
      ></SectionTitle>

      <div className="flex justify-center items-center gap-6 px-28 py-16 bg-slate-400 bg-opacity-45">
        <div>
            <img src={featuredImg} alt="" />
        </div>
        <div className="space-y-3">
            <h3 className="text-2xl">20 Agu 2024</h3>
            <p className="uppercase text-3xl">Where can i get some??</p>
            <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, similique veritatis perspiciatis corrupti velit consequuntur provident optio facere, nulla cumque iure sequi et tempore, sapiente animi cupiditate corporis voluptatibus autem aspernatur inventore accusamus dolor laudantium natus. Inventore culpa eveniet animi?</p>
            <button className="btn btn-outline">Read more....</button>
        </div>
      </div>
    
    </div>
  );
};

export default Featured;
