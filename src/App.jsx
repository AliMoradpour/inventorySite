import { useState } from "react";
import Category from "./components/Category";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import ProductList from "./components/ProductList";
import Filter from "./components/Filter";

function App() {
  const [categoryList, setCategoryList] = useState([]);
  const [productsList, setProductsList] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  return (
    <div className="bg-slate-800 min-h-screen">
      <Navbar />
      <div className="container max-w-screen-sm mx-auto p-4">
        <Category setCategoryList={setCategoryList} />
        <Products
          categoryList={categoryList}
          setProductsList={setProductsList}
        />
        <Filter productsList={productsList} setFilteredProducts={setFilteredProducts}/>
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
