import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { removeCart } from "../redux/actions/card";
import { removeAll } from "../redux/actions/card";



export const Card = () => {
  const dispatch = useDispatch();
  const { cardItems } = useSelector((state) => state.card);
  console.log(cardItems);
  
  const deleteCard = (id) => {
    dispatch(removeCart(id))
  }
 
  return (
    <div className="w-1/3 h-full border fixed top-0 right-0 z-50 bg-white p-3">
      <div className="flex items-start h-20 justify-between">
        <h1 className="text-2xl">Sepetim:</h1>
      
        <AiOutlineClose
          onClick={() => dispatch({ type: "DRAWER", payload: false })}
          size={25}
          className="cursor-pointer"
        />
        
      </div>
      {cardItems?.map((card, i) => (
        <div
          key={i}
          className="h-28 flex items-center justify-between py-4 mt-5"
        >
          <img className="h-24" src={card?.image} alt="" />
          <div className="w-44">
            <div className="font-bold text-sm">
              {card?.title} 
              <p className=" text-red-500">Quantity: {card?.qty}{" "}</p>
            </div>
          </div>
          <div className="font-bold text-lg">
            <p className="text-sm text-center">Fiyat</p>
            { card?.qty * card?.price}TL</div>
          <div onClick={()=> deleteCard(card.id)} className="bg-red-500 w-20 p-2 text-center text-white rounded-lg cursor-pointer">
            Sil
          </div>
        </div>
      ))}
      <h1 className=" text-red-600 text-xl"> Total: {cardItems.reduce((prd, card) => prd + card.qty * card.price, 0).toFixed(2)} TL</h1>
      
      
    </div>
  );
};
