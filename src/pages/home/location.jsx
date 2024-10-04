import CityCard from "../../components/cityCard";
import { cityApi } from "../../utils/api";

const Location = () => {
  return (
    <>
      <div className="mt-10 px-[5%]">
        <h1 className="text-4xl font-semibold text-gray-800 mb-6">
          Find us in these cities and many more!
        </h1>
        <div className="grid grid-cols-4 gap-5">
          {cityApi.map((item, index) => (
            <CityCard key={index} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Location;
