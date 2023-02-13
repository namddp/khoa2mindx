import React, { useState } from "react";
import {ProductsData} from "../../data/ProductsData";
import "./SearchBar.css";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(ProductsData);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setFilteredData(
      ProductsData.filter((product) =>
        product.name.toLowerCase().startsWith(searchTerm.toLowerCase())
      )
    );
  };

  return (
    <div>
      <li className="header-search">
        <form>
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm..."
            value={searchTerm}
            onChange={handleSearch}
          />
          <button type="submit">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </li>
      <ul className="product-list">
        {filteredData.length > 0 ? (
          filteredData.map((product) => (
            <li className="product-frame" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </li>
          ))
        ) : searchTerm ? (
          <p className="not-found">This item not found</p>
        ) : null}
      </ul>
    </div>
  );
}

export default SearchBar;
