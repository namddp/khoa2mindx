import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import HeaderMenu from "./HeaderMenu";
import { SidebarContext } from "../Context/SidebarContext";
const Header = (props) => {
  const { careItems, checkItems } = props;
  const { isOpen, setIsOpen } = useContext(SidebarContext);
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
              <Link to="/careitems">
                <i class="fa-regular fa-heart">{careItems.length}</i>
              </Link>
            </li>
            <li>
              <Link to="/checkitems">
                <i class="fa-solid fa-code-compare">{checkItems.length}</i>
              </Link>
            </li>
            <li>
              <Link to="/manage">
                <i class="fa-solid fa-cart-shopping"></i>Manage
              </Link>
            </li>

            <li>
              <Link to="/cart">
                <i class="fa-solid fa-cart-shopping"></i>Giỏ hàng
              </Link>
            </li>
            <li onClick={() => setIsOpen(!isOpen)}>open / close</li>
          </ul>
        </div>
        <hr />
        <HeaderMenu />
      </nav>
    </header>
  );
};

export default Header;
