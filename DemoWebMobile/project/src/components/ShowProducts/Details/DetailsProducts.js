import React, { useEffect, useState } from "react";
import "./DetailsProducts.css";

function DetailsProducts() {
  const [selectedOption, setSelectedOption] = useState({
    color: "gray",
    
      ram: "8GB",
    
    
    rom: "256GB",
    price: 28990000,
  });

  const handleOptionChange = (optionName, optionValue) => {
    let newSelectedOption = { ...selectedOption, [optionName]: optionValue };
  
    // Update price based on selected RAM and ROM options
    const ramOption = data.options.find((option) => option.ram === newSelectedOption.ram);
    const romOption = ramOption.info.find((info) => info.rom === newSelectedOption.rom);
    newSelectedOption.price = romOption.price;
  
    setSelectedOption(newSelectedOption);
  };
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);  
  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };
  return (
    <div className="product-detail">
      <div className="product-image">
        <div
          className="image-container"
          style={{ transform: `translateX(${-100 * currentImageIndex}%)` }}
        >
          {data.image.map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              alt={data.name}
              className="slide-image"
            />
          ))}
        </div>
        <div className="thumbnail-container">
          {data.image.map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              alt={data.name}
              className={`thumbnail-image ${
                currentImageIndex === index ? "active" : ""
              }`}
              onClick={() => handleThumbnailClick(index)}
            />
          ))}
        </div>
      </div>
       <div className="product-info">
        <h1 className="product-name">{data.name}</h1>
        <div className="product-price">
      {selectedOption.price.toLocaleString()} VND
        </div>
        <div className="product-options">
          <div className="option">
            <span className="option-label">Color:</span>
            {data.color.map((color) => (
              <button
                key={color}
                className={`option-value ${
                  color === selectedOption.color ? "selected" : ""
                }`}
                onClick={() => handleOptionChange("color", color)}
              >
                {color}
              </button>
            ))}
          </div>
          <div className="option">
            <span className="option-label">RAM:</span>
            {data.options.map((option) =>
              option.ram === selectedOption.ram
                ? option.info.map((info) => (
                    <button
                      key={info.rom}
                      className={`option-value ${
                        info.rom === selectedOption.rom ? "selected" : ""
                      }`}
                      onClick={() => handleOptionChange("rom", info.rom)}
                    >
                      {option.ram} - {info.rom}
                    </button>
                  ))
                : null
            )}
          </div>
        </div>
        <div className="product-description">
          <p>{data.description}</p>
        </div>
      </div>
    </div>
  );
}

export default DetailsProducts;

const data = {
  id: 0,
  type: "Macbook",
  name: "MacBook Air M1 2020",
  serial: "AMOT001-7",
  brand: "Apple",
  color: ["gray", "white", "golden"],
  options: [
    {
      ram: "8GB",
      info: [
        {
          rom: "256GB",
          price: 28990000,
        },
        {
          rom: "512GB",
          price: 34990000,
        },
      ],
    },
    {
      ram: "16GB",
      info: [
        {
          rom: "256GB",
          price: 33999000,
        },
        {
          rom: "512GB",
          price: 39999000,
        },
        {
          rom: "1TB",
          price: 59999000,
        },
      ],
    },
  ],
  image: [
    "https://product.hstatic.net/200000544803/product/10_e4b6175708414bdc8f4c1d152795f908_master.png",
    "https://product.hstatic.net/200000544803/product/11_46baafebee87496296f94931d01f7d70_master.png",
    "https://product.hstatic.net/200000544803/product/12_c146dde7313f44309dbc3aeadbdfdcd1_master.png",
    "https://product.hstatic.net/200000544803/product/13_8492d6b1324e46fcaf1820a1f75a839f_master.png",
  ],
};
