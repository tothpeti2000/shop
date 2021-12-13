import Rating from "./IRating";

interface IProduct {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: Rating;
  title: string;
  quantity: number;
}

export default IProduct;
