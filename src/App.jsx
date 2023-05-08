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
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    let result = productsList;
    result = filterSearchTitle(result);
    result = filterSelectedCategory(result);
    result = sortDate(result);
    setFilteredProducts(result);
  }, [productsList, sort, searchValue, selectedCategory]);

  useEffect(() => {
    const savedProducts =
      JSON.parse(localStorage.getItem("productsList")) || [];
    const savedCategories =
      JSON.parse(localStorage.getItem("categoryList")) || [];
    setProductsList(savedProducts);
    setCategoryList(savedCategories);
  }, []);

  useEffect(() => {
    if (productsList.length) {
      localStorage.setItem("productsList", JSON.stringify(productsList));
    }
  }, [productsList]);

  useEffect(() => {
    if (categoryList.length) {
      localStorage.setItem("categoryList", JSON.stringify(categoryList));
    }
  }, [categoryList]);

  const searchHandler = ({ target }) => {
    setSearchValue(target.value.trim().toLowerCase());
  };

  const filterSearchTitle = (array) => {
    return array.filter((p) => p.title.toLowerCase().includes(searchValue));
  };

  const sortHandler = ({ target }) => {
    setSort(target.value);
  };

  const selectedCategoryHandler = ({ target }) => {
    setSelectedCategory(target.value);
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

  const filterSelectedCategory = (array) => {
    if (!selectedCategory) return array;
    return array.filter((item) => item.categoryId === selectedCategory);
  };

  return (
    <div className="bg-slate-800 min-h-screen">
      <Navbar productsList={productsList} />
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
          categoryList={categoryList}
          selectedCategory={selectedCategory}
          onSelectedCategory={selectedCategoryHandler}
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
