import { useEffect, useState } from "react";
import Category from "./components/Category";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import ProductList from "./components/ProductList";
import Filter from "./components/Filter";

function App() {
  const [categoryList, setCategoryList] = useState([]);
  const [productsList, setProductsList] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sort, setSort] = useState("latest");
  const [searchValue, setSearchValue] = useState();

  useEffect(() => {}, [productsList, sort, searchValue]);

  const searchHandler = ({ target }) => {
    const value = target.value.trim().toLowerCase();
    const filteredProducts = productsList.filter((p) =>
      p.title.toLowerCase().includes(value)
    );
    setFilteredProducts(filteredProducts);
  };

  const sortHandler = ({ target }) => {
    setSort(target.value);
    let sortedProducts = [...productsList];
    sortedProducts.sort((a, b) => {
      if (target.value === "latest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
      } else if (target.value === "earliest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1;
      }
    });
    setFilteredProducts(sortedProducts);
  };

  return (
    <div className="bg-slate-800 min-h-screen">
      <Navbar />
      <div className="container max-w-screen-sm mx-auto p-4">
        <Category setCategoryList={setCategoryList} />
        <Products
          categoryList={categoryList}
          setProductsList={setProductsList}
        />
        <Filter
          onSearch={searchHandler}
          onSort={sortHandler}
          sort={sort}
          searchValue={searchValue}
        />
        <ProductList
          productsList={filteredProducts}
          categoryList={categoryList}
          setProductsList={setProductsList}
        />
      </div>
    </div>
  );
}

export default App;
