import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import UseMenu from "../../../Hooks/UseMenu";

const PopularMenu = () => {
  const [menu] = UseMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <div>
      <SectionTitle
        heading={"From our menu"}
        subHeading={"Popular Items"}
      ></SectionTitle>

      <div className="grid lg:grid-cols-2 gap-8">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default PopularMenu;
