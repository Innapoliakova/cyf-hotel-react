import React, {useState} from "react";
import RestaurantButton from "./RestaurantButton";

const Order = ({ orderType }) => {
  const [orders, setOrders] = useState(0);

  const orderOne = () => {
    setOrders(orders + 1);
  };

  return (
    <ul>
        <li>
          {orderType}: {orders} <RestaurantButton handleClick={orderOne} />
        </li>
      </ul>
  );
};

export default Order

