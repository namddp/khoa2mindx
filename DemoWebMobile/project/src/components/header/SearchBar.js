import React, { useState ,useEffect} from "react";
import {ProductsData} from "../../data/ProductsData";
import "./SearchBar.css";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(ProductsData);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());

    
  };
  useEffect(() => {
    console.log(filteredData)
    setFilteredData(
      ProductsData.filter((product) =>
      {
        if (searchTerm === '' || searchTerm === null) {
          return [];
      }
      else {
          return product.name.toLowerCase().includes(searchTerm)
      }}));
      console.log(filteredData)
  }, [searchTerm]);
  return (
    <div>
      <li className="header-search">
        <form>
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm..."
            onChange={handleSearch}
            value={searchTerm}
          />
          <button type="submit">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </li>
      <ul className="product-list">
        {searchTerm.length > 0 ? (
          filteredData.map((product) => (
            <li className="product-frame" key={product.id}>
              <img src={product.image[0]} alt={product.name} />
              <div>
              <h5>{product.name}</h5>
              <p>{product.ram_options[0].info[0].price}</p>
              </div>
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
