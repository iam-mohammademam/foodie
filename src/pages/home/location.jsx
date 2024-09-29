import img from "../../assets/Durbar_Bangla_at_kuet.jpg";
const Location = () => {
  return (
    <>
      <div className="mt-10 px-[5%]">
        <h1 className="text-4xl font-semibold text-gray-800 mb-6">
          Find us in these cities and many more!
        </h1>
        <div className="grid grid-cols-4 gap-5">
          <div className="relative rounded-xl overflow-hidden cursor-pointer">
            <img
              src={img}
              alt=""
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute bottom-4 left-4 bg-white rounded-lg px-3 py-1.5">
              <span className="text-lg font-semibold">Noakhali</span>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden cursor-pointer">
            <img
              src={img}
              alt=""
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute bottom-4 left-4 bg-white rounded-lg px-3 py-1.5">
              <span className="text-lg font-semibold">Noakhali</span>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden cursor-pointer">
            <img
              src={img}
              alt=""
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute bottom-4 left-4 bg-white rounded-lg px-3 py-1.5">
              <span className="text-lg font-semibold">Noakhali</span>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden cursor-pointer">
            <img
              src={img}
              alt=""
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute bottom-4 left-4 bg-white rounded-lg px-3 py-1.5">
              <span className="text-lg font-semibold">Noakhali</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Location;
