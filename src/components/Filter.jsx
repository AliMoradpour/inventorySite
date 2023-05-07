const Filter = ({onSort , onSearch , sort , searchValue}) => {




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
          onChange={onSearch}
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
          onChange={onSort}>
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
