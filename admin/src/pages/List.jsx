import { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { X } from "lucide-react";
import { assets } from "../assets/assets";

const List = ({ token }) => {
  const [productList, setProductList] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/product/list`);
      if (response.data.success) {
        setProductList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(
        `${backendUrl}/api/product/remove`,
        { id },
        { headers: { token } },
      );
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchProducts();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <p className="mb-4 text-lg font-medium text-gray-800">
        All Products List
      </p>

      <div className="flex flex-col gap-3 w-full overflow-x-auto">
        {/* ProductList Table Title */}

        <div className="grid grid-cols-[80px_1fr_100px_90px_70px] md:grid-cols-[100px_1fr_150px_130px_90px] px-2 md:px-4 py-2 border border-gray-300 bg-gray-100 text-sm rounded-md shadow-sm min-w-125 md:min-w-175">
          <b className="text-gray-700 text-center text-xs md:text-sm">Image</b>
          <b className="text-gray-700 text-center text-xs md:text-sm">Name</b>
          <b className="text-gray-700 text-center text-xs md:text-sm">
            Category
          </b>
          <b className="text-gray-700 text-center text-xs md:text-sm">Price</b>
          <b className="text-center text-gray-700 text-xs md:text-sm">Action</b>
        </div>

        {/* -------Product List */}

        {productList &&
          productList.map((product, index) => (
            <div
              key={index}
              className="grid grid-cols-[80px_1fr_100px_90px_70px] md:grid-cols-[100px_1fr_150px_130px_90px] items-center gap-1 md:gap-2 py-2 px-2 md:px-4 border border-gray-300 text-sm rounded-md bg-white hover:bg-gray-50 transition-colors duration-150 min-w-125 md:min-w-175"
            >
              <div className="flex justify-center">
                <img
                  className="w-10 h-10 md:w-14 md:h-14 object-cover rounded"
                  src={product.image[0]}
                  alt=""
                />
              </div>
              <p className="text-gray-800 truncate text-center text-xs md:text-sm">
                {product.name}
              </p>
              <p className="text-gray-600 truncate text-center text-xs md:text-sm">
                {product.category}
              </p>
              <p className="text-gray-800 text-center text-xs md:text-sm">
                {currency}
                {product.price}
              </p>
              <p
                onClick={() => removeProduct(product._id)}
                className="text-center cursor-pointer text-base md:text-lg font-semibold text-red-600 hover:text-red-800 transition-colors duration-150"
              >
                X
              </p>
            </div>
          ))}
      </div>
    </>
  );
};

export default List;
