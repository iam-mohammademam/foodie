import { useNavigate } from "react-router-dom";
import { baseName } from "../utils/exports";

// eslint-disable-next-line react/prop-types
const Breadcrumb = ({ param1, param2 }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex items-center gap-1">
        <span
          onClick={() => {
            navigate(baseName);
          }}
          className="font-medium cursor-pointer px-1.5 rounded-md hover:bg-gray-100 transition-all duration-200"
        >
          <i className="bi bi-house text-lg"></i>
        </span>
        <i className="bi bi-chevron-right text-xs"></i>
        {param1 && (
          <>
            <span
              onClick={() => {
                navigate(-1);
              }}
              className="capitalize underline cursor-pointer text-gray-700 hover:text-black transition-all duration-200"
            >
              {param1}
            </span>
            <i className="bi bi-chevron-right text-xs"></i>
          </>
        )}
        <span className="capitalize text-gray-700">{param2}</span>
      </div>
    </>
  );
};

export default Breadcrumb;
