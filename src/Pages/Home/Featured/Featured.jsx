import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg"
const Featured = () => {
  return (
    <div>
      <SectionTitle
        heading={"Featured Items"}
        subHeading={"Check it Out"}
      ></SectionTitle>

      <div className="flex justify-center items-center gap-6">
        <div>
            <img src={featuredImg} alt="" />
        </div>
        <div className="space-y-3">
            <h3>20 Agu 2024</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, similique veritatis perspiciatis corrupti velit consequuntur provident optio facere, nulla cumque iure sequi et tempore, sapiente animi cupiditate corporis voluptatibus autem aspernatur inventore accusamus dolor laudantium natus. Inventore culpa eveniet animi?</p>
            <button className="btn btn-outline">Read more....</button>
        </div>
      </div>
    
    </div>
  );
};

export default Featured;
