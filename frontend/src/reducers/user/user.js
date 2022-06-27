import { GET_DETAIL_USER, REGISTER_USER } from "../../action/UserAction";

const initialState = {
  getDetailUserResult: false,
  getDetailUserLoading: false,
  getDetailUserError: false,

  addUserResult: false,
  addUserLoading: false,
  addUserError: false,
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
    case REGISTER_USER:
      return {
        ...state,
        addUserResult: action.payload.data,
        addUserLoading: action.payload.loading,
        addUserError: action.payload.errorMesage,
      };
    default:
      return state;
  }
};

export default users_reducer;
