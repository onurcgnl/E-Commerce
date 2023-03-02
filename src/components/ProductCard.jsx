import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { productsActionDetail } from "../redux/actions/products"
import {productsCard} from "../redux/actions/card"

export const ProductCard = ({prd}) => {
  
  return (
      <div className=' hover:border-indigo-600 w-1/5 h-[350px] border rounded-lg m-2 flex flex-col items-center p-1 space-y-2  bg-white'>
          <img onClick={()=> window.location=`detail/${prd.id}`} className=' h-32 object-cover' src={prd?.image}></img>
          <div className='font-bold h-16 text-center mt-2 text-black'>{(prd?.title).substring(0, 35)}...</div>
          <div className='text-center opacity-70 text-sm text-black'>{(prd?.description).substring(0, 55)}...</div>
          <div className='font-bold text-lg text-black'>{prd?.price} TL</div>
          <button onClick={()=> window.location=`detail/${prd.id}`} className='bg-add-btn-color w-full p-2 rounded-lg text-white'>Go To Details</button>


    </div>
  )
}
