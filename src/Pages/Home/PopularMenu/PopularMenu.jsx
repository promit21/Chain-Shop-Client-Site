import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../../Shared/MenuItem/MenuItem";


const PopularMenu = () => {

    const [menu, setMenu] = useState([])

    useEffect( ()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=> {
            const popularItem = data.filter(item => item.category === 'popular')
            
            setMenu(popularItem)})
    } ,[])

    return (
        <div>
            <SectionTitle
            heading={"From our menu"}
            subHeading={"Popular Items"}
            ></SectionTitle>

            <div className="grid lg:grid-cols-2 gap-8"> 
                {
                    menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>

        </div>
    );
};

export default PopularMenu;