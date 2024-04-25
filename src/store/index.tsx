import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import rocketsReducer from "./RocketsReducer";

const config = {
  key: "spaceX",
  storage,
  version: 1,
};

const reducer = combineReducers({
  rockets: rocketsReducer,
});

const presisted = persistReducer(config, reducer);

const store = configureStore({
  reducer: presisted,
});
const persistor = persistStore(store);

export { store, persistor };
