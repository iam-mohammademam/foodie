// import Card from "./components/card";
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

const App = () => {
  const [showForm, setShowForm] = useState("");
  return (
    <>
      <BrowserRouter>
        <Header setShowForm={setShowForm} />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/city/:cityName" element={<City />} />
          <Route path="/restaurant/:restaurantName" element={<Restaurant />} />
        </Routes>
        <div className="fixed shadow-lg bottom-3 bg-white z-[60] left-1/2 -translate-x-1/2 rounded-xl border overflow-hidden ">
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
