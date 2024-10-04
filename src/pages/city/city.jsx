import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/breadcrumb";
import RestaurantCard from "../../components/restaurantCard";

const City = () => {
  const { cityName } = useParams();

  return (
    <>
      <div className="mt-20 px-[5%]">
        <Breadcrumb param2={cityName} />
        <h1 className="text-4xl font-semibold text-gray-800 mb-6 mt-2">
          Popular restaurants in {cityName}
        </h1>
        <div className="grid grid-cols-4 gap-5 my-6">
          <RestaurantCard />
        </div>
      </div>
    </>
  );
};

export default City;
