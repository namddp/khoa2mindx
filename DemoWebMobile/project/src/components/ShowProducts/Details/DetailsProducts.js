import { useState, useEffect } from "react";

const DetailProduct = ({ match }) => {
  const [product, setProduct] = useState(null);
  const productId = match.params.id;

  useEffect(() => {
    fetch("https://63f488d42213ed989c44ccc5.mockapi.io/products/")
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error(error));
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image[0]} alt={product.name} />
      <p>Price: {product.options[0].info[0].price}</p>
      <p>Description: {product.description}</p>
      <p>Type: {product.type}</p>
      <p>Brand: {product.brand}</p>
      <p>Color: {product.color.join(", ")}</p>
    </div>
  );
};

export default DetailProduct;
