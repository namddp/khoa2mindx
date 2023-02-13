import React, { useState } from "react";
import "./HeaderMenu.css";
const HeaderMenu = () => {
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);

  const handleDropdownEnter = (setDropdown) => () => setDropdown(true);
  const handleDropdownLeave = (setDropdown) => () => setDropdown(false);
  return (
    <ul className="header-menu">
      <li>
        <a href="#">Trang Chủ </a>
      </li>
      <li
       className="dropdown"
       onMouseEnter={handleDropdownEnter(setDropdown1)}
       onMouseLeave={handleDropdownLeave(setDropdown1)}
      >
        <a href="#">
          Sản Phẩm <i className="fa-solid fa-chevron-down fa-2xs "></i>
        </a>
        {dropdown1 && (
          <div className="dropdown-content">
            <div className="flex flex-col md:flex-row md:justify-around">
              <div
                className="1 p-4 border border-gray-300 rounded-lg"
                style={{
                  marginLeft: "10px",
                  marginTop: "10px",
                  marginRight: "30px",
                }}
              >
                <a href="#">
                  {" "}
                  <b>Mac</b>
                </a>
                <div>
                  <a href="#">MacBook Air</a>
                  </div>
                  <div>
                  <a href="#">MacBook Pro</a>
                </div>
                <div>
                  <a href="#">iMac 24'</a>
                </div>
                <div>
                  <a href="#">Mac Mini</a>
                </div>
              </div>
              <div
                className="1 p-4 border border-gray-300 rounded-lg"
                style={{
                  marginLeft: "10px",
                  marginTop: "10px",
                  marginRight: "30px",
                }}
              >
                <a href="#">
                  <b>iPad</b>
                </a>
                <div>
                  <a href="#">iPad Air</a>
                </div>
                <div>
                  <a href="#">iPad Pro</a>
                </div>
                <div>
                  <a href="#">iPad </a>
                </div>
                <div>
                  <a href="#">iPad Mini</a>
                </div>
              </div>
              <div
                className="1 p-4 border border-gray-300 rounded-lg"
                style={{
                  marginLeft: "10px",
                  marginTop: "10px",
                  marginRight: "30px",
                }}
              >
                <a href="#">
                  <b>iPhone</b>
                </a>
                <div>
                  <a href="#">iPhone X</a>
                </div>
                <div>
                  <a href="#">iPhone 11</a>
                </div>
                <div>
                  <a href="#">iPhone SE</a>
                </div>
                <div>
                  <a href="#"> iPhone 12</a>
                </div>
                <div>
                  <a href="#"> iPhone 13</a>
                </div>
              </div>
            </div>
          </div>
        )}
      </li>
      <li
       className="dropdown"
       onMouseEnter={handleDropdownEnter(setDropdown2)}
       onMouseLeave={handleDropdownLeave(setDropdown2)}
      >
        <a href="#">
          Phụ Kiện <i className="fa-solid fa-chevron-down fa-2xs"></i>
        </a>
        {dropdown2 && (
          <div className="dropdown-content">
            <div className="dropdown">
              <div
               onMouseEnter={handleDropdownEnter(setDropdown3)}
               onMouseLeave={handleDropdownLeave(setDropdown3)}
              >
                <a href="#">Macbook<i className="fa-solid fa-chevron-right fa-xs "></i></a>
                {dropdown3 && (
                  <ul className="dropdown-content dd-right">
                    <li>
                      <a href="#">Macbook2019</a>
                    </li>
                    <li>
                      <a href="#">Macbook2020</a>
                    </li>
                    <li>
                      <a href="#">Macbook2021</a>
                    </li>
                  </ul>
                )}
              </div>
            </div>
            <a href="#">Ipad</a>
            <a href="#">iPhone</a>
          </div>
        )}
      </li>
      <li>
        <a href="#">iPhone14</a>
      </li>
      <li>
        <a href="#">Liên Hệ</a>
      </li>
      <li>
        <a href="#">Giới Thiệu</a>
      </li>
      <li className="header-search">
        <form>
          <input type="text" placeholder="Tìm kiếm sản phẩm..." />
          <button type="submit">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </li>
    </ul>
  );
};

export default HeaderMenu;
