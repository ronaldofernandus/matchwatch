import axios from "axios";
const URL = "http://localhost:4000/user";
const REGISTER_USER = "REGISTER_USER";
const getUser = async (cb) => {
  try {
    let getUser = await axios({
      method: "GET",
      url: URL,
    });
    cb(getUser);
  } catch (error) {
    console.log(error);
  }
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

export { getUser, addUser, REGISTER_USER };
