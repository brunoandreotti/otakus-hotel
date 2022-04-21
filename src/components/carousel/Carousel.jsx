//importações para utilizar o swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import "./Carousel.css";

//importar imagens 
import quarto from "../../assets/images/quarto2.jpg";
import bonsai from "../../assets/images/bonsai.jpg";
import bell from "../../assets/images/hotel-bell.jpg";
import lantern from "../../assets/images/japanese-lantern.jpg";

export default function Carousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={quarto} alt={"bonsai"} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={bell} alt={"bonsai"}/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={bonsai} alt={"bonsai"}/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={lantern} alt={"bonsai"}/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
