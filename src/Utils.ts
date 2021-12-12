import ICartItem from "./interfaces/ICartItem";

const GetSum = (orderItems: ICartItem[]) => {
  let sum = 0;

  orderItems.forEach((item) => (sum += item.price * item.quantity));

  return parseFloat(sum.toFixed(2));
};

export default GetSum;
