import { REGISTER_USER } from "../../Axios/userAxios";

const initialState = {
  addUserResult: false,
  addUserLoading: false,
  addUserError: false,
};

const users_reducer = (state = initialState, action) => {
  switch (action.type) {
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
