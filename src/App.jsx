import { useState } from "react";
import Category from "./components/Category";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import ProductList from "./components/ProductList";


function App() {
  const [categoryList, setCategoryList] = useState([]);
  const [productsList, setProductsList] = useState([]);

  return (
    <div className="bg-slate-800 min-h-screen">
      <Navbar />
      <div className="container max-w-screen-sm mx-auto p-4">
        <Category setCategoryList={setCategoryList} />
        <Products categoryList={categoryList} setProductsList={setProductsList}/>
        <ProductList productsList={productsList}/>
      </div>
    </div>
  );
}

export default App;
