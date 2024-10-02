import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/breadcrumb";
import Card from "../../components/card";

const City = () => {
  const { cityName } = useParams();

  return (
    <>
      <div className="mt-20 px-[5%]">
        <Breadcrumb param1={"city"} param2={cityName} />
        <div className="grid grid-cols-4 gap-5 my-6">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};

export default City;
