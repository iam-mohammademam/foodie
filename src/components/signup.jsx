/* eslint-disable react/prop-types */
import { closeBtn, inputField, submitBtn } from "../utils/exports";

const Signup = ({ setShowForm }) => {
  return (
    <>
      <div className="relative p-5">
        {closeBtn()}
        <div
          onClick={() => setShowForm("method")}
          className="absolute top-2 left-2 cursor-pointer h-8 w-8 flex items-center justify-center rounded-full hover:bg-gray-100 hover:shadow-sm"
        >
          <i className="bi bi-arrow-left"></i>
        </div>
        <h1 className="text-2xl font-semibold mb-5 text-center">Thanks!</h1>
        {/* <p className="mb-4">Sign up or Log in to continue.</p> */}
        <ul className="flex flex-col gap-y-2">
          <li className="flex items-center gap-2 border rounded-md px-2 ">
            <i className="bi bi-person text-lg shrink-0"></i>
            {inputField("text", "Jhon Doe")}
          </li>
          <li className="flex items-center gap-2 border rounded-md px-2 ">
            <i className="bi bi-envelope shrink-0"></i>
            {inputField("email", "example@gmail.com")}
          </li>
          <li className="flex items-center gap-2 border rounded-md px-2 ">
            <i className="bi bi-shield-lock shrink-0"></i>
            <input
              type="password"
              className="placeholder-gray-700 w-full py-1.5"
              placeholder="234fs@#$"
            />
          </li>
          <li className="flex items-center mr-auto gap-2">
            <input type="checkbox" className="accent-black" />
            <span className="whitespace-nowrap text-gray-800 text-sm">
              I accept <span className="underline">terms and conditions.</span>
            </span>
          </li>
          {submitBtn("Continue")}
          <span className="text-sm text-gray-700 text-center">
            Already have an account?{"  "}
            <span
              onClick={() => setShowForm("login")}
              className="text-theme underline cursor-pointer"
            >
              Log in
            </span>
          </span>
        </ul>
      </div>
    </>
  );
};
export default Signup;
