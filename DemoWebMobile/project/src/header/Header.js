import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="header-title">
          <img src="http://surl.li/etcty" alt="This is logo"></img>
         <ul>
            <li >Hotline: xxxxx</li>
            <li><i>Miễn Phí Vận Chuyển Đơn Hàng Trên <b>1.000.000đ</b></i></li>
            <li><a href="#">Đăng Nhập</a>/ <a href="#"> Đăng Kí</a></li>
            <li><a href="#"><i class="fa-regular fa-heart"></i></a></li>
            <li><a href="#"><i class="fa-solid fa-code-compare"></i></a></li>
            <li><a href="#"><i class="fa-solid fa-cart-shopping"></i>Giỏ hàng</a></li>

         </ul>
        </div>
        <hr />
        <ul className="header-menu">
          <li>
            <a href="#">Trang Chủ </a>
          </li>
          <li>
            <a href="#">Sản Phẩm <i className="fa-solid fa-chevron-down fa-2xs "></i></a>
          </li>
          <li>
            <a href="#">Phụ Kiện <i className="fa-solid fa-chevron-down fa-2xs"></i></a>
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
      </nav>
    </header>
  );
};

export default Header;
