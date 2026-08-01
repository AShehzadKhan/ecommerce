import { toast } from "react-toastify";

export const successMessage = (msg) => {
  toast.success(msg, { autoClose: 1500, position: "top-right" });
};

export const errorMessage = (msg) => {
  toast.error(msg, { autoClose: 1500, position: "top-right" });
};
