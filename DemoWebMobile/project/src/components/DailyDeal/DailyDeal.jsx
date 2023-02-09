import React from 'react'
import { useState } from 'react';
import { ProductsData } from '../../data/ProductsData'
import Slider from 'react-slick'
import './DailyDeal.css';
var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

const DailyDeal = () => {
    const [listItem,setListItem] =  useState(ProductsData);
  return (
    <div className='dailyDeal'>
        <div className='dealTitle'>
            <h3>Deal Ngon Mỗi Ngày</h3>
            <h3>69 ngày</h3>
        </div>
        <Slider {...settings}>
        {listItem.map(e => {
            return (
                <div className='dealItem' key={e.id}>
                    <img src={e.image[0]} alt="" />
                    <div className='action'>
                        <span>yêu thích</span>
                        <span>xem</span>
                        <span>so sánh</span>
                    </div>
                    <div className='itemImg'>
                        {e.image.map((i,index)=> {
                            return (
                                <img src={i} alt="" key={index}/>
                            )
                        })}
                    </div>
                    <h2>{e.name}</h2>
                    {/* <h3>{e.ram_options[0].info[0].price}</h3> */}
                </div>
            )
        })}
        </Slider>
    </div>
  )
}

export default DailyDeal