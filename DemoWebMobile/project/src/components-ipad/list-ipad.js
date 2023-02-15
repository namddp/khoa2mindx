import { ProductsData } from "../data/ProductsData";
import React from "react";
import "./list-ipad.css";

function ListIpad(props) {
  return (
    <div className="listIpad-container w-[265px] h-[450px] border-solid border-[1px] rounded-[20px] text-center ml-[10px] p-[5px] shadow-xl hover:shadow-gray-500">
      <div className="text-center h-[265px] w-[265px]">
        <img
          className="img1 w-auto h-[210px] m-auto "
          src={props.image[0]}
          alt=""
        />
        <img
          className="img2 w-auto h-[210px] m-auto hidden"
          src={props.image[1]}
          alt=""
        />
      </div>
      <div className="flex justify-center ">
        {props.image.map((img, index) => {
          return <img className="h-[60px] w-[60px]" src={img} alt="" />;
        })}
      </div>
      <div className="text-left ">
        <h5 class="text-lg">{props.name}</h5>
      </div>
      <div className="flex mt-[30px]">
        <p>13,590,000₫</p>
        <p className="ml-[15px] line-through">16,990,000₫</p>
      </div>
    </div>
  );
}

const dataIpad = ProductsData.filter((a) => a.type === "Ipad");
console.log(dataIpad[0].ram_options[0]);

function ListIpads() {
  return (
    <div className="flex justify-center gap-[1px]">
      {dataIpad.map((item, index) => {
        return (
          <ListIpad
            key={index}
            id={item.id}
            type={item.type}
            name={item.name}
            serial={item.serial}
            brand={item.brand}
            color={item.color}
            image={item.image}
          />
        );
      })}
    </div>
  );
}

export default ListIpads;
