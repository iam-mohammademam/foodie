import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/breadcrumb";
import image from "../../assets/Durbar_Bangla_at_kuet.jpg";
import FoodCard from "../../components/foodCard";
import { useEffect, useState } from "react";
import axios from "axios";

const Restaurant = () => {
  const { restaurantName } = useParams();
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/dish/list`);
      setData(res?.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="mt-20 px-[5%]">
        <Breadcrumb param1={"restaurant"} param2={restaurantName} />

        <div className="my-6 border rounded-lg p-3">
          <div className="flex items-center gap-4">
            <div className="w-44 h-44 rounded-md overflow-hidden">
              <img
                src={image}
                alt=""
                className="object-cover object-center h-full w-full"
              />
            </div>
            <div className="">
              <h1 className="text-3xl font-semibold capitalize">Kacchi bhai</h1>
              <ul className="capitalize flex items-center gap-3">
                <li className="">biryani</li>
                <li className="">asian</li>
                <li className="">chinese</li>
                <li className="">desert</li>
              </ul>
              <div className="flex items-center gap-7 mt-5">
                <span className="flex items-center text-sm gap-1.5">
                  <span>
                    <i className="bi bi-star-fill text-xs text-theme/80"></i>2
                  </span>
                  (399+)
                  <span className="font- text-md cursor-pointer">
                    See reviews
                  </span>
                </span>
                <span className="font-medium cursor-pointer hover:bg-theme/40 transition-all duration-300 rounded-md px-3 py-1 flex items-center gap-1">
                  <i className="bi bi-info-circle"></i> More info
                </span>
              </div>
            </div>
          </div>
          <p className="text-gray-700 mt-3 flex items-center gap-3">
            Agrabad,CDA Road no 10,Chittagong
            <span className="cursor-pointer font-medium underline text-theme ml-">
              Open in map
            </span>
          </p>
        </div>
        <div className="mt-6">
          <h1 className="text-2xl font-medium mb-4">Popular items</h1>
          <div className="grid grid-cols-3 gap-5">
            {data?.result?.map((item, index) => (
              <FoodCard item={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Restaurant;
