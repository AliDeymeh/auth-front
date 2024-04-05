import axios from "axios";
import { getCookie } from "./useCookie";
import { toast } from "react-toastify";

import { Error } from "Hooks/Toast";
import { baseApi } from "Services/config";

export const handelTextError = (errors) => {
  let textArray = [];

  const values = Object.values(errors);

  values.forEach((error, index) => {
    if (typeof error === "object") {
      textArray[index] = "";
      error?.forEach((textError, i) => {
        textArray[index] += textError + (i < error?.length - 1 ? "و" : "");
      });
    } else {
      textArray[index] = error;
    }
  });

  let textError = "";

  textArray.forEach((e, i) => {
    textError += i + 1 + " - " + e + " \n";
  });

  Error(textError);
};

const useRequest = () => {
  // const spinner = useSpinner();

  const headers = {
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
      authorization: "Bearer " + getCookie("user"),
    },
  };

  const headerUploadFile = {
    headers: {
      Accept: "application/json",
      "Content-type": "multipart/form-data",
      authorization: "Bearer " + getCookie("user"),
    },
  };

  const handelErrors = (res, type = "get") => {
    // if (spinner) spinner.end();

    switch (res?.status) {
      case 200:
        if (type === "delete" || type === "post")
          toast.success(res?.data?.message, {
            position: "top-right",
          });
        return res;

      case 201:
        toast.success(res?.data?.message, {
          position: "top-right",
        });

        return res;
      case 318:
        if (type === "delete" || type === "post")
          toast.success(res?.data?.message, {
            position: "top-right",
          });
        return res;
      case 403:
        toast.error(res?.data?.message, {
          position: "top-right",
        });
        // router.push("/auth/login");
        return res;
      case 401:
        return res;

      case 422:
        if (Array.isArray(res?.data?.message)) {
          handelTextError(res?.data?.message);
        } else if (typeof res?.data?.message === "string") {
          Error(res?.data?.message);
        }

        return res;
      case 400:
        console.log(res);
        if (Array.isArray(res?.data?.message)) {
          handelTextError(res?.data?.message);
        } else if (typeof res?.data?.message === "string") {
          Error(res?.data?.message);
        }

        return res;
      default:
        toast.error("!مشکلی پیش آمده است", {
          position: "top-right",
        });
        break;
    }
  };

  const Get = async (url, action = () => {}, params = {}) => {
    try {
      // spinner.start();
      const res = await axios.get(baseApi + url, { ...headers, params });

      const errors = handelErrors(res);

      if (res.status === 200 || res.status === 201) {
        action(res);
      }
      return errors;
    } catch (err) {
      console.log(err);
      const errors = handelErrors(err.response);
      return errors;
    }
  };

  const Post = async (
    url,
    body,
    action = () => {},
    configReq = {
      showMessage: true,
    },
  ) => {
    // spinner.start();

    try {
      const res = await axios.post(baseApi + url, body, headers);

      const response = handelErrors(
        res,
        !configReq?.showMessage ? "get" : "post",
      );

      if (response.status === 200 || response.status === 201) {
        action(response);
      }

      return response;
    } catch (err) {
      const errors = handelErrors(
        err.response,
        !configReq?.showMessage ? "get" : "post",
      );
      return errors;
    }
  };

  const Delete = async (url, data, isHandelError = true) => {
    let res;
    try {
      // spinner.start();
      res = await axios.post(baseApi + url, data, headers);
      if (isHandelError) {
        const errors = handelErrors(res, "delete");
        return errors;
      } else {
        return res;
      }
    } catch (err) {
      if (isHandelError) {
        const errors = handelErrors(err.response, "delete");
        return errors;
      } else {
        return err.response;
      }
    }
  };

  const Update = async (url, data) => {
    let res;
    try {
      // spinner.start();

      res = await axios.post(
        baseApi + url,
        { ...data, _method: "PUT" },
        headers,
      );

      const errors = handelErrors(res);
      return errors;
    } catch (err) {
      console.log(err);
    }
  };

  const UploadFile = async (url, data, isHandelError = true) => {
    let res;
    try {
      // spinner.start();

      const formData = new FormData();

      Object.entries(data).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((file) => {
            formData.append(key, file);
          });
        } else {
          formData.append(key, value);
        }
      });

      res = await axios.post(baseApi + url, formData, headerUploadFile);
      if (isHandelError) {
        const errors = handelErrors(res, "post");
        return errors;
      } else {
        return res;
      }
    } catch (err) {
      if (isHandelError) {
        const errors = handelErrors(err.response, "post");
        return errors;
      } else {
        return err.response;
      }
    }
  };

  const CustomUpload = async (url, data, isHandelError = true) => {
    let res;
    try {
      // spinner.start();

      res = await axios.post(baseApi + url, data, headerUploadFile);
      if (isHandelError) {
        const errors = handelErrors(res, "post");
        return errors;
      } else {
        return res;
      }
    } catch (err) {
      if (isHandelError) {
        const errors = handelErrors(err.response, "post");
        return errors;
      } else {
        return err.response;
      }
    }
  };

  return {
    Get,
    Post,
    // PostGet,
    Delete,
    Update,
    UploadFile,
    CustomUpload,
  };
};

export default useRequest;
