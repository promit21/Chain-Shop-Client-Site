/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Button from "../../../Shared/Button/Button";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import PageCover from "../../../Shared/PageCover/PageCover";

const MenuCategory = ({ items, coverImg, title, btnName }) => {
  return (
    <div className="my-10">
      {title && <PageCover coverImg={coverImg} title={title}></PageCover>}
      <div className="grid lg:grid-cols-2 gap-8 mt-5">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <Button btnName={btnName}></Button>
      </Link>
    </div>
  );
};

export default MenuCategory;
