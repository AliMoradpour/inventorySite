import { useState } from "react";

const Products = ({ categoryList }) => {
  const [productsForm, setProductsForm] = useState({
    title: "",
    quantity: 0,
    categoryId: "",
  });

  const [productsList, setProductsList] = useState([]);

  const changeHandler = ({ target }) => {
    const { name, value } = target;
    setProductsForm({ ...productsForm, [name]: value });
  };

  const addNewProduct = (e) => {
    e.preventDefault();
    setProductsList((prevState) => [
      ...prevState,
      { ...productsForm, CreatedAt: new Date().toISOString() },
    ]);
    setProductsForm({ title: "", quantity: 0, categoryId: "" });
  };

  return (
    <section>
      <div className="mb-6" id="category-wrapper">
        <h2 className="text-xl text-slate-300 font-bold mb-2">
          Add New Product
        </h2>
        <form className="bg-slate-700 p-4 rounded-xl flex flex-col gap-y-4">
          <div>
            <label htmlFor="title" className="block mb-1 text-slate-400">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={productsForm.title}
              onChange={changeHandler}
              className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full md:w-auto"
            />
          </div>
          <div>
            <label htmlFor="title" className="block mb-1 text-slate-400">
              Quantity
            </label>
            <input
              type="number"
              name="quantity"
              value={productsForm.quantity}
              onChange={changeHandler}
              className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full md:w-auto"
            />
          </div>
          <div>
            <label htmlFor="description" className="block mb-1 text-slate-400">
              Category
            </label>
            <select
              name="categoryId"
              value={productsForm.categoryId}
              onChange={changeHandler}
              className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-auto md:w-full">
              <option className="bg-slate-500 text-slate-500" value="">
                Select a Category
              </option>
              {categoryList.map((category) => (
                <option
                  key={category.id}
                  className="bg-slate-500 text-slate-300"
                  value={category.id}>
                  {category.title}
                </option>
              ))}
            </select>
          </div>
          <button
            className=" bg-slate-500 p-3 rounded-xl text-slate-300"
            onClick={addNewProduct}>
            Add New Product
          </button>
        </form>
      </div>
    </section>
  );
};

export default Products;
