/* eslint-disable react/prop-types */
import { CloseBtn, InputField, SubmitBtn } from "../utils/exports";

const Signup = ({ setShowForm }) => {
  return (
    <>
      <div className="relative p-10">
        <CloseBtn setShowForm={setShowForm} />
        <div
          onClick={() => setShowForm("method")}
          className="absolute top-2 left-2 cursor-pointer h-8 w-8 flex items-center justify-center rounded-full hover:bg-gray-100 hover:shadow-sm"
        >
          <i className="bi bi-arrow-left"></i>
        </div>
        <h1 className="text-2xl font-semibold text-center">Thanks!</h1>
        <p className="mb-5 text-center">For joining us.</p>
        <ul className="flex flex-col gap-y-2">
          <li className="flex items-center gap-2 border rounded-md px-2 ">
            <i className="bi bi-person shrink-0"></i>
            <InputField type={"text"} placeholder={"Jhon Doe"} />
          </li>
          <li className="flex items-center gap-2 border rounded-md px-2 ">
            <i className="bi bi-envelope shrink-0"></i>
            <InputField type={"email"} placeholder={"example@gmail.com"} />
          </li>
          <li className="flex items-center gap-2 border rounded-md px-2 ">
            <i className="bi bi-shield-lock shrink-0"></i>
            <InputField type={"password"} placeholder={"123456"} />
          </li>

          <li className="flex items-center mr-auto gap-2">
            <input type="checkbox" className="accent-black" />
            <span className="whitespace-nowrap text-gray-800 text-sm">
              I accept <span className="underline">terms and conditions.</span>
            </span>
          </li>
          <SubmitBtn text={"Continue"} />
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
