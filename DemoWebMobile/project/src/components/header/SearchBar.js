<<<<<<< HEAD
import React, { useState } from "react";
import { ProductsData } from "../../data/ProductsData";
=======
import React, { useState ,useEffect} from "react";
import {ProductsData} from "../../data/ProductsData";
>>>>>>> 80e90eabd4688c3447f47901e0739f24cbf05b58
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
<<<<<<< HEAD
        new RegExp(searchTerm, "i").test(product.name)
      )
    );
  };

=======
      {
        if (searchTerm === '' || searchTerm === null) {
          return [];
      }
      else {
          return product.name.toLowerCase().includes(searchTerm)
      }}));
      console.log(filteredData)
  }, [searchTerm]);
>>>>>>> 80e90eabd4688c3447f47901e0739f24cbf05b58
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
<<<<<<< HEAD
        {searchTerm ? (
          filteredData.length > 0 ? (
            filteredData.map((product) => (
              <li className="product-frame" key={product.id}>
                <img src={product.image[0]} alt={product.name} />
                <h3>
                  <a href={product.url}>{product.name}</a>
                </h3>
                <p>{product.ram_options[0].info[0].price}</p>
              </li>
            ))
          ) : (
            <p className="not-found">Không Tìm Thấy Sản Phẩm Liên Quan</p>
          )
=======
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
>>>>>>> 80e90eabd4688c3447f47901e0739f24cbf05b58
        ) : null}
        
      </ul>
    </div>
  );
}

export default SearchBar;
