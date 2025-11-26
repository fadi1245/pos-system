import React, { useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/product/productSlice";
import { RootState, AppDispatch } from "../app/store";
import { AiOutlineShoppingCart, AiOutlineWarning } from "react-icons/ai";

function ProductPanel() {
  const dispatch = useDispatch<AppDispatch>();

  const { items, loading, nextCursor, error } = useSelector(
    (state: RootState) => state.product
  );

  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    dispatch(fetchProducts({ limit: 20, append: false }));
  }, [dispatch]);

  const handleScroll = useCallback(() => {
    const div = panelRef.current;
    if (!div) return;

    const nearBottom =
      div.scrollHeight - div.scrollTop - div.clientHeight < 50;

      if (nearBottom && nextCursor && !loading) {
        dispatch(fetchProducts({ limit: 20, cursor: nextCursor, append: true }));
      }
      
  }, [nextCursor, loading, dispatch]);

  return (
    <div className="bg-white shadow-md w-full h-[500px] overflow-auto no-scrollbar" ref={panelRef} onScroll={handleScroll}>

      <div className="bg-blue-800 sticky top-0 z-20">
        <p className="text-center py-1 text-white font-bold">Item Details</p>
      </div>

      <div className="grid grid-cols-4 gap-3 px-2 py-3">

        {items.map((product) => (
          <div
            key={product._id}
            className="relative bg-yellow-200 rounded-md p-1 h-[150px] w-40 shadow-md cursor-pointer hover:brightness-95 transition"
          >
            <div className="absolute -top-2 left-2 bg-green-500 text-white text-[12px] px-2 py-px rounded font-semibold shadow">
              {product.price?.toFixed(1)}
            </div>

            <div className="flex flex-col items-center justify-center h-full gap-1">
              <div className="text-orange-700 text-3xl">
                <AiOutlineShoppingCart />
              </div>
              <div className="text-center font-medium px-1 leading-tight">
                {product.name}
              </div>
            </div>

            {product.stock !== undefined && product.stock < 5 && (
              <div className="absolute bottom-0 left-0 right-0 bg-red-500 text-white text-[11px] py-0.5 flex items-center justify-center gap-1">
                <AiOutlineWarning className="text-white text-sm" />
                Low Stock
              </div>
            )}
          </div>
        ))}

      </div>

      {loading && (
        <p className="text-center text-gray-500 py-3">Loading...</p>
      )}

      {error && (
        <p className="text-center text-red-500 py-3">{error}</p>
      )}

    </div>
  );
}

export default ProductPanel;
