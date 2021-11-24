import React, { createContext, FC, useContext, useState } from "react";
import ICartItem from "./interfaces/ICartItem";
import IProduct from "./interfaces/IProduct";

const useOrderItemContextValue = () => {
  const [orderItems, setOrderItems] = useState<ICartItem[]>([]);

  const AddItem = (id: number, title: string, price: number) => {
    const item: ICartItem = {
      id: id,
      title: title,
      price: price,
    };

    setOrderItems([...orderItems, item]);
  };

  const DeleteItem = (id: number) => {
    let idx: number = 0;

    for (let i = 0; i < orderItems.length; i++) {
      if (orderItems[i].id == id) {
        idx = i;
      }
    }

    let newOrderItems = [...orderItems];
    newOrderItems.splice(idx, 1);

    setOrderItems(newOrderItems);
  };

  return {
    orderItems,
    AddItem,
    DeleteItem,
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
