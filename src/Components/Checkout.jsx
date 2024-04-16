import Header from "./Header/Header";
import { useStateContext } from "./StateProvider";
import { Link } from "react-router-dom";
import CheckoutProduct from "../Components/CheckoutProduct";
import Subtotal from "./Subtotal";

const Checkout = () => {
  const [{ basket }] = useStateContext();
  console.log(basket);

  return (
    <div className="text-black">
      <section className='text-white min-w-1000 max-w-1500 m-auto sticky top-0 z-[999999]'>
        <Header />
      </section>
      <div className="flex">

        {
          basket?.length === 0 ?
            <section className="flex gap-4 bg-white p-4 m-4 text-black w-[70%]">
              <div className="mr-[20px] w-[40%]">
                <img className="w-[95%]" src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg" alt="" />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-[24px] font-bold">Your Amazon Cart is empty</h3>
                <Link to="/" className="text-amazon-amazonLink text-[14px] hover:underline hover:text-red-500 decoration-red-500">Shop today's deals</Link>

                <div className="mt-4 gap-2 flex">
                  <button className="bg-amazon-amazonBtnYellow rounded-[8px] p-[5px] hover:shadow-[0px_0px_7px_#ccc]">Sign in to your account</button>
                  <button className="border-gray-400 border-[1px] shadow-[0px_0px_5px_#ccc] pt-0 pr-[10px] pb-0 pl-[11px] rounded-[8px]">Sign up now</button>
                </div>
              </div>
            </section> :
            <section className="w-[75%] bg-white mt-[30px] ml-[20px] text-black">
              <h2 className="text-black text-[28px] pt-4 pl-2 mb-4 font-normal">Shopping Cart</h2>
              <div className="border-b-2 border-gray-400 ml-2 mr-2 mb-2"></div>
              <section className="">
                {
                  basket.map((item) => {
                    return (
                      <CheckoutProduct id={item.id}
                        title={item.title}
                        image={item.imgUrl}
                        price={item.price}
                        rating={item.rating}
                        description={item.description}
                      />
                    );
                  })
                }

              </section>

            </section>
        }
        {
          basket.length > 0 && (
            <section className="bg-white p-4 m-7 text-black w-[20%] h-[200px]">
              <Subtotal />
            </section>
          )
        }
      </div>
    </div >
  );
};

export default Checkout;