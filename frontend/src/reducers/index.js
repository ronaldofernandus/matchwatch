import productReducer from './product/product'
import userReducer from './user/user'
import orderReducer from './order/order'
import {combineReducers} from 'redux'


export default combineReducers({
    productReducer,userReducer,orderReducer
})