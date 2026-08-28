import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { useContext } from "react";
import { ShopContext } from "./context/ShopContext";

const App = () => {
  const { token } = useContext(ShopContext);
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <ToastContainer autoClose={1800} />

      <Navbar />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route
          path="/cart"
          element={token ? <Cart /> : <Navigate to={"/login"} />}
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/place-order"
          element={token ? <PlaceOrder /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/orders"
          element={token ? <Orders /> : <Navigate to={"/login"} />}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
