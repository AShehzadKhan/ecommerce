import { useState } from "react";
import { assets } from "../assets/assets.js";
import CartTotal from "../components/CartTotal";
import Title from "../components/Title";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext.jsx";

const PlaceOrder = () => {
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const navigate = useNavigate();
  const {
    token,
    backendUrl,
    cartItems,
    setCartItems,
    getCartAmount,
    delivery_fee,
    products,
  } = useContext(ShopContext);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const submitHandler = async (e) => {
    try {
      e.preventDefault();

      const orderItems = [];

      for (const items in cartItems) {
        for (const size in cartItems[items]) {
          const quantity = cartItems[items][size];

          if (quantity > 0) {
            const itemInfo = structuredClone(
              products.find((product) => product._id === items),
            );

            if (itemInfo) {
              itemInfo.size = size;
              itemInfo.quantity = quantity;

              orderItems.push(itemInfo);
            }
          }
        }
      }

      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee,
      };

      if (paymentMethod === "easypaisa") {
        return toast.info(
          "Easypaisa payment is coming soon try 'CASH ON DELIVERY' method",
        );
      }

      if (paymentMethod === "jazzcash") {
        return toast.info(
          "Jazzcash payment is coming soon try 'CASH ON DELIVERY' method",
        );
      }

      if (paymentMethod === "cod") {
        const response = await axios.post(
          `${backendUrl}/api/order/place`,
          orderData,
          { headers: { token } },
        );
        console.log(response);
        if (response.data.success) {
          setCartItems({});
          navigate("/orders");
          toast.success(response.data.message);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t"
    >
      {/* -----------Left Side--------- */}

      <div>
        <div className="flex flex-col gap-4 w-full sm:w-max-[480px] ">
          <div className="text-xl sm:text-2xl my-3">
            <Title text1={"DELIVERY"} text2={"INFORMATION"} />
          </div>

          <div className="flex gap-3">
            <input
              type="text"
              className="border border-gray-300 rounded py-1 5 px-3 5 w-full"
              placeholder="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={onChangeHandler}
              required
            />
            <input
              type="text"
              className="border border-gray-300 rounded py-1 5 px-3 5 w-full"
              placeholder="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={onChangeHandler}
              required
            />
          </div>

          <input
            type="email"
            className="border border-gray-300 rounded py-1 5 px-3 5 w-full"
            placeholder="Email address"
            name="email"
            value={formData.email}
            onChange={onChangeHandler}
            required
          />
          <input
            type="text"
            className="border border-gray-300 rounded py-1 5 px-3 5 w-full"
            placeholder="Street"
            name="street"
            value={formData.street}
            onChange={onChangeHandler}
            required
          />

          <div className="flex gap-3">
            <input
              type="text"
              className="border border-gray-300 rounded py-1 5 px-3 5 w-full"
              placeholder="City"
              name="city"
              value={formData.city}
              onChange={onChangeHandler}
              required
            />
            <input
              type="text"
              className="border border-gray-300 rounded py-1 5 px-3 5 w-full"
              placeholder="State"
              name="state"
              value={formData.state}
              onChange={onChangeHandler}
              required
            />
          </div>

          <div className="flex gap-3">
            <input
              type="number"
              className="border border-gray-300 rounded py-1 5 px-3 5 w-full"
              placeholder="Zip Code"
              name="zipcode"
              value={formData.zipcode}
              onChange={onChangeHandler}
              required
            />
            <input
              type="text"
              className="border border-gray-300 rounded py-1 5 px-3 5 w-full"
              placeholder="Country"
              name="country"
              value={formData.country}
              onChange={onChangeHandler}
              required
            />
          </div>
          <input
            type="tel"
            className="border border-gray-300 rounded py-1 5 px-3 5 w-full"
            placeholder="Phone number"
            name="phone"
            value={formData.phone}
            onChange={onChangeHandler}
            required
          />
        </div>
      </div>

      {/* ----------Right Side----------- */}

      <div className="mt-8">
        <div className=" min-w-80">
          <CartTotal />
        </div>

        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          {/* ---------Payment Method Selection--------- */}

          <div className="flex flex-col gap-3 lg:flex-row">
            <div
              onClick={() => setPaymentMethod("easypaisa")}
              className="flex items-center gap-2 border p-2 pr-6 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${paymentMethod === "easypaisa" ? "bg-green-400 border-none" : ""}`}
              ></p>
              <img className="w-16 sm:w-20" src={assets.easypaisa} alt="" />
            </div>
            <div
              onClick={() => setPaymentMethod("jazzcash")}
              className="flex items-center gap-3 border p-2 pr-6 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${paymentMethod === "jazzcash" ? "bg-green-400 border-none" : ""}`}
              ></p>
              <img className="w-13 sm:w-16" src={assets.jazz_cash} alt="" />
            </div>
            <div
              onClick={() => setPaymentMethod("cod")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${paymentMethod === "cod" ? "bg-green-400 border-none" : ""}`}
              ></p>
              <p className="text-sm text-gray-600 mx-5 font-medium">
                CASH ON DELIVERY
              </p>
            </div>
          </div>

          <div className="w-full text-end mt-8">
            <button
              type="submit"
              className="bg-black text-white px-16 py-3 text-sm active:bg-gray-600"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
