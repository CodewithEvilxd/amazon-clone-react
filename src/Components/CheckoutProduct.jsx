import React from 'react';
import { useStateContext } from "./StateProvider";

import { TiStarFullOutline } from "react-icons/ti";

const CheckoutProduct = ({ id, price, image, rating, description, title }) => {
  const [{ basket }, dispatch] = useStateContext();


  console.log(id);

  const removeFromBasket = () => {
    // remover from basket
    dispatch({
      type: "remove-from-cart",
      id
    });
  };

  return (
    <div className='flex  text-black mb-4 border-b-2 border-gray-200'>

      <div className='p-8'>
        <div className='w-[150px] cursor-pointer'>
          <img src={`${image}`} alt={title} className='w-full h-full' />
        </div>
      </div>

      <div className='flex-1 p-4'>
        <div className='flex justify-between '>
          <h2 className='text-[1rem] font-medium mr-8'>{title} </h2>
          <h2 className='font-bold'>${price}</h2>
        </div>
        <div className='flex items-center mb-4'>
          <p className='mr-2'>{rating}</p>
          {
            Array(rating).fill().map(() => <p className="text-sm cursor-pointer"><TiStarFullOutline color='FFA41C' fontSize={"18px"} /></p>)
          }
        </div>
        <div className="border-b-2 border-gray-400 ml-2 mr-2 mb-2"></div>
        <div>
          <p className='text-[12px]'>{description}</p>
        </div>
        <button className='bg-amazon-yellow rounded-[4px] p-1 pr-4 pl-4 mt-4 hover:shadow-[1px_1px_5px_#bbb]' onClick={removeFromBasket}>Remove from cart</button>

      </div>
    </div>
  );
};

export default CheckoutProduct;