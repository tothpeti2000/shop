import React, { createContext, FC, useContext, useState } from "react";
import ICartItem from "./interfaces/ICartItem";

const useOrderItemContextValue = () => {
  const [orderItems, setOrderItems] = useState<ICartItem[]>([]);
  const [total, setTotal] = useState(0);

  const AddItem = (id: number, title: string, price: number) => {
    const items = orderItems.filter((orderItem) => orderItem.id === id);

    if (items.length == 0) {
      const item: ICartItem = { id, title, price, quantity: 1 };

      setOrderItems([...orderItems, item]);
    } else {
      const copy = [...orderItems];
      const idx = copy.indexOf(items[0]);
      copy[idx].quantity++;

      setOrderItems(copy);
    }

    setTotal(FormatSum(total + price));
  };

  const DeleteItem = (id: number) => {
    let idx: number = 0;
    let price = 0;
    let quantity = 1;

    for (let i = 0; i < orderItems.length; i++) {
      if (orderItems[i].id == id) {
        idx = i;
        price = orderItems[i].price;
        quantity = orderItems[i].quantity;
      }
    }

    let newOrderItems = [...orderItems];
    newOrderItems.splice(idx, 1);

    setOrderItems(newOrderItems);
    setTotal(FormatSum(total - quantity * price));
  };

  const GetItemQuantity = (ID: number): number => {
    for (let i = 0; i < orderItems.length; i++) {
      if (orderItems[i].id === ID) {
        return orderItems[i].quantity;
      }
    }

    return 0;
  };

  const UpdateItemQuantity = (ID: number, quantity: number) => {
    let price = 0;
    let delta = 0;

    for (let i = 0; i < orderItems.length; i++) {
      if (orderItems[i].id === ID) {
        price = orderItems[i].price;
        delta = quantity - orderItems[i].quantity;

        orderItems[i].quantity = quantity;
      }
    }

    setOrderItems([...orderItems]);
    setTotal(FormatSum(total + delta * price));
  };

  const FormatSum = (sum: number): number => {
    return parseFloat(sum.toFixed(2));
  };

  return {
    orderItems,
    total,
    AddItem,
    DeleteItem,
    UpdateItemQuantity,
    GetItemQuantity,
  };
};

const OrderItemContext = createContext(
  {} as ReturnType<typeof useOrderItemContextValue>
);

const useOrderItemContext = () => useContext(OrderItemContext);

const OrderItemProvider: FC = ({ children }) => {
  return (
    <OrderItemContext.Provider value={useOrderItemContextValue()}>
      {children}
    </OrderItemContext.Provider>
  );
};

export { OrderItemContext, OrderItemProvider, useOrderItemContext };
