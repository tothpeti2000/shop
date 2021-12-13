import React, { createContext, FC, useContext, useState } from "react";
import ICartItem from "./interfaces/ICartItem";

const useOrderItemContextValue = () => {
  const [orderItems, setOrderItems] = useState<ICartItem[]>([]);

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

  const GetItemQuantity = (ID: number): number => {
    for (let i = 0; i < orderItems.length; i++) {
      if (orderItems[i].id === ID) {
        return orderItems[i].quantity;
      }
    }

    return 0;
  };

  const UpdateItemQuantity = (ID: number, quantity: number) => {
    for (let i = 0; i < orderItems.length; i++) {
      if (orderItems[i].id === ID) {
        orderItems[i].quantity = quantity;
      }
    }

    setOrderItems([...orderItems]);
  };

  return {
    orderItems,
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
