import { Helmet } from "react-helmet";
import PageCover from "../../../Shared/PageCover/PageCover";
import img from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import UseMenu from "../../../Hooks/UseMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = UseMenu();
  const salad = menu.filter((item) => item.category === "salad");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Chain Shop || Menu</title>
      </Helmet>
      <PageCover
        coverImg={img}
        title={"Our Menu"}
        details={
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat expedita suscipit ab voluptatem ea iure non consequuntur voluptates! Incidunt numquam a enim eum quia fugiat quam odit repudiandae cumque sequi!"
        }
      ></PageCover>
      <SectionTitle
        subHeading={"Don't Miss"}
        heading={"Today's Offered"}
      ></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      <MenuCategory
        items={dessert}
        title={"DESSERT"}
        coverImg={dessertImg}
      ></MenuCategory>
      <MenuCategory
        items={pizza}
        title={"PIZZA"}
        coverImg={pizzaImg}
      ></MenuCategory>
      <MenuCategory
        items={soup}
        title={"SOUP"}
        coverImg={soupImg}
      ></MenuCategory>
      <MenuCategory
        items={salad}
        title={"SALAD"}
        coverImg={saladImg}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
