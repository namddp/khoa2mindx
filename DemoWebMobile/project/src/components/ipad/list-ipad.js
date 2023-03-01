import React from "react";
import { ProductsData } from "../../data/ProductsData";
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
        <h5 className="text-lg">{props.name}</h5>
      </div>
      <div className="flex mt-[30px]">
        <p>13,590,000₫</p>
        <p className="ml-[15px] line-through">16,990,000₫</p>
      </div>
    </div>
  );
}

const dataIpad = ProductsData.filter((a) => a.type === "Ipad");
console.log(dataIpad[0].options[0]);

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
function ListAccessory(props) {
  return (
    <div className="listAccessory-container w-[265px] h-[450px] border-solid border-[1px] rounded-[20px] text-center ml-[10px] p-[5px] shadow-xl hover:shadow-gray-500">
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
        <h5 className="text-lg">{props.name}</h5>
      </div>
      <div className="flex mt-[30px]">
        <p>{props.price}</p>
      </div>
    </div>
  );
}

const dataAccessory = ProductsData.filter((a) => a.type === "Apple Watch");

function ListAccessories() {
  return (
    <div className="flex justify-center gap-[1px]">
      {dataAccessory.map((item, index) => {
        return (
          <ListAccessory
            key={index}
            id={item.id}
            type={item.type}
            name={item.name}
            serial={item.serial}
            brand={item.brand}
            color={item.color}
            image={item.image}
            price={item.price}
          />
        );
      })}
    </div>
  );
}
function ListiPhone(props) {
  return (
    <div className="listIphone-container w-[265px] h-[450px] border-solid border-[1px] rounded-[20px] text-center ml-[10px] p-[5px] shadow-xl hover:shadow-gray-500">
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
        <h5 className="text-lg">{props.name}</h5>
      </div>
      <div className="flex mt-[30px]">
        <p>{props.price}</p>
      </div>
    </div>
  );
}

const dataiPhone = ProductsData.filter((a) => a.type === "Iphone");

function ListiPhones() {
  return (
    <div className="flex justify-center gap-[1px]">
      {dataiPhone.map((item, index) => {
        return (
          <ListiPhone
            key={index}
            id={item.id}
            type={item.type}
            name={item.name}
            serial={item.serial}
            brand={item.brand}
            color={item.color}
            image={item.image}
            price={item.price}
          />
        );
      })}
    </div>
  );
}
function ListMacBook(props) {
  return (
    <div className="listMacBook-container w-[265px] h-[450px] border-solid border-[1px] rounded-[20px] text-center ml-[10px] p-[5px] shadow-xl hover:shadow-gray-500">
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
        <h5 className="text-lg">{props.name}</h5>
      </div>
      <div className="flex mt-[30px]">
        <p>{props.price}</p>
      </div>
    </div>
  );
}

const dataMacBook = ProductsData.filter((a) => a.type === "Macbook");

function ListMacBooks() {
  return (
    <div className="flex justify-center gap-[1px]">
      {dataMacBook.map((item, index) => {
        return (
          <ListMacBook
            key={index}
            id={item.id}
            type={item.type}
            name={item.name}
            serial={item.serial}
            brand={item.brand}
            color={item.color}
            image={item.image}
            price={item.price}
          />
        );
      })}
    </div>
  );
}

function ListItems() {
  return (
    <div>
      <ListIpads />
      <ListMacBooks />
      <ListAccessories />
      <ListiPhones />
    </div>
  );
}
export default ListItems;
