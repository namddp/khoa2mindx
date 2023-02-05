import React, { useState } from "react";
import "./SlideShow.css";

const SlideShow = () => {
  const [index, setIndex] = useState(0);
  const images = [
    {
      src: "https://nakashimawoodworkers.com/wp-content/uploads/2018/04/Mira-Chair-1280x853.jpg",
      caption: "Mira Chair, Walnut",
    },
    {
      src: "https://nakashimawoodworkers.com/wp-content/uploads/2018/04/Host-Chair-Rocker2-1280x853.jpg",
      caption: "Host Chair Rocker,Walnut with Hickory Spindles",
    },
  ];
  const handlePrevClick = () => {
    setIndex((index + images.length - 1) % images.length);
  };

  const handleNextClick = () => {
    setIndex((index + 1) % images.length);
  };

  return (
    <div>
      <div className="title">CHAIRS</div>
      <div className="slideshow">
        <button className="slideshow__arrow" onClick={handlePrevClick}>
          <i class="fa-solid fa-chevron-left"></i>
        </button>
        <img src={images[index].src} alt="slide" className="active" />
        <button className="slideshow__arrow" onClick={handleNextClick}>
          <i class="fa-solid fa-chevron-right"></i>
        </button>
        
      </div>
      <p className="slideshow__caption">{images[index].caption}</p>
    </div>
  );
};

export default SlideShow;
