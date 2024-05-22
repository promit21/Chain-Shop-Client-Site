/* eslint-disable react/prop-types */
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import PageCover from "../../../Shared/PageCover/PageCover";

const MenuCategory = ({ items, coverImg, title }) => {
  return (
    <div className="my-10">
      { title && <PageCover coverImg={coverImg} title={title}></PageCover>}
      <div className="grid lg:grid-cols-2 gap-8 mt-5">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
