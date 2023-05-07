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

  useEffect(() => {
    let result = productsList;
    result = filterSearchTitle(result);
    result = sortDate(result);
    setFilteredProducts(result);
  }, [productsList, sort, searchValue]);

  const searchHandler = ({ target }) => {
    setSearchValue(target.value.trim().toLowerCase());
  };

  const filterSearchTitle = (array) => {
    return array.filter((p) => p.title.toLowerCase().includes(searchValue));
  };

  const sortHandler = ({ target }) => {
    setSort(target.value);
  };

  const sortDate = (array) => {
    let sortedProducts = [...array];
    return sortedProducts.sort((a, b) => {
      if (sort === "latest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
      } else if (sort === "earliest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1;
      }
    });
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
