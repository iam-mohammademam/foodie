import heroImage from "../../assets/refresh-hero-home-bd.webp";
import vendorImage from "../../assets/home-vendor-bd.webp";
import Location from "./location";
import MobileApp from "./mobileapp";

const Home = () => {
  return (
    <>
      <div className="w-screen h-[90vh] px-[5%] bg-gray-100 relative flex items-center">
        <div className="">
          <h1 className="font-semibold text-5xl font-[kanit]">
            It&apos;s the food and groceries you love, <br />
            delivered
          </h1>
          <div className="flex items-center gap-4 p-3 mt-3 rounded-2xl bg-white w-fit">
            <div className="flex items-center border border-black/70 rounded-xl p-2.5 h-12">
              <input
                type="search"
                className=""
                placeholder="Your street,postal code"
              />
              <span className="cursor-pointer flex items-center gap-2 whitespace-nowrap font-semibold text-theme hover:text-theme transition-all duration-200">
                <i className="bi bi-crosshair text-xl "></i>
                Locate me
              </span>
            </div>
            <button className="h-12 w-fit rounded-xl px-3 text-lg bg-theme hover:scale-105 transition-all duration-300 text-white font-medium">
              Find food
            </button>
          </div>
        </div>
        <img
          src={heroImage}
          alt=""
          className="absolute bottom-0 -right-[18%] w-2/3"
        />
      </div>
      {/* vendor */}
      <div className="mt-20 pb-14 relative">
        <h1 className="text-4xl font-semibold font-[kanit] ml-[5%] mb-6">
          You prepare the food,we handle the rest
        </h1>
        <div className="h-[50vh] w-screen overflow-hidden">
          <img
            src={vendorImage}
            alt=""
            className="w-full h-full object-center object-cover"
          />
        </div>
        <div className="absolute -bottom-0 shadow-lg w-2/4 left-[5%] rounded-2xl bg-white p-5">
          <h1 className="text-2xl font-semibold mb-4">
            List your restaurant or shop on foodpanda
          </h1>
          <p className="font-medium text-lg text-gray-600">
            Would you like millions of new customers to enjoy your amazing food
            and groceries? So would we!
          </p>
          <p className="font-medium text-lg text-gray-600 my-4">
            It&apos;s simple: we list your menu and product lists online, help
            you process orders, pick them up, and deliver them to hungry pandas
            – in a heartbeat!
          </p>

          <p className="font-medium text-lg text-gray-600">
            Interested? Let&apos;s start our partnership today!
          </p>

          <button className="h-12 mt-6 w-fit text-sm rounded-xl px-3 text-lg bg-theme hover:scale-105 transition-all duration-300 text-white font-medium">
            Get started
          </button>
        </div>
      </div>
      <Location />
      <MobileApp />
    </>
  );
};

export default Home;
