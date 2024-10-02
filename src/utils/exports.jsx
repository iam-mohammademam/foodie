export const closeBtn = () => {
  return (
    <>
      <span className="absolute top-2 shadow-md hover:scale-[1.02] ease-in cursor-pointer right-2 flex items-center justify-center w-9 h-9 border rounded-full">
        <i className="bi bi-x-lg text-sm"></i>
      </span>
    </>
  );
};
export const submitBtn = (text) => {
  return (
    <>
      <li className="text-center hover:scale-[1.02] cursor-pointer p-2 rounded-md border bg-theme text-white mt-2.5">
        {text}
      </li>
    </>
  );
};
export const inputField = (type, placeholder) => {
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
