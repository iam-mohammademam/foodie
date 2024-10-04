// import Card from "./components/restaurantCard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./pages/home/home";
import City from "./pages/city/city";
import Restaurant from "./pages/restaurant/restaurant";
import Login from "./components/login";
import LoginMethod from "./components/loginMethod";
import Signup from "./components/signup";
import { useState } from "react";
import { baseName } from "./utils/exports";

const App = () => {
  const [showForm, setShowForm] = useState("");
  return (
    <>
      <BrowserRouter>
        <Header setShowForm={setShowForm} />
        <Routes>
          <Route path={baseName} index element={<Home />} />
          <Route path={`${baseName}/city/:cityName`} element={<City />} />
          <Route
            path={`${baseName}/restaurant/:restaurantName`}
            element={<Restaurant />}
          />
        </Routes>
        {showForm && (
          <div
            onClick={() => {
              setShowForm("");
            }}
            className="fixed top-0 left-0 w-full h-full bg-slate-700/40 z-[55]"
          ></div>
        )}
        <div className="fixed shadow-lg top-1/2 -translate-y-1/2 bg-white z-[60] left-1/2 -translate-x-1/2 rounded-xl border overflow-hidden ">
          {showForm === "method" && <LoginMethod setShowForm={setShowForm} />}
          {showForm === "signup" && <Signup setShowForm={setShowForm} />}
          {showForm === "login" && <Login setShowForm={setShowForm} />}
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
