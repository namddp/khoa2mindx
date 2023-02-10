import { ProductsData } from "../data/ProductsData";
import React from "react";
import "./list-ipad.css";

function ListIpad(props) {
  return (
    <div className="listIpad-container w-[300px] h-[500px] border-solid border-[1px] rounded-[20px] text-center ml-[10px] p-[5px] shadow-xl hover:shadow-gray-500">
      <div className="text-center h-[300px] w-[300px]">
        <img
          className=" img1 w-auto h-[250px] m-auto "
          src={props.image[0]}
          alt=""
        />
        <img
          className="img2 w-auto h-[250px] m-auto hidden"
          src={props.image[1]}
          alt=""
        />
      </div>
      <div className="flex justify-center ">
        {props.image.map((img, index) => {
          return <img className="h-[70px] w-[70px]" src={img} alt="" />;
        })}
      </div>
      <div className="text-left">
        <h1>{props.name}</h1>
      </div>
      <div className="flex">
        <h5>13,590,000₫</h5>
        <h5 className="ml-[20%] line-through">16,990,000₫</h5>
      </div>
    </div>
  );
}
const dataIpad = ProductsData.filter((a) => a.type === "Ipad");
console.log(dataIpad[0].ram_options[0]);
function ListIpads() {
  return (
    <div className="grid grid-cols-5 gap-[30%]">
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
