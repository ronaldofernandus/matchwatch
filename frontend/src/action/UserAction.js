import axios from "axios";

const GET_DETAIL_USER = "GET_DETAIL_USER";
const REGISTER_USER = "REGISTER_USER";
const GET_USER = "GET_USER";
const get_profile_user = (access_token) => {
  return (dispatch) => {
    // untuk loading
    dispatch({
      type: "GET_USER",
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // get API
    axios({
      method: "GET",
      url: "http://localhost:4000/user/info_user",
      timeout: 120000,
      headers: {
        Access_Token: access_token,
      },
    })
      .then((response) => {
        dispatch({
          type: "GET_DETAIL_USER",
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: "GET_DETAIL_USER",
          payload: {
            loading: false,
            data: error.message,
            errorMessage: false,
          },
        });
      });
  };
};
const addUser = (data) => {
  return (dispatch) => {
    dispatch({
      type: "REGISTER_USER",
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
    axios({
      method: "POST",
      url: "http://localhost:4000/user/register",
      data: data,
    })
      .then((response) => {
        dispatch({
          type: "REGISTER_USER",
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((err) => [
        dispatch({
          type: "REGISTER_USER",
          payload: {
            loading: false,
            data: err.message,
            errorMessage: false,
          },
        }),
      ]);
  };
};

export { GET_DETAIL_USER, get_profile_user, addUser, REGISTER_USER };
