import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import HeaderMenu from "./HeaderMenu";
const Header = (props) => {
  const { careItems, checkItems } = props;
  return (
    <header>
      <nav>
        <div className="header-title">
          <Link to="/">
            {" "}
            <img src="http://surl.li/etcty" alt="This is logo" />
          </Link>
          <ul>
            <li>Hotline: xxxxx</li>
            <li>
              <i>
                Miễn Phí Vận Chuyển Đơn Hàng Trên <b>1.000.000đ</b>
              </i>
            </li>
            <li>
              <a href="#">Đăng Nhập</a>/ <a href="#"> Đăng Kí</a>
            </li>
            <li>
              <a href="#">
                <i class="fa-regular fa-heart">{careItems.length}</i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa-solid fa-code-compare">{checkItems.length}</i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa-solid fa-cart-shopping"></i>Giỏ hàng
              </a>
            </li>
          </ul>
        </div>
        <hr />
        <HeaderMenu />
      </nav>
    </header>
  );
};

export default Header;
