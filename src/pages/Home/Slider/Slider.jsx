import React from 'react';
import img1 from "../../../assets/banner-1.jpeg";
import img2 from "../../../assets/law-banner-2.jpg";
import img3 from "../../../assets/supreme-court-1.jpg";
import { Carousel } from "flowbite-react";

const Slider = () => {
    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel slide={false}>
          <img src={img1} alt="..." />
          <img src={img2} alt="..." />
          <img src={img3} alt="..." />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
            alt="..."
          />
        </Carousel>
      </div>
    );
};

export default Slider;