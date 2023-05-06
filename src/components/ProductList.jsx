const ProductList = ({ productsList }) => {
  return (
    <div>
      <h2 className="text-center text-slate-400 font-bold text-xl my-8 ">-- Product List --</h2>
      {productsList.map((product) => (
        <div key={product.id} className="flex items-center justify-between mb-2 w-full min-w-[400px]">
          <span className="text-slate-400">{product.title}</span>
          <div className="flex items-center gap-x-3">
            <span className="text-slate-400">
              {new Date().toLocaleDateString("fa-IR")}
            </span>
            <span className="block px-3 py-0.5 text-slate-400 border border-slate-400 text-sm rounded-2xl">
              {product.categoryId}
            </span>
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-500 border-2 border-slate-300 text-slate-300">
              {product.quantity}
            </span>
            <button className="border border-red-400 px-2 py-0.5 rounded-2xl text-slate-400">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
