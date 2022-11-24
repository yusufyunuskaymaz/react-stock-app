import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFail, fetchStart, getSuccess } from "../features/stockSlice";
import { axiosWithToken } from "../service/axiosInstance";

const useStockCalls = () => {
  const dispatch = useDispatch();

  const { token } = useSelector((state) => state.auth);
  const BASE_URL = "http://14129.fullstack.clarusway.com/";

  const getStockData = async (url) => {
    // const url = "firms
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.get(`${BASE_URL}stock/${url}`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      dispatch(getSuccess({ data, url }));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error.message);
    }
  };
  const getFirms = async () => getStockData("firms");
  const getSales = async () => getStockData("sales");

  return { getFirms, getSales };
};

export default useStockCalls;
