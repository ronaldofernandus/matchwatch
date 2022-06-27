import {
  POST_ORDER_LINE_SHOP,
  GET_ORDER_USER,
  POST_UPDATE_USER,
  DELETE_ORDER,
  DETAIL_ORDER,
  transaction,
} from "../../action/OrderAction";

const initialState = {
  postorderResult: false,
  postorderLoading: false,
  postorderError: false,

  getorderuserResult: false,
  getorderuserLoading: false,
  getorderuserError: false,

  updateorderuserResult: false,
  updateorderuserLoading: false,
  updateorderuserError: false,

  deleteorderuserResult: false,
  deleteorderuserLoading: false,
  deleteorderuserError: false,

  getdetailorderuserResult: false,

  getTransactionResult: false,
  getTransactionLoading: false,
  getTransactionError: false,
};

const orders = (state = initialState, action) => {
  switch (action.type) {
    case POST_ORDER_LINE_SHOP:
      return {
        ...state,
        postorderResult: action.payload.data,
        postorderLoading: action.payload.loading,
        postorderError: action.payload.errorMessage,
      };
    case GET_ORDER_USER:
      return {
        ...state,
        getorderuserResult: action.payload.data,
        getorderuserLoading: action.payload.loading,
        getorderuserError: action.payload.errorMessage,
      };
    case POST_UPDATE_USER:
      return {
        ...state,
        updateorderuserResult: action.payload.data,
        updateorderuserLoading: action.payload.loading,
        updateorderuserError: action.payload.errorMessage,
      };
    case DELETE_ORDER:
      return {
        ...state,
        deleteorderuserResult: action.payload.data,
        deleteorderuserLoading: action.payload.loading,
        deleteorderuserError: action.payload.errorMessage,
      };
    case DETAIL_ORDER:
      return {
        ...state,
        getdetailorderuserResult: action.payload.data,
      };
    case transaction:
      return {
        ...state,
        getTransactionResult: action.payload.data,
        getTransactionLoading: action.payload.loading,
        getTransactionError: action.payload.erroTransaction,
      };
    default:
      return state;
  }
};

export default orders;
