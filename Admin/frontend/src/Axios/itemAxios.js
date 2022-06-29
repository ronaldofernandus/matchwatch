import axios from "axios";
export const getListItem = "getListItem";
export const addItemReducer = "addItemReducer";
export const deleteItemReducer = "deleteItemReducer";
export const getDetailItem = "getDetailItem";
export const updateItemReducer = "updateItemReducer";

export const getItem = () => {
  const access_token = localStorage.getItem("access_token");
  return (dispatch) => {
    dispatch({
      type: "getListItem",
      payload: {
        loading: false,
        data: false,
        errorMessage: false,
      },
    });
    axios({
      method: "GET",
      url: "http://localhost:4000/line",
      timeout: 120000,

      headers: {
        access_token: access_token,
      },
    })
      .then((response) => {
        dispatch({
          type: "getListItem",
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: "getListItem",
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
