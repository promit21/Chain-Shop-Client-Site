import { Helmet } from "react-helmet";
import PageCover from "../../../Shared/PageCover/PageCover";
import img from "../../../assets/menu/banner3.jpg"
import PopularMenu from "../../Home/PopularMenu/PopularMenu";

const Menu = () => {
    return (
        <div>
             <Helmet><title>Chain Shop || Menu</title></Helmet>
            <PageCover coverImg={img} title={"Our Menu"} details={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat expedita suscipit ab voluptatem ea iure non consequuntur voluptates! Incidunt numquam a enim eum quia fugiat quam odit repudiandae cumque sequi!"}></PageCover>
            <PopularMenu></PopularMenu>
            <PageCover coverImg={img} title={"Our Menu"} details={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat expedita suscipit ab voluptatem ea iure non consequuntur voluptates! Incidunt numquam a enim eum quia fugiat quam odit repudiandae cumque sequi!"}></PageCover>
            <PopularMenu></PopularMenu>
            <PageCover coverImg={img} title={"Our Menu"} details={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat expedita suscipit ab voluptatem ea iure non consequuntur voluptates! Incidunt numquam a enim eum quia fugiat quam odit repudiandae cumque sequi!"}></PageCover>
            <PopularMenu></PopularMenu>
            <PageCover coverImg={img} title={"Our Menu"} details={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat expedita suscipit ab voluptatem ea iure non consequuntur voluptates! Incidunt numquam a enim eum quia fugiat quam odit repudiandae cumque sequi!"}></PageCover>
            <PopularMenu></PopularMenu>
       
        </div>
    );
};

export default Menu;