import React, { createContext, FC, useContext, useState } from "react";
import IProduct from "./interfaces/IProduct";

const useProductListContextValue = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [allProducts, setAllProducts] = useState<IProduct[]>([]);

  const InitProducts = (products: IProduct[]) => {
    setProducts(products);
    setAllProducts(products);
    localStorage.setItem("filterType", "all");
    localStorage.setItem("sortType", "none");
  };

  const UpdateProducts = () => {
    const filterType = localStorage.getItem("filterType");
    const sortType = localStorage.getItem("sortType");

    let filtered = [...allProducts].filter(
      (p) => p.category === filterType || filterType === "all"
    );

    if (sortType === "priceLTH") {
      filtered = filtered.sort((p1, p2) => {
        return p1.price - p2.price;
      });
    }

    if (sortType === "priceHTL") {
      filtered = filtered.sort((p1, p2) => {
        return p2.price - p1.price;
      });
    }

    if (sortType === "nameAZ") {
      filtered = filtered.sort((p1, p2) => {
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
      filtered = filtered.sort((p1, p2) => {
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

    setProducts(filtered);
  };

  const UpdateSortType = (type: string) => {
    localStorage.setItem("sortType", type);
    UpdateProducts();
  };

  const UpdateFilterType = (type: string) => {
    localStorage.setItem("filterType", type);
    UpdateProducts();
  };

  return {
    products,
    InitProducts,
    UpdateSortType,
    UpdateFilterType,
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
