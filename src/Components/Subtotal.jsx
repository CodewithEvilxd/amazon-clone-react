import React from 'react';
import { useStateContext } from './StateProvider';
import currency from 'currency.js';

const Subtotal = () => {
  const [{ basket }] = useStateContext();
  const total = basket.reduce((sum, currentSum) => sum + currentSum.price, 0);
  console.log(total);
  const formattedTotal = currency(total).format();

  return (
    <>
      <p className=''>Subtotal ({basket.length} item): <span className='font-bold'>{formattedTotal}</span></p>
      <div className='flex align-middle mt-2'>
        <input type='checkbox' className='mr-2' />
        <span className='text-[14px] sm:text-[10px]'>This order contains a gift</span>
      </div>
      <button className='rounded-[4px] w-full  mt-[20px] bg-amazon-amazonBtnYellow border-gray-300 border-[1px] sm:text-[.8rem] p-2'>Proceed to checkout</button>
    </>
  );
};

export default Subtotal;
