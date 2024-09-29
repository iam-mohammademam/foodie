import appImg from "../../assets/home-foodpanda-apps.webp";
import qrCode from "../../assets/bdhomepageqrcode.png";

const MobileApp = () => {
  return (
    <>
      <div className="mt-10 px-[5%]">
        <h1 className="text-4xl font-semibold text-gray-800 mb-6">
          Put us in your pocket
        </h1>
        <div className="h-[50vh] text-white w-full bg-theme rounded-3xl relative flex items-center">
          <div className="w-2/4 pl-6">
            <h1 className="text-2xl font-medium mb-6">
              Download the food and groceries you love
            </h1>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg border border-white w-24 shrink-0">
                <img src={qrCode} alt="" className="" />
              </div>

              <span className="text-lg">
                It&apos;s all at your fingertips – the restaurants and shops you
                love. Find the right food and groceries to suit your mood, and
                make the first bite last. Go ahead, download us.
              </span>
            </div>
          </div>
          <img
            src={appImg}
            alt=""
            className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2"
          />
        </div>
      </div>
      <div className="mt-16 px-[5%]">
        <h1 className="text-xl font-medium mb-4">
          Order food from the best restaurants and shops with foodpanda
          Bangladesh
        </h1>
        <span className="text-gray-700">
          Are you hungry? Did you have a long and stressful day? Interested in
          getting a cheesy pizza delivered to your office or looking to avoid
          the weekly shop? Then foodpanda Bangladesh is the right destination
          for you! foodpanda offers you a long and detailed list of the best
          restaurants and shops near you to help make your everyday easier. Our
          online food delivery service has it all, whether you fancy a juicy
          burger from Takeout, fresh sushi from Samdado or peri peri chicken
          from Nando&apos;s, foodpanda Bangladesh has over 2000 restaurants
          available from Dhaka to Chittagong through to Sylhet. Did you know you
          can order your groceries and more from foodpanda, too? Check out
          foodpanda shops for favourite partners like Unimart, Suborno, Shwapno,
          Bengal Meat, and much more. Sit back and relax – let foodpanda
          Bangladesh take the pressure off your shoulders.
        </span>
      </div>
    </>
  );
};

export default MobileApp;
