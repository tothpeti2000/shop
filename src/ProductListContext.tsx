import React, { createContext, FC, useContext, useState } from "react";
import IProduct from "./interfaces/IProduct";

const useProductListContextValue = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const InitProducts = (products: IProduct[]) => {
    setProducts(products);
  };

  const SortProducts = (sortType: string) => {
    if (sortType.length != 0) {
      let sortedProducts: IProduct[] = [];

      if (sortType === "priceLTH") {
        sortedProducts = [...products].sort((p1, p2) => {
          return p1.price - p2.price;
        });
      }

      if (sortType === "priceHTL") {
        sortedProducts = [...products].sort((p1, p2) => {
          return p2.price - p1.price;
        });
      }

      if (sortType === "nameAZ") {
        sortedProducts = [...products].sort((p1, p2) => {
          const p1Name = p1.title.toLowerCase();
          const p2Name = p2.title.toLowerCase();

          if (p1Name < p2Name) {
            return -1;
          }

          if (p1Name > p2Name) {
            return 1;
          }

          return 0;
        });
      }

      if (sortType === "nameZA") {
        sortedProducts = [...products].sort((p1, p2) => {
          const p1Name = p1.title.toLowerCase();
          const p2Name = p2.title.toLowerCase();

          if (p1Name > p2Name) {
            return -1;
          }

          if (p1Name < p2Name) {
            return 1;
          }

          return 0;
        });
      }

      setProducts(sortedProducts);
    }
  };

  return {
    products,
    InitProducts,
    SortProducts,
  };
};

const ProductListContext = createContext(
  {} as ReturnType<typeof useProductListContextValue>
);

const useProductListContext = () => useContext(ProductListContext);

const ProductListProvider: FC = ({ children }) => {
  return (
    <ProductListContext.Provider value={useProductListContextValue()}>
      {children}
    </ProductListContext.Provider>
  );
};

export { ProductListContext, ProductListProvider, useProductListContext };
