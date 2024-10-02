/* eslint-disable react/prop-types */
// eslint-disable-next-line react-refresh/only-export-components

import { closeBtn, submitBtn } from "../utils/exports";

const LoginMethod = ({ setShowForm }) => {
  return (
    <>
      <div className="relative p-5">
        {closeBtn()}
        {/* <h1 className="text-2xl font-semibold">Welcome!</h1>
        <p className="">Sign up or Log in to continue.</p> */}
        <ul className="mt-7">
          <li className="flex items-center justify-center hover:scale-[1.02] transition-all duration-200 gap-2 cursor-pointer p-2 rounded-md border w-2/3 mx-auto bg-blue-700 text-white">
            <i className="bi bi-facebook"></i>
            <span className="">Continue with facebook</span>
          </li>
          <li className="my-2.5 flex items-center justify-center hover:scale-[1.02] transition-all duration-200 gap-2 cursor-pointer p-2 rounded-md border w-2/3 mx-auto">
            <i className="bi bi-google"></i>
            <span className="">Continue with google</span>
          </li>
          <li className="flex items-center justify-center hover:scale-[1.02] transition-all duration-200 gap-2 cursor-pointer p-2 rounded-md border w-2/3 mx-auto bg-[#249ad7] text-white">
            <i className="bi bi-telegram"></i>
            <span className="">Continue with telegram</span>
          </li>
        </ul>
        <p className="text-center my-4 font-medium">or</p>

        <div
          onClick={() => setShowForm("signup")}
          className="w-2/3 mx-auto text-center hover:scale-[1.02] hover:bg-gray-100 cursor-pointer p-2 rounded-md border  mt-2.5"
        >
          Sign up
        </div>
        <div onClick={() => setShowForm("login")} className="w-2/3 mx-auto">
          {submitBtn("Log in")}
        </div>

        <p className="text-sm mt-4">
          By signing up, you agree to our{" "}
          <span className="text-theme cursor-pointer">
            Terms and Conditions
          </span>{" "}
          and <span className="text-theme cursor-pointer">Privacy Policy</span>
        </p>
      </div>
    </>
  );
};
export default LoginMethod;
