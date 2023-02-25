import { useState, useEffect } from "react";
import "./AllProducts.css";

const AllProducts = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    type: [],
    brand: [],
    color: [],
  });
  // console.log("selectedOptions", selectedOptions);

  const [productsData, setProductsData] = useState([]);

  const formatPrice = (price) => {
    const f = new Intl.NumberFormat("vi-vn", {
      style: "currency",
      currency: "VND",
    });

    return f.format(price);
  };

  useEffect(() => {
    fetch("https://63f488d42213ed989c44ccc5.mockapi.io/products")
      .then((response) => response.json())
      .then((data) => setProductsData(data))
      .catch((error) => console.error(error));
  }, []);

  const handleCheckboxChange = (event) => {
    const { name, value, checked } = event.target;
    setSelectedOptions((prevState) => ({
      ...prevState,
      [name]: checked
        ? [...prevState[name], value]
        : prevState[name].filter((item) => item !== value),
    }));
  };

  const handleColorChange = (event) => {
    const { value, checked } = event.target;
    setSelectedOptions((prevState) => ({
      ...prevState,
      color: checked
        ? [...prevState.color, value]
        : prevState.color.filter((item) => item !== value),
    }));
  };

  const filteredProducts = productsData.filter((product) => {
    const { type, brand, color } = selectedOptions;
    console.log({
      color,
      a: product.color,
    });
    return (
      (type.length === 0 || type.includes(product.type)) &&
      (brand.length === 0 || brand.includes(product.brand)) &&
      (color.length === 0 || product.color?.some((c) => color.includes(c)))
    );
  });

  const colors = Array.from(
    new Set(productsData.flatMap((p) => (p.color ? p.color : [])))
  );
  return (
    <div className="all-product-list">
      <div className="all-filter">
        <h1>Danh sách </h1>
        <div>
          <h2>Thể Loại</h2>
          <input
            type="checkbox"
            name="type"
            value="Macbook"
            onChange={handleCheckboxChange}
          />
          Macbook
          <br />
          <input
            type="checkbox"
            name="type"
            value="Iphone"
            onChange={handleCheckboxChange}
          />
          iPhone
          <br />
          <input
            type="checkbox"
            name="type"
            value="Ipad"
            onChange={handleCheckboxChange}
          />
          iPad
          <br />
          <input
            type="checkbox"
            name="type"
            value="SDP"
            onChange={handleCheckboxChange}
          />
          Phụ Kiện
        </div>
        <div>
          <h2>Thương Hiệu</h2>
          <input
            type="checkbox"
            name="brand"
            value="Apple"
            onChange={handleCheckboxChange}
          />
          Apple
        </div>
        <div>
          <h2>Màu Sắc</h2>
          {colors.map((color) => (
            <div key={color}>
              <input
                type="checkbox"
                name="color"
                value={color}
                onChange={handleColorChange}
              />
              {color}
            </div>
          ))}
        </div>
        {/* <Sort /> */}
      </div>

      <div className="all-product-display">
        <ul>
          {filteredProducts.map((product) => (
            <li key={product?.id}>
              <img src={product?.image?.[0]} alt={product?.name} />
              <h3 className="all-hover-name-product">{product?.name}</h3>
              <p className="">
                {formatPrice(product?.options?.[0].info?.[0]?.price)}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default AllProducts;
