import React, { useState, useEffect } from "react";
import { ProductsData } from "../../data/ProductsData";
import "./SearchBar.css";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = ProductsData.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const formatPrice = (price) => {
    const f = new Intl.NumberFormat("vi-vn", {
      style: "currency",
      currency: "VND",
    });

    return f.format(price);
  };

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
        {searchTerm ? (
          !!filtered.length ? (
            filtered.map((product) => (
              <li className="product-frame" key={product.id}>
                <img src={product.image[0]} alt={product.name} />
                <h3>
                  <a href={product.url}>{product.name}</a>
                </h3>
                {/* <hr/> */}
                <p>{formatPrice(product?.options?.[0]?.info[0]?.price || 0)}</p>
                <hr />
              </li>
            ))
          ) : (
            <p className="not-found">Không Tìm Thấy Sản Phẩm Liên Quan</p>
          )
        ) : null}
      </ul>
    </div>
  );
}

export default SearchBar;
