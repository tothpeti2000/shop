import Rating from "./IRating";

interface IProduct {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: Rating;
  title: string;
}

export default IProduct;
