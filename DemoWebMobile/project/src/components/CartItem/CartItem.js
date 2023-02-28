import React from "react";
import { Link } from "react-router-dom";
const CartItem = ({ item }) => {
  const { id, image, name, price, amount } = item;
  return (
    <div className="flex">
      <div className="w-full min-h-[150px] flex items-center gap-x-4 ">
        <Link to={`/products/${id}`}>
          <img
            className="max-w-[80px]"
            src={item?.image?.[0]}
            alt={item?.name}
          />
        </Link>
        <div>
            <div>
                <Link to={`/product/${id}`} className="text-sm uppercase font-medium max-w-[240] text-primary underline-none hover:underline ">{name}</Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
