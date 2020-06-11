import { combineReducers } from "redux";
import user from "./user";
import product from "./product";
import category from "./category";
import activity from "./activity";
import precio from "./precio";




const reducer = combineReducers({
    user,
    product,
    category,
    activity,
    precio,

})
export default reducer;