import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/carts/cartSlice";

const ProductCard = ({ product }) => {
  const { id, name, price, image, category, date } = product || {};

  const dispatch = useDispatch() ; 

  const handleAddToCart = () => {
    dispatch(addToCart(product))
  }

  return (
    <div className="card bg-base-100 w-80 shadow-md rounded-lg border border-gray-200 overflow-hidden hover:scale-105 transition-all duration-30 ease-in-out mb-8">
      <figure className="h-48 w-full overflow-hidden">
        <img
          src={image}
          alt="Shoes"
          className="object-contain w-full h-full"
        />
      </figure>

      <div className="card-body bg-white p-4">
        <h2 className="card-title text-gray-800 text-lg font-semibold">{name}</h2>

        <p className="text-gray-600 text-sm">
            High-quality {category || "product"} available at the best price 
        </p>

        <div className="card-actions justify-between items-center mt-4">
        <p className="text-blue-500 font-semibold text-lg">₹ {price}</p>
        <button 
          className="btn btn-primary bg-blue-500 text-white hover:bg-blue-600 cursor-pointer px-4 py-2 text-sm"
          onClick={handleAddToCart}  
        >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
