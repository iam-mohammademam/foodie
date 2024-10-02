import image from "../assets/Durbar_Bangla_at_kuet.jpg";

const FoodCard = () => {
  return (
    <>
      <div className="relative p-3 h-36 border rounded-md flex items-center gap-3 hover:bg-theme/5 hover:scale-[1.02] transition-all duration-200 ease-in">
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
        <div className="absolute bottom-4 right-4 h-9 w-9 bg-slate-200 flex items-center justify-center rounded-full cursor-pointer">
          <i className="bi bi-plus text-2xl "></i>
        </div>
      </div>
    </>
  );
};

export default FoodCard;
