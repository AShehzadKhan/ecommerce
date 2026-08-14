import { useState } from "react";
import { assets } from "../assets/asset";
import CartTotal from "../components/cartTotal";
import Title from "../components/Title";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const navigate = useNavigate();
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
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
            />
            <input
              type="text"
              className="border border-gray-300 rounded py-1 5 px-3 5 w-full"
              placeholder="Last Name"
            />
          </div>

          <input
            type="email"
            className="border border-gray-300 rounded py-1 5 px-3 5 w-full"
            placeholder="Email address"
          />
          <input
            type="text"
            className="border border-gray-300 rounded py-1 5 px-3 5 w-full"
            placeholder="Street"
          />

          <div className="flex gap-3">
            <input
              type="text"
              className="border border-gray-300 rounded py-1 5 px-3 5 w-full"
              placeholder="City"
            />
            <input
              type="text"
              className="border border-gray-300 rounded py-1 5 px-3 5 w-full"
              placeholder="State"
            />
          </div>

          <div className="flex gap-3">
            <input
              type="number"
              className="border border-gray-300 rounded py-1 5 px-3 5 w-full"
              placeholder="Zip Code"
            />
            <input
              type="text"
              className="border border-gray-300 rounded py-1 5 px-3 5 w-full"
              placeholder="Country"
            />
          </div>
          <input
            type="tel"
            className="border border-gray-300 rounded py-1 5 px-3 5 w-full"
            placeholder="Phone number"
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
              <img className="w-5 sm:w-8" src={assets.easypaisa} alt="" />
              <p className="text-sm">Easypaisa</p>
            </div>
            <div
              onClick={() => setPaymentMethod("jazzcash")}
              className="flex items-center gap-3 border p-2 pr-6 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${paymentMethod === "jazzcash" ? "bg-green-400 border-none" : ""}`}
              ></p>
              <img className="w-20 sm:w-23" src={assets.jazz_cash} alt="" />
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
              onClick={() => navigate("/orders")}
              className="bg-black text-white px-16 py-3 text-sm active:bg-gray-600"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
