import { Link } from "react-router-dom";
import "./card.css";

const Card = ({ title, link, img, imgNumber }) => {


  return (
    <>
      {imgNumber === 1 ?
        <div className=" text-black bg-white p-2">
          <div className="text-lg xl:text-xl font-semibold mt-4 ml-4 object-cover">{title}</div>
          <div className="h-80 m-4"><img src={img} className="h-full w-full" /></div>
          <div className="text-xs xl:text-sm text-blue-500 ml-4 mb-3 mt-0"><Link to="#">{link}</Link></div>
        </div> :
        <div className="image-card-grid text-black bg-white p-2">
          <div className="text-lg xl:text-xl font-semibold mt-4 ml-4 object-cover">{title}</div>
          <div className="grid grid-cols-2 m-4 h-80 gap-4 grid-4-img">
            <div><img className="h-[120px] w-full object-fill" src={img.img1} /><span className="text-xs grid-text ml-2">{img.headset}</span></div>
            <div><img className="h-[120px] w-full object-fill" src={img.img2} /><span className="text-xs grid-text ml-2">{img.keyboard}</span></div>
            <div><img className="h-[120px] w-full object-fill" src={img.img3} /><span className="text-xs grid-text ml-2">{img.mice}</span></div>
            <div><img className="h-[120px] w-full object-fill" src={img.img4} /><span className="text-xs grid-text ml-2">{img.chairs}</span></div>
          </div>
          <div className="text-xs xl:text-sm text-blue-500 ml-4 mb-3 mt-0"><Link to="#">{link}</Link></div>
        </div>
      }
    </>
  );
};

export default Card;
