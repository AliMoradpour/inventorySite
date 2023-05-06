import { useState } from "react";

const Category = () => {
  const [isShow, setIsShow] = useState(false);
  const [categoryForm, setCategoryForm] = useState({
    title: "",
    description: "",
  });

  const changeHandler = ({ target }) => {
    const { name, value } = target;
    setCategoryForm({ ...categoryForm, [name]: value });
  };

  return (
    <section>
      <div className={`mb-6 ${isShow ? "" : "hidden"}`} id="category-wrapper">
        <h2 className="text-xl text-slate-300 font-bold mb-2">
          Add New Category
        </h2>
        <form className="bg-slate-700 p-4 rounded-xl flex flex-col gap-y-4">
          <div>
            <label htmlFor="title" className="block mb-1 text-slate-400">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={categoryForm.title}
              onChange={changeHandler}
              className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full md:w-auto"
            />
          </div>
          <div>
            <label htmlFor="description" className="block mb-1 text-slate-400">
              Description
            </label>
            <textarea
              name="description"
              cols="70"
              rows="4"
              value={categoryForm.description}
              onChange={changeHandler}
              className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full md:w-auto"></textarea>
          </div>
          <div className="w-full md:flex items-center justify-evenly">
            <button
              className="w-1/2 mr-4 border border-slate-400 rounded-xl p-3 text-slate-400"
              onClick={(e) => {
                e.preventDefault();
                setIsShow(false);
              }}>
              Cancel
            </button>
            <button className="w-1/2 ml-4 bg-slate-500 p-3 rounded-xl text-slate-300">
              Add Category
            </button>
          </div>
        </form>
      </div>
      <button
        className={`text-slate-600 text-lg mb-4 font-medium ${
          isShow && "hidden"
        }`}
        onClick={() => setIsShow(!isShow)}>
        Add New Category ?
      </button>
    </section>
  );
};

export default Category;
