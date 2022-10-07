import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function HomeImageCarousel() {
  return (
    <>
      <div className="relative">
        <div className="absolute w-full h-32" />
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          interval={3000}
        >
          <div>
            <img
              className="xl:w-full xl:h-banner lg:h-[20rem] "
              loading="lazy"
              src="https://img.freepik.com/free-psd/dog-food-banner-template_23-2148516359.jpg?w=2000"
              alt=""
            />
          </div>
          <div>
            <img
              className="xl:w-full xl:h-banner lg:h-[20rem]"
              loading="lazy"
              src="https://storage.pixteller.com/designs/designs-images/2021-01-01/01/dog-food-premium-pet-food-1-5fef0b9749bb8.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="xl:w-full xl:h-banner lg:h-[20rem]"
              loading="lazy"
              src="https://img.freepik.com/free-psd/healthy-dog-food-banner-template_23-2148457498.jpg?w=2000"
              alt=""
            />
          </div>
        </Carousel>
      </div>
    </>
  );
}

export default HomeImageCarousel;
