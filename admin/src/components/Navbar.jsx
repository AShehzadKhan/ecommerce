import { toast } from "react-toastify";

const Navbar = ({ setToken }) => {
  const handleLogout = () => {
    toast.success("Logout Successfully");
    setToken("");
  };
  return (
    <div className="flex items-center justify-between py-2 px-4 sm:py-5 sm:px-8 font-medium">
      <h1 className="text-2xl md:text-3xl text-gray-700 cursor-pointer hover:text-red-400 transition-colors duration-200">
        Faizan Fabrics
      </h1>

      <button
        onClick={handleLogout}
        className="bg-gray-600 text-white px-5 py-2 rounded-full cursor-pointer sm:px-7 sm:py-2 text-xs sm:text-sm"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
