import PropTypes from "prop-types";
import { useState, useEffect } from "react";

function Carousel({ images, title, description, date }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPtagVisible, setIsPtagVisible] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images]);

  const handleCarouselMouseEnter = () => {
    setIsPtagVisible(true);
  };

  const handleCarouselMouseLeave = () => {
    setIsPtagVisible(false);
  };

  const handleCarouselClick = () => {
    setIsPtagVisible(!isPtagVisible);
  };

  return (
    <div
      className="carousel h-[60vh] lg:w-[40vw] lg:mx-[10vh] w-[90vw] bg-black opacity-95 rounded-2xl border-2 border-solid border-white mx-auto relative mt-[20vh] -mb-28 "
      onMouseEnter={handleCarouselMouseEnter}
      onMouseLeave={handleCarouselMouseLeave}
      onClick={handleCarouselClick}
    >
      <div className="flex flex-col items-center flex-1 h-full w-full">
        <img
          src={images[currentImageIndex]}
          alt=""
          className={`h-[50vh] w-[80vw] lg:w-[35vw] mt-4 rounded-2xl  ${
            isPtagVisible ? "hidden" : ""
          }`}
        />
        <h2
          className={`text-2xl font-bold mt-auto absolute bottom-0 pb-4 ${
            isPtagVisible ? "hidden" : ""
          }`}
          style={{ color: "#01adfc" }}
        >
          {title}
        </h2>
        <p
          className={`h-[50vh] w-[90vw] lg:w-[40vw] p-[2rem] pt-12 text-justify flex justify-center items-center absolute ${
            isPtagVisible ? "" : "hidden"
          }`}
          style={{ color: "#01adfc" }}
        >
          {description}
        </p>
        <p
          className={`h-[10vh] w-[90vw] lg:w-[40vw] p-[2rem] absolute bottom-0  ${
            isPtagVisible ? "" : "hidden"
          }`}
          style={{ color: "#01adfc" }}
        >
          <span className="font-bold">Date</span>: {date}
        </p>
      </div>
    </div>
  );
}

Carousel.propTypes = {
  images: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Carousel;
