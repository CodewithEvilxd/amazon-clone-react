import Header from "./Header/Header";
import { useContext } from "react";
import { locationContext } from "./Location/IPAdress";

const ProductDetail = () => {
  const location = useContext(locationContext);
  return (
    <div>
      <div>
        <Header />
      </div>
      <section className="grid grid-cols-3">
        <div><img src="https://images-na.ssl-images-amazon.com/images/I/71dshJVfqhL._AC_UL232_SR232,232_.jpg" /></div>
        <div className="text-black">
          <h2>Lorem autem velit vel laboriosam ducimus distinctio nihil iste commodi, omnis sunt quam fugit impedit ad earum!</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam deserunt aspernatur impedit</p>
          <p>Rating</p>
          <p>2k bought in 5 months</p>

          <div>
            <div className="bg-red-700  text-md">Deal</div>
            <div><span className="text-red-600">discount</span><span>Price $</span></div>
            <div>Typical price "$20"</div>
            <div><img src={location.flag} /><span className="text-black">{location.country}</span></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
