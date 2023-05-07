import { useState } from "react";

const Filter = ({ productsList , setFilteredProducts }) => {
  const [sort, setSort] = useState("latest");
  const [searchValue, setSearchValue] = useState();

  const searchHandler = ({ target }) => {
    const value = target.value.trim().toLowerCase();
    const filteredProducts = productsList.filter((p) =>
      p.title.toLowerCase().includes(value)
    );
    setFilteredProducts(filteredProducts);
  };

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <label htmlFor="search" className="text-slate-500 text-lg">
          Search
        </label>
        <input
          type="text"
          name="search-inpt"
          className="bg-transparent rounded-xl border border-slate-500 text-slate-500"
          value={searchValue}
          onChange={searchHandler}
        />
      </div>
      <div className="flex items-center justify-between mb-6">
        <label htmlFor="sort-product" className="text-slate-500 text-lg">
          Sort
        </label>
        <select
          name="sort-product"
          className="bg-transparent text-slate-400 rounded-xl "
          value={sort}
          onChange={searchHandler}>
          <option value="" className="text-slate-300 bg-slate-500 ">
            Select a Category
          </option>
          <option value="latest" className="text-slate-300 bg-slate-500 ">
            latest
          </option>
          <option value="earliest" className="text-slate-300 bg-slate-500 ">
            earliest
          </option>
        </select>
      </div>
    </>
  );
};

export default Filter;
