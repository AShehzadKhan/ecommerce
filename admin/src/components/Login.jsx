import { useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(`${backendUrl}/api/user/admin`, {
        email,
        password,
      });

      if (response.data.success) {
        setToken(response.data.token);
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center py-2 px-4 sm:py-5 sm:px-8 font-medium">
        <h1 className="text-2xl md:text-3xl text-gray-700 cursor-pointer hover:text-red-400 transition-colors duration-200">
          Faizan Fabrics
        </h1>
      </div>
      <form
        onSubmit={submitHandler}
        className="flex flex-col items-center w-[90%] min-h-screen sm:max-w-96 mx-auto mt-14 gap-4"
      >
        <div className="inline-flex items-center gap-2 mb-2 mt-10">
          <h1 className="text-3xl">Admin Panel</h1>
          <hr className="border-none h-[1.5px] w-8 bg-gray-600" />
        </div>
        <input
          type="email"
          className="w-full px-3 py-2 border border-gray-600"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="w-full px-3 py-2 border border-gray-600"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-black text-white font-light py-2 w-full mt-4">
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
