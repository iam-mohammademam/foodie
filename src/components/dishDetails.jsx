/* eslint-disable react/prop-types */
import { useState } from "react";
import { SubmitBtn } from "../utils/exports";

const DishDetails = ({ setShowDetails, item }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <div className="flex flex-col max-h-[80vh] overflow-y-scroll pb-28">
        <span
          onClick={() => {
            setShowDetails("");
          }}
          className="absolute top-3 shadow-md hover:opacity-80 bg-white duration-200 ease-in cursor-pointer right-3 flex items-center justify-center w-8 h-8 border rounded-full"
        >
          <i className="bi bi-x-lg text-sm"></i>
        </span>
        {/* top bar */}
        <div className="w-full shrink-0 h-60 overflow-hidden">
          <img
            src={item?.img}
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="px-3 pt-4">
          <div className="border-b pb-3">
            <h1 className="text-xl font-semibold capitalize">{item?.title}</h1>
            <div className="flex items-center">
              <span className="font-semibold text-theme text-lg">
                Tk {item?.price}
              </span>
              <span className="text-gray-600 line-through ml-3">200 tk</span>
            </div>
            <p className="text-gray-800 capitalize mt-2">1 plate</p>
            <br />
            <span className="text-gray-600">{item?.desc}</span>
          </div>
          <br />
          <div className="">
            <h1 className="font-semibold text-gray-700 text-lg mb-2">
              Special instructions
            </h1>

            <textarea
              placeholder="e.g no salad"
              className="w-full h-20 border rounded-md outline-none resize-none px-2 py-0.5 text-gray-700"
            ></textarea>
          </div>
          {/* bottom bar */}
          <div className="border-t py-3 px-2 flex gap-5 items-center justify-between fixed bottom-0 left-0 w-full bg-white">
            <ul className="flex items-center gap-3 w-fit shrink-0">
              <li
                onClick={() => {
                  if (quantity > 1) {
                    setQuantity(quantity - 1);
                  }
                }}
                className="flex items-center justify-center h-9 w-9 hover:bg-theme/10 duration-200 rounded-full border cursor-pointer"
              >
                <i className="bi bi-dash-lg"></i>
              </li>
              <li className="text-lg">{quantity}</li>
              <li
                onClick={() => {
                  if (quantity < 10) {
                    setQuantity(quantity + 1);
                  }
                }}
                className="flex items-center justify-center h-9 w-9 hover:bg-theme/10 duration-200 rounded-full border cursor-pointer"
              >
                <i className="bi bi-plus-lg"></i>
              </li>
            </ul>
            <div className="w-full">
              <SubmitBtn text={"Add to cart"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DishDetails;
