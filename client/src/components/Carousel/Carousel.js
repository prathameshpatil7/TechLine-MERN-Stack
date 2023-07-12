import React from "react";
import { Carousel } from "antd";

const BannerCarousel = () => {
  return (
    <Carousel autoplay>
      <div>
        <img alt="" src="/images/banner1.png" width={"100%"} />
      </div>
      <div>
        <img alt="" src="/images/banner2.png" width={"100%"} />
      </div>
      <div>
        <img alt="" src="/images/banner3.png" width={"100%"} />
      </div>
      <div>
        <img alt="" src="/images/banner4.png" width={"100%"} />
      </div>
      <div>
        <img alt="" src="/images/banner5.png" width={"100%"} />
      </div>
    </Carousel>
  );
};

export default BannerCarousel;
