import { useState, useEffect } from "react";
import { useStateContext } from "./StateProvider";
import { v4 as uuidv1 } from 'uuid';

const Product = ({ title, description, imgUrl, price, rating, id }) => {

  // const [id, setId] = useState("fff");
  const [{ basket }, dispatch] = useStateContext();
  const [quantity, setQuantity] = useState(0);
  // const idRef = useRef(uuidv1());

  useEffect(() => {
    getQuantity();
  }, [basket]);

  const addToCart = () => {
    const itemIndex = getItemIndex();
    if (itemIndex !== -1) {
      dispatch({
        type: "increase-quantity",
        index: itemIndex,
      });
    } else {
      dispatch({
        type: "add-to-basket",
        item: {
          title, imgUrl, price, rating, description,
          id: id,
          quantity: 1,

        }
      });
    }
    console.log(basket);
  };

  const reduceQuantity = () => {
    const itemIndex = getItemIndex();

    if (itemIndex !== -1) {
      dispatch({
        type: "reduce-quantity",
        index: itemIndex,
      });
    } else {
      console.log("Item not found in basket");
    }
  };

  const getQuantity = () => {
    const item = getOnebyId();
    setQuantity(item ? item.quantity : 0);

    return item;
  };

  const getItemIndex = () => {
    const itemIndex = basket.findIndex((item) => item.id === id);
    return itemIndex;
  };

  const getOnebyId = () => {
    const item = basket.find((item) => item.id === id);
    return item;
  };


  const increaseQuantity = () => {
    const itemIndex = getItemIndex();

    if (itemIndex !== -1) {
      dispatch({
        type: "increase-quantity",
        index: itemIndex,
      });
    } else {
      console.log("Item not found in basket");
    }
  };



  return (
    <div className=" h-full p-4 bg-white cursor-pointer">
      <h5 className="mb-4 text-black text-md font-medium">{title}</h5>
      <div className="h-[250px] flex justify-center">
        <img className="h-full" src={imgUrl} />
      </div>
      <div>
        <div className="h-[44px] overflow-hidden text-black text-sm mt-1">{description}</div>
        <div className="flex justify-between items-center" ><span className="flex ">{
          Array(rating).fill().map(() => <p className="text-sm" key={uuidv1()}>⭐</p>)
        }</span><span className="text-black text-xl font-medium">${price}</span></div>
        <div className="text-center mt-1">
          {quantity === 0 ?
            <button className="bg-amazon-yellow hover:bg-orange-500 text-sm pr-8 pl-8 pt-1 pb-1 bottom-4 text-black rounded-[8px] font-medium " onClick={addToCart} >Add to cart</button>
            :
            <div className="flex gap-[20px] justify-center">
              <button className="bg-amazon-yellow hover:bg-orange-500 text-sm pr-8 pl-8 pt-1 pb-1 bottom-4 text-black rounded-[8px] font-medium " onClick={reduceQuantity}>-</button>
              <p className="text-black flex justify-center items-center w-2">{quantity}</p>
              <button className="bg-amazon-yellow hover:bg-orange-500 text-sm pr-8 pl-8 pt-1 pb-1 bottom-4 text-black rounded-[8px] font-medium " onClick={increaseQuantity}>+</button>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Product;

