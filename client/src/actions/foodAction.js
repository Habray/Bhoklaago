import axios from "axios";
export const getAllFoods = () => {
  dispatch({ type: "GET_FOODS_REQUEST" });

  try {
    const response = axios.get("./api/getfoods");
    console.log(response);
    dispatch({ type: "GET_FOODS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_FOODS_FAILED", payload: error });
  }
};
