import Swal from "sweetalert2";
import useRequest from "./useRequest";

function useSupport() {
  const { Post } = useRequest();

  const estate = (body, customRes = null) => {
    const defaultBody = {
      type: "estate",
      country_id: 231,
      f_name: 0,
      l_name: 0,
      phone_number: 0,
      category_id: 0,
      units_number: 0,
      cityZone_id: 0,
      currency: 0,
      low_price: 0,
      max_price: 0,
    };

    Post(
      "/storeSupport",
      { ...defaultBody, ...body },
      (res) => {
        if (customRes) customRes();
        Swal.fire({
          title: "عملیات موفق",
          text: res?.data?.message,
          icon: "success",
          confirmButtonText: "تایید",
        });
      },
      {
        showMessage: false,
      }
    );
  };

  const currencyOffline = (body, customRes = null) => {
    const defaultBody = {
      type: "currency",
      country_id: 231,
      f_name: 0,
      l_name: 0,
      phone_number: 0,
      convert_type: "dirham_rial",
      from: 0,
      to: 0,
      paymentType: "physical", // in:online,physical
      address: "",
      long_location: "",
      lat_location: "",
      // if online type
      ibanNumber: null,
      userInfoAccount: null,
      bankName: null,
    };

    Post(
      "/storeSupport",
      { ...defaultBody, ...body },
      (res) => {
        if (customRes) customRes();
        Swal.fire({
          title: "عملیات موفق",
          text: res?.data?.message,
          icon: "success",
          confirmButtonText: "تایید",
        });
      },
      {
        showMessage: false,
      }
    );
  };

  const car = (body, customRes = null) => {
    const defaultBody = {
      type: "car",
      country_id: 231,
      f_name: 0,
      l_name: 0,
      phone_number: 0,
      start_date: null,
      end_date: null,
      car_id: null,
    };

    Post(
      "/storeSupport",
      { ...defaultBody, ...body },
      (res) => {
        if (customRes) customRes();
        Swal.fire({
          title: "عملیات موفق",
          text: res?.data?.message,
          icon: "success",
          confirmButtonText: "تایید",
        });
      },
      {
        showMessage: false,
      }
    );
  };

  const tafrih = (body, openData, customRes = null) => {
    const defaultBody = {
      type: "entertainment",
      country_id: 231,
      f_name: 0,
      l_name: 0,
      phone_number: 0,
      date: 0,
    };

    Post(
      "/storeFactorApi",
      {
        ...defaultBody,
        ...body,
        entertainment_id: openData?.entertainment_id,
        option_id: openData?.id,
      },
      (res) => {
        if (customRes) customRes(res);
        Swal.fire({
          title: "عملیات موفق",
          text: res?.data?.message,
          icon: "success",
          confirmButtonText: "تایید",
        });
      },
      {
        showMessage: false,
      }
    );
  };

  return {
    estate,
    currencyOffline,
    car,
    tafrih,
  };
}

export default useSupport;
