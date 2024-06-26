import { toast } from "react-toastify";
export const notifyAlert = (text, type) =>
  toast[type](text, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: " colored",
  });
