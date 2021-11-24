import React, { createContext, FC, useContext, useState } from "react";
import IProduct from "./interfaces/IProduct";

const useProductListContextValue = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [allProducts, setAllProducts] = useState<IProduct[]>([]);
  const [sortedAllProducts, setSortedAllProducts] = useState<IProduct[]>([]);
  let filterType = "all";
  let sortType = "none";

  const InitProducts = (products: IProduct[]) => {
    setProducts(products);
    setAllProducts(products);
    setSortedAllProducts(products);
  };

  const SortProducts = () => {
    let sortedProducts = [...allProducts];

    if (sortType === "priceLTH") {
      sortedProducts.sort((p1, p2) => {
        return p1.price - p2.price;
      });
    }

    if (sortType === "priceHTL") {
      sortedProducts.sort((p1, p2) => {
        return p2.price - p1.price;
      });
    }

    if (sortType === "nameAZ") {
      sortedProducts.sort((p1, p2) => {
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
      sortedProducts.sort((p1, p2) => {
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

    setSortedAllProducts(sortedProducts);
    FilterProducts();
  };

  const FilterProducts = () => {
    let filteredProducts = [...sortedAllProducts];

    if (filterType != "all") {
      filteredProducts = filteredProducts.filter(
        (p) => p.category === filterType
      );
    }

    console.log(filteredProducts);

    setProducts(filteredProducts);
  };

  const UpdateSortType = (type: string) => {
    sortType = type;
    SortProducts();
  };

  const UpdateFilterType = (type: string) => {
    filterType = type;
    SortProducts();
  };

  return {
    products,
    InitProducts,
    SortProducts,
    FilterProducts,
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
