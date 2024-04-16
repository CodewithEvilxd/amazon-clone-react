import { Card, Carousel, CarouselCategory, Header } from '../index';
import "./home.css";
import "../../index.css";
// import { v4 as uuidv4 } from uuid;
import Product from '../Product';



const Home = () => {
  return (
    <div className='relative'>
      <section className='min-w-1000 max-w-1500 m-auto sticky top-0 z-[999999]'>
        <Header />
      </section>
      <Carousel />
      <section className='grid gap-5 m-4 grid-cols-3 xl:grid-cols-4 -mt-80 relative z-50 mb-6'>
        <div><Card title="Toys under $25" img={"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v3._SY304_CB573698005_.jpg"} link="Shop now" imgNumber={1} /></div>

        <div><Card title="Gaming Assesories" img={{ img1: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mouse_1x._SY116_CB667159063_.jpg", img2: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg", img3: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg", img4: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Chair_1x._SY116_CB667159060_.jpg", headset: "Headsets", keyboard: "Keyboard", mice: "Computer mice", chairs: "Chairs" }} link="Shop now" imgNumber={4} /></div>

        <div><Card title="Toys under $25" img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v1._SY304_CB573698005_.jpg" link="Shop now" imgNumber={1} /></div>


        <div><Card title="Toys under $25" img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v2._SY304_CB573698005_.jpg" link="Shop now" imgNumber={1} /></div>

        <div><Card title="Toys under $25" img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v4._SY304_CB573698005_.jpg" link="Shop now" imgNumber={1} /></div>

        <div><Card title="Toys under $25" img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v5._SY304_CB573698005_.jpg" link="Shop now" imgNumber={1} /></div>


        <div><Card title="Toys under $25" img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v7._SY304_CB573698005_.jpg" link="Shop now" imgNumber={1} /></div>

        <div><Card title="Shop deals in fashion" img={{ img1: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_BOTTOMS_1x._SY116_CB624172947_.jpg", img2: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_TOPS_1x._SY116_CB623353881_.jpg", img3: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_DRESSES_1x._SY116_CB623353881_.jpg", img4: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_SHOES_1x._SY116_CB624172947_.jpg", headset: "Headsets", keyboard: "Keyboard", mice: "Computer mice", chairs: "Chairs" }} link="Shop now" imgNumber={4} /></div>

        <div className='xl:hidden'><Product title=" EMERGENCY FIRE BLANKET" description="Prepared Hero Emergency Fire Blanket - 4 Pack - Fire Suppression Blanket for Kitchen, 40” x 40” Fire Blanket for Home, Fiberglass Fire Blanket" imgUrl="https://m.media-amazon.com/images/I/91pRqzzKSwL.__AC_SY300_SX300_QL70_FMwebp_.jpg" price={20} rating={4} /></div>

      </section>
      <section>
        <CarouselCategory />
      </section>
      <section className='grid gap-5 m-4 grid-cols-3 xl:grid-cols-4 mb-6'>
        <div><Product title=" EMERGENCY FIRE BLANKET" description="Prepared Hero Emergency Fire Blanket - 4 Pack - Fire Suppression Blanket for Kitchen, 40” x 40” Fire Blanket for Home, Fiberglass Fire Blanket" imgUrl="https://m.media-amazon.com/images/I/91pRqzzKSwL.__AC_SY300_SX300_QL70_FMwebp_.jpg" price={20.12} rating={4} id={1} /></div>
        <div><Product title=" HotHands Hand Warmer" description="HotHands Hand Warmer Value Pack( 10 count)" imgUrl="https://m.media-amazon.com/images/I/610GhgA90CL.__AC_SX300_SY300_QL70_FMwebp_.jpg" price={6.99} rating={3} id={2} /></div>
        <div><Product title="Sceptre 24-inch" description="Sceptre 24-inch Professional Thin 1080p LED Monitor 99% sRGB 2x HDMI VGA Build-in Speakers, Machine Black (E248W-19203R Series) Professional Thin 1080p LED Monitor 99% sRGB 2x HDMI VGA Build-in Speakers, Machine Black (E248W-19203R Series)" imgUrl="https://m.media-amazon.com/images/I/81zM2vVM+wL._AC_SX679_.jpg" price={89} rating={4} id={3} /></div>
        <div><Product title=" Queen Womens Flannel Jacket" description="Trendy Queen Womens Flannel Shacket Jacket Casual Plaid Wool Blend Button Down Long Sleeve Shirt Fall Clothes Outfits 2023" imgUrl="https://m.media-amazon.com/images/I/61MQqc51uOL._AC_SY445_.jpg" price={28.65} rating={4} id={4} /></div>
      </section>
    </div >
  );
};

export default Home;
