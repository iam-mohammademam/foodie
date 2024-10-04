import { useState } from "react";
import image from "../assets/Durbar_Bangla_at_kuet.jpg";
import DishDetails from "./dishDetails";

const FoodCard = () => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <>
      {showDetails && (
        <div
          onClick={() => {
            setShowDetails(false);
          }}
          className="fixed top-0 left-0 w-full h-full bg-slate-700/40 z-[55]"
        ></div>
      )}
      <div
        onClick={() => {
          setShowDetails(true);
        }}
        className="relative p-3 h-36 border rounded-md flex items-center gap-3 hover:bg-theme/5 hover:scale-[1.02] transition-all duration-200 ease-in"
      >
        <div className="w-1/3 h-full shrink-0 overflow-hidden rounded-md bg-gray-700">
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="w-full">
          <h1 className="text-lg font-medium capitalize">Chicken curry</h1>
          <div className="flex items-center gap-3">
            <span className="font-medium text-theme/80">Tk90</span>
            <span className="text-sm text-gray-700 line-through">Tk120</span>
          </div>
          <p className="text-gray-700 text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div
          onClick={() => {
            console.log("clicked");
          }}
          className="absolute bottom-4 right-4 h-9 w-9 bg-slate-200 flex items-center justify-center rounded-full cursor-pointer"
        >
          <i className="bi bi-plus text-2xl "></i>
        </div>
      </div>
      {showDetails && (
        <div className="w-2/5 border shadow-md fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg overflow-hidden bg-white z-[60]">
          <DishDetails setShowDetails={setShowDetails} />
        </div>
      )}
    </>
  );
};

export default FoodCard;
