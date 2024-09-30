// import Card from "./components/card";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./pages/home/home";
import City from "./pages/city/city";
import Restaurant from "./pages/restaurant/restaurant";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/city/:cityName" element={<City />} />
          <Route path="/restaurant/:restaurantName" element={<Restaurant />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
