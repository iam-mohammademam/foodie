import { useEffect, useState } from "react";

const Header = () => {
  const [isDark, setIsDark] = useState(false);

  const handleTheme = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    console.log(isDark);
  }, [isDark]);

  return (
    <div className="py-3 px-[5%] flex items-center justify-between fixed top-0 left-0 w-screen z-50 bg-white">
      {/* logo */}
      <span className="text-3xl font-bold text-theme">Foodpanda</span>

      {/* tools */}
      <div className="flex gap-3 items-center">
        <div className="flex items-center gap-3">
          <button className="border-2 rounded-md w-fit py-0.5 px-2.5 hover:bg-gray-50 transition-all duration-300">
            Log in
          </button>
          <button className="bg-theme text-white rounded-md w-fit py-0.5 px-2.5 hover:py-1.5 hover:px-3 transition-all duration-300">
            Sign up
          </button>
          {/* cart icon */}
          <span className="cursor-pointer text-xl ml-5">
            <i className="bi bi-basket2"></i>
          </span>
          {/* isDark toggler */}
          <span
            onClick={handleTheme}
            className="cursor-pointer text-white text-lg w-8 h-8 hover:bg-gray-800 bg-gray-700 transition-all duration-300 rounded-full mr-1 flex items-center justify-center"
          >
            {isDark ? (
              <i className="bi bi-moon"></i>
            ) : (
              <i className="bi bi-sun"></i>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
