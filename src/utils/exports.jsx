/* eslint-disable react/prop-types */
export const baseName = "/foodie";

export const CloseBtn = ({ setShowForm }) => {
  return (
    <>
      <span
        onClick={() => {
          setShowForm("");
        }}
        className="absolute top-2 shadow-md hover:scale-[1.02] ease-in cursor-pointer right-2 flex items-center justify-center w-9 h-9 border rounded-full"
      >
        <i className="bi bi-x-lg text-sm"></i>
      </span>
    </>
  );
};
export const SubmitBtn = ({ text }) => {
  return (
    <>
      <button
        type="submit"
        className="text-center hover:scale-[1.02] duration-200 p-2 rounded-md border bg-theme text-white"
      >
        {text}
      </button>
    </>
  );
};
export const InputField = ({ type, placeholder }) => {
  return (
    <>
      <input
        type={type}
        className="placeholder-gray-700 w-full py-1.5"
        placeholder={placeholder}
      />
    </>
  );
};
