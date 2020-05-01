import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./users/user.reducer";
import cartReducer from "./cart/cart.reducer";
import shopReducer from "./directory/dataShop.reducer";
import directoryReducer from "./directory/directory.reducer"


const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  shop: shopReducer,
  menu: directoryReducer
});

export default persistReducer(persistConfig, rootReducer);
