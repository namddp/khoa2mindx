import React from "react";
import { useState, useEffect } from "react";
import { ProductsData } from "../../../data/ProductsData";
import Slider from "react-slick";
import CountdownTimer from "./CountdownTimer";
import "./DailyDeal.css";
var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  // autoplay:true,
  // autoplaySpeed:5000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const DailyDeal = (props) => {
  const { products, setProducts, handleSelectLove, handleSelectCheck } = props;
  const [isCountdownPaused, setIsCountdownPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isCountdownPaused) {
        setProducts((prevListItems) => {
          const newItems = Array.from({ length: 8 }, () => {
            return products[Math.floor(Math.random() * products.length)];
          });
          console.log(newItems);
          return newItems;
        });
      }
    }, 60000);
    return () => clearInterval(interval);
  }, [isCountdownPaused]);

  const handleCountdownPause = (isPaused) => {
    setIsCountdownPaused(isPaused);
    if (isPaused) {
      setProducts((prevListItems) => {
        const newItems = Array.from({ length: 8 }, () => {
          return products[Math.floor(Math.random() * products.length)];
        });
        console.log(newItems);
        return newItems;
      });
    }
  };

  return (
    <>
      <div className="dailyDeal">
        <div className="dealTitle">
          <h3>Deal Ngon Mỗi Ngày</h3>
          <h3>
            <CountdownTimer onCountdownPause={handleCountdownPause} />
          </h3>
        </div>
        <Slider {...settings}>
          {products.map((e) => {
            return (
              <div className="dealItem" key={e.id}>
                <div className="dealImg">
                  <img src={e.image[0]} alt="" />
                </div>
                <div className="action">
                  <span onClick={() => handleSelectLove(e.id)}>Thích</span>
                  <span>Thêm Vào Giỏ</span>
                  <span onClick={() => handleSelectCheck(e.id)}>So Sánh</span>
                </div>
                <div className="itemImg">
                  {e.image.map((i, index) => {
                    return <img src={i} alt="" key={index} />;
                  })}
                </div>
                <div className="itemInfo">
                  <h4>{e.name}</h4>
                  <h6>
                    {e.options[0].info[0].price * 0.9} VND
                    <span>{e.options[0].info[0].price} VND</span>
                  </h6>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="productDealList">
        <div className="productDealItem">
          <img
            src="https://theme.hstatic.net/200000544803/1000902479/14/amot_slider_small_img_1.png?v=1880"
            alt=""
          />
        </div>
        <div className="productDealItem">
          <img
            src="https://theme.hstatic.net/200000544803/1000902479/14/amot_slider_small_img_2.png?v=1880"
            alt=""
          />
        </div>
        <div className="productDealItem">
          <img
            src="https://theme.hstatic.net/200000544803/1000902479/14/amot_slider_small_img_3.png?v=1880"
            alt=""
          />
        </div>
        <div className="productDealItem">
          <img
            src="https://theme.hstatic.net/200000544803/1000902479/14/amot_slider_small_img_4.png?v=1880"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default DailyDeal;
