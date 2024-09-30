// import { useParams } from "react-router-dom";
import shop from "../assets/Untitled4.jpeg";

const Card = () => {
  return (
    <>
      <div className="w-full overflow-hidden rounded-md border">
        <div className="h-44 overflow-hidden">
          <img
            src={shop}
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="p-2">
          <div className="flex items-center justify-between">
            <h1 className="font-medium text-lg text-gray-700">Kacchi bhai</h1>
            <span className="flex items-center text-sm gap-1.5">
              <span>
                <i className="bi bi-star-fill text-xs text-theme/80"></i>2
              </span>
              (399+)
            </span>
          </div>
          <span className="capitalize text-gray-800 text-sm">biryani</span>
        </div>
      </div>
    </>
  );
};

export default Card;
