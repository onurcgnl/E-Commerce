import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { productsActionDetail } from "../redux/actions/products";
import { productsCard } from "../redux/actions/card";
import { CgMathPlus, CgMathMinus } from "react-icons/cg";
import { useState } from "react";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'
import InnerImageZoom from 'react-inner-image-zoom'

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);
  const [count, setCount] = useState(0);
  const images = product?.image
  const stock = 0
  useEffect(() => {
    dispatch(productsActionDetail(id));
  }, [dispatch]);

  console.log(product);

  const increment = (stock) => {
    if (count <= stock) {
      setCount(count + 1);
    }
  };
  const decrement = (stock) => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const addCard = () => {
    dispatch(productsCard(id, count));
    dispatch({ type: "DRAWER", payload: true });
  };
  return (
    <div className="w-full flex items-center justify-center space-x-5">
   <InnerImageZoom className="w-1/3" src={product?.image} alt={product?.title}/>
      <div className="w-2/3 space-y-5">
        <h1 className="font-bold text-xl">{product?.title}</h1>
        <h2 className="opacity-70 text-xl">{product?.description}</h2>
        <p className="opacity-70 text-xl">Category: {product?.category}</p>
        <p className="fond-bold text-xl">Price: {product?.price} TL</p>
        <div className="flex items center space-x-4">
          <CgMathMinus
            onClick={decrement}
            className="cursor-pointer border rounded-full p-1"
            size={30}
          />
          <span className="text-2xl">{count}</span>
          <CgMathPlus
            onClick={() => increment(product?.rating.count)}
            className="bg-icons-color text-white cursor-pointer border rounded-full p-1"
            size={30}
          />
          {count === 0 ? (
            <span className=" text-rose-500">Please Enter Stock</span>
          ) : null}
        </div>
        
          <button
            onClick={addCard}
            disabled = {count >= 1 ? false : true} 
            className="p-3 w-full bg-add-btn-color text-center rounded-lg text-white text-lg"
          >
            Add To Card
          </button>
      </div>
    </div>
  );
};
export default Detail;
