import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="header-title">
          <img src="http://surl.li/etcty" alt="This is logo"></img>
         <ul>
            <li>Hotline xxxxx</li>
            <li>Miễn Phí Vận Chuyển Đơn Hàng Trên 1.000.000</li>
            <li><a href="#">Đăng Nhập</a> / <a href="#"> Đăng Kí</a></li>
         </ul>
        </div>
        <ul className="header-menu">
          <li>
            <a href="#">Trang Chủ </a>
          </li>
          <li>
            <a href="#">Sản Phẩm</a>
            <ul className="header-submenu">
              <li>
                <a href="#">Mac</a>
              </li>
              <li>
                <a href="#"></a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Phụ Kiện</a>
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
              <input type="text" placeholder="Search..." />
              <button type="submit">Go</button>
            </form>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
