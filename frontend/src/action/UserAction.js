import axios from "axios";
import Swal from "sweetalert2";
const GET_DETAIL_USER = "GET_DETAIL_USER";
export const REGISTER = "REGISTER";
const GET_USER = "GET_USER";
export const LOGOUT = "LOGOUT";
export const LOGIN = "LOGIN";
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
export const register = (data) => {
  // console.log(data)
  console.log("2.action");
  return (dispatch) => {
    // Loading
    dispatch({
      type: "REGISTER",
      payload: {
        loading: false,
        data: false,
        errorMessage: false,
      },
    });

    // Success
    axios({
      method: "POST",
      url: "http://localhost:4000/user/register",
      timeout: 120000,
      data: data,
    })
      .then((response) => {
        console.log("3.Berhail", response.data);
        dispatch({
          type: "REGISTER",
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        console.log("3.Gagal", error);
        // Error
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message,
        });
        dispatch({
          type: "REGISTER",
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const login = (data) => {
  return (dispatch) => {
    // Loading
    dispatch({
      type: "LOGIN",
      payload: {
        loading: false,
        data: false,
        errorMessage: false,
      },
    });

    // Success
    axios({
      method: "POST",
      url: "http://localhost:4000/user/login",
      timeout: 120000,
      data: data,
    })
      .then((response) => {
        // localStorage.setItem('id',response.data.UserId);

        localStorage.setItem("access_token", response.data.access_token);

        dispatch({
          type: "LOGIN",
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        // Error
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message,
        });
        dispatch({
          type: "LOGIN",
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const logout = (data) => {
  return async (dispatch) => {
    dispatch({
      type: "CLEAR",
      payload: {
        loading: false,
        data: false,
        errorMessage: false,
      },
    });
  };
};

export { GET_DETAIL_USER, get_profile_user };
