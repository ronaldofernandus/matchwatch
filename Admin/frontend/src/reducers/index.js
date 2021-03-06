import { combineReducers } from "redux";
import productReducers from "./product";
import orderReducers from "./order";
import cartListReducers from "./cart";
import itemReducers from "./item";
import imageReducers from "./image";
import userReducers from "./user";
export default combineReducers({
  productReducers,
  orderReducers,
  cartListReducers,
  itemReducers,
  imageReducers,
  userReducers,
});
