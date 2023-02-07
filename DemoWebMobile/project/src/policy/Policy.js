import React from "react";
import "./Policy.css";

function Policy() {
  return (
    <ul className="list">
      <li className="list-policy">
        <i className="fa-solid fa-truck-fast fa-icon"></i>
        <div className="ship-info">
          SHIP SIÊU TỐC - 2H <br />
          Miễn phí - An Toàn
        </div>
      </li>
      <li className="list-policy">
      <i className="fa-solid fa-phone fa-icon "></i>
        <div className="ship-info">
         TƯ VẤN MIỄN PHÍ <br />
         Từ 7h-24h: 1900.63.60.99
        </div>
      </li>{" "}
      <li className="list-policy">
        <i className="  fa-solid fa-rotate-left fa-icon"></i>
        <div className="ship-info">
         HOÀN TRẢ MIỄN PHÍ <br />
         Lên đến 45 ngày
        </div>
      </li>{" "}
      <li className="list-policy">
        <i className="fa-solid fa-truck-fast fa-icon"></i>
        <div className="ship-info">
         MIỄN PHÍ CÀ THẺ  <br />
         Visa Master ATM
        </div>
      </li>{" "}
      <li className="list-policy">
        <i className="fa-solid fa-truck-fast fa-icon"></i>
        <div className="ship-info">
          TRẢ GÓP 0% LÃI SUẤT<br />
          Online - Tận nhà
        </div>
      </li>
    </ul>
  );
}

export default Policy;
