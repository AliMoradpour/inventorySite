import { useState } from "react";
import Category from "./components/Category";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

const products = [
  {
    id: 1,
    title: "React.js",
    category: "frontend",
    createdAt: "2023-5-31T15:02:00.411Z",
  },
  {
    id: 2,
    title: "Node.js",
    category: "backend",
    createdAt: "2023-5-31T15:02:00.556Z",
  },
  {
    id: 3,
    title: "Vue.js",
    category: "frontend",
    createdAt: "2023-5-01T10:02:00.889Z",
  },
];

const categories = [
  {
    id: 1,
    title: "frontend",
    description: "frontend of applications",
    createdAt: "2023-5-31T15:02:00.411Z",
  },
  {
    id: 2,
    title: "backend",
    description: "backend of applications",
    createdAt: "2023-5-31T15:02:00.556Z",
  },
];

function App() {
  const [categoryList, setCategoryList] = useState([]);

  return (
    <div className="bg-slate-800 min-h-screen">
      <Navbar />
      <div className="container max-w-screen-sm mx-auto p-4">
        <Category setCategoryList={setCategoryList}/>
        <Products categoryList={categoryList} />
      </div>
    </div>
  );
}

export default App;
