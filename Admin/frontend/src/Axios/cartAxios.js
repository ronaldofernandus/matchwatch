import axios from "axios";
export const getListCart = "getListCart";
export const addCartReducer = "addCartReducer";
export const deleteCartReducer = "deleteCartReducer";
export const getDetailCart = "getDetailCart";
export const updateCartReducer = "updateCartReducer";

export const getCart = () => {
  const access_token = localStorage.getItem("access_token");
  return (dispatch) => {
    dispatch({
      type: "getListCart",
      payload: {
        loading: false,
        data: false,
        errorMessage: false,
      },
    });
    axios({
      method: "GET",
      url: "http://localhost:4000/shoppingcarts/all",
      timeout: 120000,

      headers: {
        access_token: access_token,
      },
    })
      .then((response) => {
        dispatch({
          type: "getListCart",
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: "getListCart",
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
