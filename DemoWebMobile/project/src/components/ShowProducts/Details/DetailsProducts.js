import React, { useEffect, useState } from "react";
import "./DetailsProducts.css";

function DetailsProducts() {
  const [product, setProduct] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Fetch the product data from the API endpoint
    fetch("https://63f488d42213ed989c44ccc5.mockapi.io/products")
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setSelectedOption({
          color: data.color[0],
          ram: data.options[0].ram,
          rom: data.options[0].info[0].rom,
          price: data.options[0].info[0].price,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleOptionChange = (optionName, optionValue) => {
    let newSelectedOption = { ...selectedOption, [optionName]: optionValue };

    // Update price based on selected RAM and ROM options
    const ramOption = product.options.find(
      (option) => option.ram === newSelectedOption.ram
    );
    const romOption = ramOption.info.find(
      (info) => info.rom === newSelectedOption.rom
    );
    newSelectedOption.price = romOption.price;

    setSelectedOption(newSelectedOption);
  };

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  if (!product || !selectedOption) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-detail">
      <div className="product-image">
        <div
          className="image-container"
          style={{ transform: `translateX(${-100 * currentImageIndex}%)` }}
        >
          {product.image.map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              alt={product.name}
              className="slide-image"
            />
          ))}
        </div>
        <div className="thumbnail-container">
          {product.image.map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              alt={product.name}
              className={`thumbnail-image ${
                currentImageIndex === index ? "active" : ""
              }`}
              onClick={() => handleThumbnailClick(index)}
            />
          ))}
        </div>
      </div>
      <div className="product-info">
        <h1 className="product-name">{product.name}</h1>
        <div className="product-price">
          {selectedOption.price.toLocaleString()} VND
        </div>
        <div className="product-options">
          <div className="option">
            <span className="option-label">Color:</span>
            {product.color.map((color) => (
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
          {/* <div className="option">
            <span className="option-label">RAM:</span>
            {product.options.map((option) =>
              option.ram === selectedOption.ram
                ? option.info.map((info) => (
                    <button
                      key={info.rom}
                      className={`option-value ${
                        info.rom === selectedOption.rom ? "selected" : ""
                      }`}
                      onClick={() => handleOptionChange("rom", info.rom)}
                    >
                      {option.info[0].ram}GB / {info.rom}GB
                    </button>
                  ))
                : null
            )}
          </div> */}
        </div>
        <button className="add-to-cart">Add to cart</button>
      </div>
    </div>
  );
}

export default DetailsProducts;
