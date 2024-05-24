import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import "@smastrom/react-rating/style.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import RecommendsCard from "./RecommendsCard";
import UseMenu from "../../../Hooks/UseMenu";

const ChefRecommends = () => {
  const [menu] = UseMenu();

  return (
    <div>
      <SectionTitle
        heading={"CHEF RECOMMENDS"}
        subHeading={"Should try"}
      ></SectionTitle>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {menu.map((item) => (
          <SwiperSlide key={item._id}>
            <RecommendsCard item={item}></RecommendsCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ChefRecommends;
