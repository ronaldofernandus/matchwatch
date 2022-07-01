import {
  GET_DETAIL_USER,
  REGISTER,
  LOGIN,
  LOGOUT,
} from "../../action/UserAction";

const initialState = {
  getDetailUserResult: false,
  getDetailUserLoading: false,
  getDetailUserError: false,

  registerResult: false,
  registerLoading: false,
  registerError: false,

  loginResult: false,
  loginLoading: false,
  loginError: false,

  logOutResult: false,
};

const users_reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAIL_USER:
      return {
        ...state,
        getDetailUserResult: action.payload.data,
        getDetailUserLoading: action.payload.loading,
        getDetailUserError: action.payload.errorMessage,
      };
    case REGISTER:
      console.log("4.Masuk Reduct");
      return {
        ...state,
        registerResult: action.payload.data,
        registerLoading: action.payload.loading,
        registerError: action.payload.errorMesage,
      };
    case LOGIN:
      return {
        ...state,
        loginResult: action.payload.data,
        loginLoading: action.payload.loading,
        loginError: action.payload.errorMesage,
      };

    case LOGIN:
      return {
        ...state,
        loginResult: action.payload.data,
        loginLoading: action.payload.loading,
        loginError: action.payload.errorMesage,
      };

    case LOGOUT:
      return {
        ...state,
        logOutResult: action.payload.data,
      };
    default:
      return state;
  }
};

export default users_reducer;
