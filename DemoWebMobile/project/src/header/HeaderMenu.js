import React, { useState } from 'react';
import "./HeaderMenu.css"
const HeaderMenu = () => {
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);

  const toggleDropdown1 = () => setDropdown1(!dropdown1);
  const toggleDropdown2 = () => setDropdown2(!dropdown2);

  return (
    <ul className="header-menu">
      <li>
        <a href="#">Trang Chủ </a>
      </li>
      <li className="dropdown" onClick={toggleDropdown1}>
        <a href="#">Sản Phẩm <i className="fa-solid fa-chevron-down fa-2xs "></i></a>
        {dropdown1 && (
         <div className="dropdown-content">
         <div className="flex flex-col md:flex-row md:justify-around">
         <div className="1 p-4 border border-gray-300 rounded-lg" style={{marginLeft: "10px", marginTop: "10px", marginRight: "30px"}}>
             <a href="#"> <b>Mac</b></a>
             <div><a href="#">MacBook Air</a></div>
             <div><a href="#">MacBook Pro</a></div>
             <div><a href="#">iMac 24'</a></div>
             <div><a href="#">Mac Mini</a></div>
           </div>
           <div className="1 p-4 border border-gray-300 rounded-lg" style={{marginLeft: "10px", marginTop: "10px", marginRight: "30px"}}>
             <a href="#"><b>iPad</b></a>
             <div><a href="#">iPad Air</a></div>
             <div><a href="#">iPad Pro</a></div>
             <div><a href="#">iPad </a></div>
             <div><a href="#">iPad Mini</a></div>
           </div>
           <div className="1 p-4 border border-gray-300 rounded-lg" style={{marginLeft: "10px", marginTop: "10px", marginRight: "30px"}}>
             <a href="#"><b>iPhone</b></a>
             <div><a href="#">iPhone X</a></div>
             <div><a href="#">iPhone 11</a></div>
             <div><a href="#">iPhone SE</a></div>
             <div><a href="#"> iPhone 12</a></div>
             <div><a href="#"> iPhone 13</a></div>
           </div>
         </div>
       </div>
       
        )}
      </li>
      <li className="dropdown" onClick={toggleDropdown2}>
        <a href="#">Phụ Kiện <i className="fa-solid fa-chevron-down fa-2xs"></i></a>
        {dropdown2 && (
          <div className="dropdown-content">
            <a href="#">Mac</a>
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
