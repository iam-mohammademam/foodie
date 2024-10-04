/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { baseName } from "../utils/exports";

const CityCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        onClick={() => {
          navigate(`${baseName}/city/${item.title}`);
        }}
        className="relative rounded-md overflow-hidden cursor-pointer h-48"
      >
        <img
          src={item.image}
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute bottom-4 left-4 bg-white rounded-lg px-3 py-1.5">
          <span className="text-lg font-semibold capitalize">{item.title}</span>
        </div>
      </div>
    </>
  );
};
export default CityCard;
